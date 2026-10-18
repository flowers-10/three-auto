import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Packages generated images into simple glTF meshes. The road layout and
// planting are entirely in the authored texture, not procedural scene shapes.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'assets/campus');
const output = resolve(root, 'public/models/campus');

function floats(values) {
  return Buffer.from(new Float32Array(values).buffer);
}

function shorts(values) {
  return Buffer.from(new Uint16Array(values).buffer);
}

function align(buffer, fill = 0) {
  const padding = (4 - buffer.length % 4) % 4;
  return padding ? Buffer.concat([buffer, Buffer.alloc(padding, fill)]) : buffer;
}

function makeGlb({ positions, normals, uvs, indices, texture, alpha = false, name }) {
  const pieces = [floats(positions), floats(normals), floats(uvs), shorts(indices), readFileSync(texture)];
  const offsets = [];
  let length = 0;
  for (const piece of pieces) {
    offsets.push(length);
    length += align(piece).length;
  }
  const binary = Buffer.concat(pieces.map((piece) => align(piece)));
  const vertexCount = positions.length / 3;
  const bounds = (axis) => {
    const values = Array.from({ length: vertexCount }, (_, i) => positions[i * 3 + axis]);
    return [Math.min(...values), Math.max(...values)];
  };
  const [minX, maxX] = bounds(0);
  const [minY, maxY] = bounds(1);
  const [minZ, maxZ] = bounds(2);
  const views = pieces.map((piece, i) => ({
    buffer: 0, byteOffset: offsets[i], byteLength: piece.length,
    ...(i < 4 ? { target: i === 3 ? 34963 : 34962 } : {}),
  }));
  const gltf = {
    asset: { version: '2.0', generator: 'Campus image-to-mesh packager' },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, name }],
    meshes: [{ name, primitives: [{
      attributes: { POSITION: 0, NORMAL: 1, TEXCOORD_0: 2 },
      indices: 3, material: 0, mode: 4,
    }] }],
    materials: [{
      name: alpha ? 'Generated foliage' : 'Generated campus surface',
      pbrMetallicRoughness: {
        baseColorTexture: { index: 0 }, metallicFactor: 0, roughnessFactor: 1,
      },
      doubleSided: true,
      ...(alpha ? { alphaMode: 'MASK', alphaCutoff: 0.35 } : {}),
    }],
    textures: [{ sampler: 0, source: 0 }],
    samplers: [{ magFilter: 9729, minFilter: 9987, wrapS: 33071, wrapT: 33071 }],
    images: [{ mimeType: 'image/png', bufferView: 4 }],
    buffers: [{ byteLength: binary.length }],
    bufferViews: views,
    accessors: [
      { bufferView: 0, componentType: 5126, count: vertexCount, type: 'VEC3',
        min: [minX, minY, minZ], max: [maxX, maxY, maxZ] },
      { bufferView: 1, componentType: 5126, count: vertexCount, type: 'VEC3' },
      { bufferView: 2, componentType: 5126, count: vertexCount, type: 'VEC2' },
      { bufferView: 3, componentType: 5123, count: indices.length, type: 'SCALAR',
        min: [Math.min(...indices)], max: [Math.max(...indices)] },
    ],
  };
  const json = align(Buffer.from(JSON.stringify(gltf)), 0x20);
  const totalLength = 12 + 8 + json.length + 8 + binary.length;
  const header = Buffer.alloc(12);
  header.write('glTF', 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(totalLength, 8);
  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(json.length, 0);
  jsonHeader.write('JSON', 4);
  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(binary.length, 0);
  binHeader.write('BIN\0', 4);
  return Buffer.concat([header, jsonHeader, json, binHeader, binary]);
}

const ground = makeGlb({
  name: 'AI campus road and landscape ground 255x242m',
  positions: [-127.5, 0.06, -121, 127.5, 0.06, -121, 127.5, 0.06, 121, -127.5, 0.06, 121],
  normals: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
  uvs: [0, 0, 1, 0, 1, 1, 0, 1],
  indices: [0, 2, 1, 0, 3, 2],
  texture: resolve(source, 'campus-ground.png'),
});
writeFileSync(resolve(output, 'campus-ground.glb'), ground);
