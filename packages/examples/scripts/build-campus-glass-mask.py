"""Pack the main building's teal glazing mask into clearcoat/roughness/metalness channels."""
import io
import json
import struct
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public/models/campus/twin-terrace-detail.glb'
OUTPUT = ROOT / 'public/models/campus/twin-terrace-glass-mask.webp'

with SOURCE.open('rb') as source:
    source.read(12)
    length, _ = struct.unpack('<II', source.read(8))
    gltf = json.loads(source.read(length))
    binary_length, _ = struct.unpack('<II', source.read(8))
    binary = source.read(binary_length)

texture_index = gltf['materials'][0]['pbrMetallicRoughness']['baseColorTexture']['index']
texture = gltf['textures'][texture_index]
image_index = texture.get('source', texture.get('extensions', {}).get('EXT_texture_webp', {}).get('source'))
view = gltf['bufferViews'][gltf['images'][image_index]['bufferView']]
offset = view.get('byteOffset', 0)
image = Image.open(io.BytesIO(binary[offset:offset + view['byteLength']])).convert('RGB')
rgb = np.asarray(image, dtype=np.float32)
r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
cool = np.clip(((g + b) * 0.5 - r - 6) / 22, 0, 1)
blue = np.clip((b - r - 5) / 18, 0, 1)
dark = np.clip((210 - (r * 0.2126 + g * 0.7152 + b * 0.0722)) / 55, 0, 1)
glass = cool * blue * dark
glass = glass * glass * (3 - 2 * glass)
# glTF channels: clearcoat R, roughness G, metalness B. White slabs stay matte.
packed = np.stack([glass, 1 - 0.78 * glass, glass], axis=2)
Image.fromarray(np.round(packed * 255).astype(np.uint8)).save(OUTPUT, lossless=True, method=6)
print(f'{OUTPUT}: {image.width}x{image.height}, {OUTPUT.stat().st_size:,} bytes')
