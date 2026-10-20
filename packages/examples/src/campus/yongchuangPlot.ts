import * as THREE from 'three';
import { createYongchuangLandscape } from './yongchuangLandscape';

// Keep the commissioned Yongchuang building in the north. Draft only the
// southern wings and court from the satellite reference, clear of its podium.
export const yongchuangVolumes = [
  { name: '中部北排楼', x: 143, z: -100, width: 86, depth: 12, height: 10 },
  { name: '西侧短楼', x: 112, z: -85, width: 24, depth: 10, height: 7 },
  { name: '中部南排楼', x: 162, z: -82, width: 50, depth: 14, height: 9 },
  { name: '西侧纵楼', x: 108, z: -60, width: 18, depth: 36, height: 8 },
  { name: '东南短楼', x: 173, z: -55, width: 29, depth: 13, height: 8 },
  { name: '南侧门房', x: 128, z: -40, width: 22, depth: 10, height: 5 },
] as const;

export function createYongchuangPlot() {
  const group = new THREE.Group();
  group.name = '永创智能卫星图体块方案';
  const box = new THREE.BoxGeometry(1, 1, 1);
  const walls = new THREE.MeshStandardMaterial({ color: '#d3d0c0', roughness: 0.9 });
  const roof = new THREE.MeshStandardMaterial({ color: '#626b69', roughness: 1 });
  const windows = new THREE.MeshStandardMaterial({ color: '#657e85', roughness: 0.5, metalness: 0.15 });
  const paving = new THREE.MeshStandardMaterial({ color: '#b4b5a9', roughness: 1 });

  function block(name: string, x: number, y: number, z: number,
    width: number, height: number, depth: number, material: THREE.Material) {
    const mesh = new THREE.Mesh(box, material);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.scale.set(width, height, depth);
    mesh.castShadow = height > 0.5;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  // Stay inside the plot borders; the surrounding street texture stays visible.
  block('院内铺装', 143, 0.12, -94, 102, 0.08, 122, paving);
  group.add(createYongchuangLandscape());

  for (const volume of yongchuangVolumes) {
    const { name, x, z, width, depth, height } = volume;
    block(name, x, 0.18 + height / 2, z, width, height, depth, walls);
    block(`${name}屋面`, x, 0.25 + height, z, width + 0.3, 0.28, depth + 0.3, roof);
    const levels = [height - 2];
    for (const level of levels) {
      for (const side of [-1, 1]) {
        block(`${name}横窗`, x, level + 0.18, z + side * (depth / 2 + 0.025), width - 1.8, 1.15, 0.05, windows);
      }
    }
  }
  return group;
}
