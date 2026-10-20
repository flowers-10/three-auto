import * as THREE from 'three';

type TreePlacement = [x: number, z: number, height: number, yaw: number];

export const yongchuangRoadsideTrees: TreePlacement[] = [];
export const yongchuangCanopyTrees: TreePlacement[] = [];

// Perimeter planting follows the satellite reference; south entrance stays open.
for (const [index, x] of [98, 107, 116, 125, 134, 143, 152, 161, 170, 179, 188].entries()) {
  yongchuangCanopyTrees.push([x, -161, 6.2 + (index % 3) * 0.45, index * 0.91]);
}
for (const [index, z] of [-146, -135, -124, -113, -102, -91, -80, -69, -58, -47, -36].entries()) {
  yongchuangRoadsideTrees.push([94, z, 5.8 + (index % 3) * 0.4, index * 1.17]);
}
for (const [index, z] of [-148, -136, -124, -112, -100, -88, -76, -64, -52, -40].entries()) {
  yongchuangRoadsideTrees.push([192, z, 6.0 + (index % 3) * 0.4, index * 0.83]);
}
for (const x of [104, 182]) {
  [-146, -135, -124].forEach((z, index) => {
    yongchuangCanopyTrees.push([x, z, 5.2 + index * 0.45, index * 1.4 + x]);
  });
}
for (const [index, x] of [100, 110, 167, 179, 189].entries()) {
  yongchuangCanopyTrees.push([x, -33.5, 4.6 + (index % 2) * 0.5, index * 1.1]);
}
yongchuangCanopyTrees.push([128, -62, 4.8, 0.6], [136, -62, 5.2, 2.1]);

const lawns = [
  { name: '北侧树带', x: 143, z: -161, width: 100, depth: 4.5 },
  { name: '主楼西侧花园', x: 105, z: -134, width: 16, depth: 34 },
  { name: '主楼东侧花园', x: 183, z: -134, width: 12, depth: 34 },
  { name: '西侧树带', x: 94, z: -92, width: 3, depth: 118 },
  { name: '东侧树带', x: 192, z: -94, width: 3, depth: 120 },
  { name: '南侧入口西草带', x: 104, z: -34, width: 20, depth: 2.5 },
  { name: '南侧入口东草带', x: 177, z: -34, width: 31, depth: 2.5 },
  { name: '中央庭院草坪', x: 132, z: -62, width: 18, depth: 16 },
  { name: '东南花园', x: 176, z: -40, width: 25, depth: 6 },
];

export function createYongchuangLandscape() {
  const group = new THREE.Group();
  group.name = '永创智能地块绿化';
  const grass = new THREE.MeshStandardMaterial({ color: '#779366', roughness: 1 });
  const lawnGeometry = new THREE.BoxGeometry(1, 1, 1);
  for (const lawn of lawns) {
    const mesh = new THREE.Mesh(lawnGeometry, grass);
    mesh.name = lawn.name;
    mesh.position.set(lawn.x, 0.19, lawn.z);
    mesh.scale.set(lawn.width, 0.06, lawn.depth);
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  const shrubPositions: { x: number; z: number; size: number }[] = [];
  // Low shrubs frame lawns rather than enclosing pedestrian routes.
  for (const x of [98.5, 111.5, 178.5, 187.5]) {
    for (let z = -149; z <= -119; z += 2.4) shrubPositions.push({ x, z, size: 0.65 });
  }
  for (let x = 124; x <= 140; x += 1.8) {
    shrubPositions.push({ x, z: -69, size: 0.7 }, { x, z: -55, size: 0.65 });
  }
  for (let x = 165; x <= 187; x += 1.8) shrubPositions.push({ x, z: -38, size: 0.6 });

  const shrubs = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(1, 1),
    new THREE.MeshStandardMaterial({ color: '#527448', roughness: 1 }),
    shrubPositions.length,
  );
  shrubs.name = '矮灌木';
  const transform = new THREE.Object3D();
  shrubPositions.forEach(({ x, z, size }, index) => {
    transform.position.set(x, 0.22 + size * 0.5, z);
    transform.scale.set(size, size * 0.65, size * 0.85);
    transform.rotation.y = index * 1.23;
    transform.updateMatrix();
    shrubs.setMatrixAt(index, transform.matrix);
  });
  shrubs.instanceMatrix.needsUpdate = true;
  shrubs.castShadow = true;
  shrubs.receiveShadow = true;
  shrubs.computeBoundingSphere();
  group.add(shrubs);

  const flowerBeds = [
    { x: 105, z: -118.5, width: 11, depth: 2.2 },
    { x: 183, z: -118.5, width: 8, depth: 2.2 },
    { x: 132, z: -67, width: 14, depth: 2 },
    { x: 176, z: -41, width: 20, depth: 1.5 },
  ];
  const flowers: { x: number; z: number; color: string }[] = [];
  for (const [bedIndex, bed] of flowerBeds.entries()) {
    for (let x = -bed.width / 2; x <= bed.width / 2; x += 0.55) {
      for (let z = -bed.depth / 2; z <= bed.depth / 2; z += 0.5) {
        const index = flowers.length;
        flowers.push({
          x: bed.x + x + Math.sin(index * 2.3) * 0.12,
          z: bed.z + z + Math.cos(index * 1.7) * 0.1,
          color: ['#d2aa6d', '#c593a5', '#e1ddcd'][bedIndex % 3],
        });
      }
    }
  }
  const blooms = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 6, 4),
    new THREE.MeshStandardMaterial({ roughness: 0.9 }),
    flowers.length,
  );
  blooms.name = '低矮花丛';
  flowers.forEach(({ x, z, color }, index) => {
    transform.position.set(x, 0.38 + (index % 3) * 0.035, z);
    transform.scale.set(0.2, 0.12, 0.2);
    transform.rotation.set(0, index * 0.73, 0);
    transform.updateMatrix();
    blooms.setMatrixAt(index, transform.matrix);
    blooms.setColorAt(index, new THREE.Color(color));
  });
  blooms.instanceMatrix.needsUpdate = true;
  if (blooms.instanceColor) blooms.instanceColor.needsUpdate = true;
  blooms.receiveShadow = true;
  blooms.computeBoundingSphere();
  group.add(blooms);
  return group;
}
