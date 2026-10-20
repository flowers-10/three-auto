/**
 * Optimize a supplied GLB without rebuilding or changing its materials.
 * Requires Node 22+, @gltf-transform/{core,extensions,functions},
 * meshoptimizer, and sharp. CAMPUS_ASSET_TOOLS may point to a directory
 * containing an existing node_modules installation of these offline tools.
 *
 * Usage: node optimize-campus-building.mjs input.glb output-directory asset-name
 */
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [input, output, name] = process.argv.slice(2);
if (!input || !output || !name || !/^[a-z0-9-]+$/.test(name)) {
  throw new Error('Usage: node optimize-campus-building.mjs input.glb output-directory asset-name');
}
const require = createRequire(import.meta.url);
const resolve = (name) => require.resolve(name, process.env.CAMPUS_ASSET_TOOLS
  ? { paths: [process.env.CAMPUS_ASSET_TOOLS] } : undefined);
const { NodeIO } = require(resolve('@gltf-transform/core'));
const { ALL_EXTENSIONS } = require(resolve('@gltf-transform/extensions'));
const { weld, prune, compactPrimitive, textureCompress, meshopt, getBounds } = require(resolve('@gltf-transform/functions'));
const { MeshoptEncoder, MeshoptDecoder, MeshoptSimplifier } = await import(pathToFileURL(resolve('meshoptimizer')).href);
const sharp = require(resolve('sharp'));
await Promise.all([MeshoptEncoder.ready, MeshoptDecoder.ready, MeshoptSimplifier.ready]);
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder,
});

function summarize(doc) {
  let triangles = 0;
  let vertices = 0;
  for (const mesh of doc.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      triangles += (prim.getIndices()?.getCount() ?? prim.getAttribute('POSITION').getCount()) / 3;
      vertices += prim.getAttribute('POSITION').getCount();
    }
  }
  const bounds = getBounds(doc.getRoot().listScenes()[0]);
  return { triangles, vertices, bounds, dimensions: bounds.max.map((n, i) => n - bounds.min[i]) };
}

const source = await io.read(input);
const report = { source: { bytes: (await stat(input)).size, ...summarize(source) }, versions: {} };
await mkdir(output, { recursive: true });
for (const level of ['light', 'detail']) {
  const doc = await io.read(input);
  await doc.transform(weld());
  if (level === 'light') {
    for (const mesh of doc.getRoot().listMeshes()) {
      for (const prim of mesh.listPrimitives()) {
        const position = prim.getAttribute('POSITION');
        const normal = prim.getAttribute('NORMAL');
        const uv = prim.getAttribute('TEXCOORD_0');
        const indices = new Uint32Array(prim.getIndices().getArray());
        const count = position.getCount();
        const attributes = new Float32Array(count * 5);
        for (let i = 0; i < count; i++) {
          const values = normal ? normal.getElement(i, []) : [0, 1, 0];
          const coords = uv ? uv.getElement(i, []) : [0, 0];
          attributes.set([...values, ...coords], i * 5);
        }
        const target = Math.min(indices.length, 120000 * 3);
        const [reduced, error] = MeshoptSimplifier.simplifyWithAttributes(
          indices, new Float32Array(position.getArray()), 3, attributes, 5,
          [0.5, 0.5, 0.5, 2, 2], null, target, 0.005, ['Permissive', 'Prune'],
        );
        prim.getIndices().setArray(reduced);
        compactPrimitive(prim);
        console.log(JSON.stringify({ level, triangles: reduced.length / 3, error }));
      }
    }
  }
  await doc.transform(
    prune(),
    textureCompress({ encoder: sharp, targetFormat: 'webp',
      resize: level === 'detail' ? [2048, 2048] : [1024, 1024], quality: 92 }),
    meshopt({ encoder: MeshoptEncoder, level: level === 'detail' ? 'medium' : 'high',
      quantizePosition: 16, quantizeTexcoord: 14, quantizeNormal: 12 }),
  );
  const file = path.join(output, `${name}${level === 'detail' ? '-detail' : ''}.glb`);
  await io.write(file, doc);
  const decoded = await io.read(file);
  for (const accessor of decoded.getRoot().listAccessors()) {
    for (const value of accessor.getArray() ?? []) {
      if (!Number.isFinite(value)) throw new Error(`Non-finite attribute in ${file}`);
    }
  }
  const textures = await Promise.all(decoded.getRoot().listTextures().map(async (texture) => {
    const { width, height } = await sharp(texture.getImage()).metadata();
    return { mime: texture.getMimeType(), width, height };
  }));
  report.versions[level] = { file: path.basename(file), bytes: (await stat(file)).size,
    ...summarize(decoded), textures };
  if (level === 'detail' && report.versions[level].triangles !== report.source.triangles) {
    throw new Error('Detail model must preserve all source triangles.');
  }
  console.log(JSON.stringify(report.versions[level]));
}
await writeFile(path.join(output, `${name}-optimization.json`), `${JSON.stringify(report, null, 2)}\n`);
