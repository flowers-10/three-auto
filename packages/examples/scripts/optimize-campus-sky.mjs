/** Convert a linear EXR panorama to validated, RLE-compressed Radiance HDRs.
 * Usage: node optimize-campus-sky.mjs input.exr output-directory asset-name
 * Uses the project's existing Three.js loaders; no extra dependencies.
 */
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { FloatType } from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const [input, output, name] = process.argv.slice(2);
if (!input || !output || !name || !/^[a-z0-9-]+$/.test(name)) {
  throw new Error('Usage: node optimize-campus-sky.mjs input.exr output-directory asset-name');
}
const arrayBuffer = (bytes) => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);

function resize(source, width) {
  const factor = source.width / width;
  assert.ok(Number.isInteger(factor) && factor >= 1);
  if (factor === 1) return source;
  const height = source.height / factor;
  assert.ok(Number.isInteger(height));
  const data = new Float32Array(width * height * 4);
  // Average in linear HDR space to retain the sun's energy when downsampling.
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const target = (y * width + x) * 4;
    for (let dy = 0; dy < factor; dy++) for (let dx = 0; dx < factor; dx++) {
      const start = ((y * factor + dy) * source.width + x * factor + dx) * 4;
      for (let c = 0; c < 3; c++) data[target + c] += source.data[start + c] / (factor * factor);
    }
    data[target + 3] = 1;
  }
  return { width, height, data };
}

function encodeHDR({ width, height, data }) {
  assert.ok(width >= 8 && width <= 32767);
  const chunks = [Buffer.from(`#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y ${height} +X ${width}\n`)];
  const channels = new Uint8Array(width * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // EXRLoader outputs bottom-up rows (flipY=false); HDR expects top-down.
      const start = ((height - 1 - y) * width + x) * 4;
      const r = Math.max(0, data[start]), g = Math.max(0, data[start + 1]), b = Math.max(0, data[start + 2]);
      const maximum = Math.max(r, g, b);
      assert.ok(Number.isFinite(maximum));
      const exponent = maximum < 1e-32 ? 0 : Math.floor(Math.log2(maximum)) + 1;
      const scale = maximum < 1e-32 ? 0 : 256 / 2 ** exponent;
      channels[x] = Math.floor(r * scale);
      channels[width + x] = Math.floor(g * scale);
      channels[width * 2 + x] = Math.floor(b * scale);
      channels[width * 3 + x] = scale ? exponent + 128 : 0;
    }
    const encoded = Buffer.alloc(width * 8 + 12);
    encoded.set([2, 2, width >> 8, width & 255]);
    let cursor = 4;
    for (let c = 0; c < 4; c++) {
      const channel = channels.subarray(c * width, (c + 1) * width);
      let x = 0;
      while (x < width) {
        let run = 1;
        while (run < 127 && x + run < width && channel[x + run] === channel[x]) run++;
        if (run >= 4) {
          encoded[cursor++] = 128 + run;
          encoded[cursor++] = channel[x];
          x += run;
        } else {
          const start = x++;
          while (x < width && x - start < 128) {
            if (x + 3 < width && channel[x] === channel[x + 1] && channel[x] === channel[x + 2] && channel[x] === channel[x + 3]) break;
            x++;
          }
          encoded[cursor++] = x - start;
          encoded.set(channel.subarray(start, x), cursor);
          cursor += x - start;
        }
      }
    }
    chunks.push(encoded.subarray(0, cursor));
  }
  return Buffer.concat(chunks);
}

function validate(bytes, expected) {
  const decoded = new RGBELoader().setDataType(FloatType).parse(arrayBuffer(bytes));
  assert.equal(decoded.width, expected.width);
  assert.equal(decoded.height, expected.height);
  let maximumRelativeError = 0, maximumRadiance = 0;
  for (let y = 0; y < expected.height; y++) for (let x = 0; x < expected.width; x++) {
    const source = (y * expected.width + x) * 4;
    const target = ((expected.height - 1 - y) * expected.width + x) * 4;
    const peak = Math.max(...expected.data.subarray(source, source + 3), 1e-20);
    for (let c = 0; c < 3; c++) {
      const value = decoded.data[target + c];
      assert.ok(Number.isFinite(value));
      maximumRadiance = Math.max(maximumRadiance, value);
      maximumRelativeError = Math.max(maximumRelativeError, Math.abs(value - expected.data[source + c]) / peak);
    }
  }
  assert.ok(maximumRelativeError < .008, `RGBE conversion error: ${maximumRelativeError}`);
  return { maximumRelativeError, maximumRadiance };
}

const sourceBytes = await readFile(input);
const source = new EXRLoader().setDataType(FloatType).parse(arrayBuffer(sourceBytes));
assert.equal(source.width, source.height * 2, 'Expected a 2:1 panorama.');
const report = { source: { file: path.basename(input), bytes: sourceBytes.length, width: source.width, height: source.height }, versions: {} };
await mkdir(output, { recursive: true });
for (const width of [4096, 2048].filter((width) => width <= source.width)) {
  const image = resize(source, width);
  const bytes = encodeHDR(image);
  const validation = validate(bytes, image);
  const file = `${name}-${width / 1024}k.hdr`;
  await writeFile(path.join(output, file), bytes);
  report.versions[`${width / 1024}k`] = { file, bytes: (await stat(path.join(output, file))).size,
    width, height: image.height, ...validation };
  console.log(JSON.stringify(report.versions[`${width / 1024}k`]));
}
await writeFile(path.join(output, `${name}-optimization.json`), `${JSON.stringify(report, null, 2)}\n`);
