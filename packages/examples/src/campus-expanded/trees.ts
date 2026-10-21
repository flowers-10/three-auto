import * as THREE from 'three';
import type { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { expandedGround, pixelToWorld, type PixelPoint } from './layout';
import { landmarkPads } from './landmarkLayout';

// Only replace the original canopy strips. Paved building pads and open lawns
// remain available for future buildings; the reference itself is not displayed.
type Species = 'canopy' | 'roadside';

function inside([x, y]: PixelPoint, polygon: readonly PixelPoint[]) {
  let result = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i], [xj, yj] = polygon[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) result = !result;
  }
  return result;
}

function random(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function plantingPoints(pixels: Uint8ClampedArray, width: number, height: number) {
  const buildingClearings = Object.values(landmarkPads).map((quad) => {
    const cx = quad.reduce((sum, p) => sum + p[0], 0) / 4;
    const cy = quad.reduce((sum, p) => sum + p[1], 0) / 4;
    return quad.map(([x, y]) => [cx + (x - cx) * 1.12, cy + (y - cy) * 1.12] as PixelPoint);
  });
  const points: Array<{ point: PixelPoint; height: number; yaw: number; species: Species }> = [];
  for (let y = 22; y < height - 12; y += 28) {
    for (let x = 22; x < width - 12; x += 28) {
      const seed = x * 17 + y * 31;
      const px = Math.round(x + (random(seed) - .5) * 16);
      const py = Math.round(y + (random(seed + 1) - .5) * 16);
      const offset = (py * width + px) * 4;
      const [r, g, b, alpha] = pixels.subarray(offset, offset + 4);
      if (alpha < 230) continue;
      const point: PixelPoint = [px * 1545 / width, py * 1018 / height];
      if (buildingClearings.some((quad) => inside(point, quad))) continue;
      const vegetation = g > r * 1.06 && g > b * 1.18 && g < 195;
      if (!vegetation) continue;
      // Flat lawn has little local contrast. Old tree crowns have dark leaves
      // and varied highlights; sampling both avoids filling future plots.
      let sum = 0, squares = 0, dark = 0, count = 0;
      for (let dy = -5; dy <= 5; dy += 2) {
        for (let dx = -5; dx <= 5; dx += 2) {
          const index = ((py + dy) * width + px + dx) * 4;
          const green = pixels[index + 1];
          sum += green;
          squares += green * green;
          if (green < 100 && pixels[index] < 90 && pixels[index + 2] < 75) dark++;
          count++;
        }
      }
      const mean = sum / count;
      if (mean >= 125 || squares / count - mean * mean < 170 || dark / count < .12) continue;
      const species: Species = random(seed + 4) < .5 ? 'canopy' : 'roadside';
      points.push({ point, species,
        height: (species === 'canopy' ? 5.8 : 6.8) + random(seed + 2) * 4,
        yaw: random(seed + 3) * Math.PI * 2 });
    }
  }
  return points;
}

export async function createExpandedTrees(loader: GLTFLoader, environment: THREE.Texture) {
  const [reference, canopy, roadside] = await Promise.all([
    new THREE.TextureLoader().loadAsync('/models/campus-expanded/ground-landscaped.png'),
    loader.loadAsync('/models/campus/canopy-tree.glb'),
    loader.loadAsync('/models/campus/roadside-tree.glb'),
  ]);
  const image = reference.image as HTMLImageElement;
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d', { willReadFrequently: true })!;
  context.drawImage(image, 0, 0);
  const points = plantingPoints(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height);
  reference.dispose();

  const group = new THREE.Group();
  group.name = '原树带-两种立体树';
  group.userData.treeCount = points.length;
  for (const [species, gltf] of [['canopy', canopy], ['roadside', roadside]] as const) {
    const instances = points.filter((point) => point.species === species);
    if (!instances.length) continue;
    const source = gltf.scene;
    source.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(source);
    const centre = bounds.getCenter(new THREE.Vector3());
    const sourceHeight = bounds.getSize(new THREE.Vector3()).y;
    const origin = new THREE.Matrix4().makeTranslation(-centre.x, -bounds.min.y, -centre.z);
    const rotation = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const size = new THREE.Vector3();
    const placement = new THREE.Matrix4();
    source.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.envMap = environment;
          material.envMapIntensity = .55;
        }
      }
      const batch = new THREE.InstancedMesh(object.geometry, object.material, instances.length);
      batch.name = `${species}-实例合批`;
      instances.forEach(({ point: [x, y], height, yaw }, i) => {
        const position = pixelToWorld([
          x * expandedGround.widthPixels / 1545,
          y * expandedGround.heightPixels / 1018,
        ], .08);
        rotation.setFromAxisAngle(up, yaw);
        size.setScalar(height / sourceHeight);
        placement.compose(position, rotation, size).multiply(origin).multiply(object.matrixWorld);
        batch.setMatrixAt(i, placement);
        batch.setColorAt(i, new THREE.Color().setScalar(.86 + random(i + 5) * .16));
      });
      batch.instanceMatrix.needsUpdate = true;
      if (batch.instanceColor) batch.instanceColor.needsUpdate = true;
      batch.castShadow = true;
      batch.receiveShadow = true;
      batch.computeBoundingSphere();
      group.add(batch);
    });
  }
  return group;
}
