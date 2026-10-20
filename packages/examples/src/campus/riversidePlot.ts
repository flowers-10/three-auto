import * as THREE from 'three';

type TreePlacement = [x: number, z: number, height: number, yaw: number];

// West of Zijin Kechuang: low-rise courtyards along the canal, based on the satellite reference.
export const riversideVolumes = [
  { name: '西北科研楼', x: -160, z: -148, width: 31, depth: 14, height: 10, roof: 'dark' },
  { name: '西北科研楼侧翼', x: -171, z: -135, width: 10, depth: 18, height: 8, roof: 'dark' },
  { name: '东北办公楼', x: -116, z: -149, width: 33, depth: 14, height: 9, roof: 'dark' },
  { name: '中部纵向楼', x: -138, z: -118, width: 13, depth: 30, height: 9, roof: 'warm' },
  { name: '中东研发楼', x: -111, z: -116, width: 30, depth: 24, height: 11, roof: 'light' },
  { name: '南部西组主楼', x: -163, z: -82, width: 32, depth: 29, height: 17, roof: 'light' },
  { name: '南部东组主楼', x: -112, z: -82, width: 34, depth: 29, height: 18, roof: 'light' },
  { name: '西南配楼', x: -163, z: -45, width: 32, depth: 18, height: 10, roof: 'light' },
  { name: '东南配楼', x: -112, z: -45, width: 35, depth: 18, height: 12, roof: 'light' },
] as const;

export const riversideRoadsideTrees: TreePlacement[] = [];
export const riversideCanopyTrees: TreePlacement[] = [];
for (const [index, x] of [-181, -172, -163, -154, -145, -136, -127, -118, -109, -100].entries()) {
  riversideCanopyTrees.push([x, -161, 5.4 + (index % 3) * 0.4, index * 1.1]);
}
for (const [row, x] of [-194, -202].entries()) {
  for (let index = 0; index < (row ? 11 : 12); index += 1) {
    riversideCanopyTrees.push([x, -154 + index * 11 + row * 5, 6.8 + ((index + row) % 4) * 0.5, index * 1.31 + row]);
  }
}
for (const [index, z] of [-150, -138, -126, -114, -102, -90, -78, -44, -34].entries()) {
  riversideRoadsideTrees.push([-91, z, 5.8 + (index % 3) * 0.35, index * 0.87]);
}
for (const [index, x] of [-180, -170, -160, -150, -125, -114, -103, -93].entries()) {
  riversideCanopyTrees.push([x, -31, 4.3 + (index % 3) * 0.3, index * 0.93]);
}
riversideCanopyTrees.push([-156, -122, 5.2, 0.4], [-156, -112, 4.8, 1.8]);
riversideCanopyTrees.push([-138, -49, 3.8, 0.8], [-138, -40, 4.1, 2.3]);

export function createRiversidePlot() {
  const group = new THREE.Group();
  group.name = '紫金科创西侧临河地块规划';
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const walls = new THREE.MeshStandardMaterial({ color: '#d1cec0', roughness: 0.9 });
  const paving = new THREE.MeshStandardMaterial({ color: '#b2b3a7', roughness: 1 });
  const grass = new THREE.MeshStandardMaterial({ color: '#7c966d', roughness: 1 });
  const glass = new THREE.MeshStandardMaterial({ color: '#6c8183', roughness: 0.6, metalness: 0.1 });
  const roofs = {
    dark: new THREE.MeshStandardMaterial({ color: '#70766d', roughness: 1 }),
    warm: new THREE.MeshStandardMaterial({ color: '#96775f', roughness: 1 }),
    light: new THREE.MeshStandardMaterial({ color: '#bdbbac', roughness: 1 }),
  };

  function block(name: string, x: number, y: number, z: number,
    width: number, height: number, depth: number, material: THREE.Material) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.scale.set(width, height, depth);
    mesh.castShadow = height > 0.5;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  block('院内铺装', -138, 0.12, -95, 94, 0.08, 128, paving);
  block('东侧出入口', -87, 0.12, -61, 10, 0.08, 8, paving);
  const lawns = [
    { name: '临河连续绿带', x: -195, z: -96, width: 22, depth: 130 },
    { name: '北侧绿带', x: -140, z: -161, width: 92, depth: 4.5 },
    { name: '东侧北段绿带', x: -91, z: -113, width: 3, depth: 90 },
    { name: '东侧南段绿带', x: -91, z: -46, width: 3, depth: 20 },
    { name: '南侧绿带', x: -138, z: -31, width: 94, depth: 3 },
    { name: '西北院落花园', x: -155.5, z: -119, width: 17, depth: 19 },
    { name: '南部中央绿岛', x: -138, z: -45, width: 10, depth: 18 },
  ];
  for (const lawn of lawns) block(lawn.name, lawn.x, 0.19, lawn.z, lawn.width, 0.06, lawn.depth, grass);

  for (const volume of riversideVolumes) {
    const { name, x, z, width, depth, height, roof } = volume;
    block(name, x, 0.18 + height / 2, z, width, height, depth, walls);
    block(`${name}屋面`, x, height + 0.25, z, width + 0.3, 0.28, depth + 0.3, roofs[roof]);
    for (let level = 2.6; level < height - 1; level += 3.3) {
      for (const side of [-1, 1]) {
        block(`${name}南北窗`, x, level, z + side * (depth / 2 + 0.03), width - 1.6, 1.15, 0.06, glass);
        block(`${name}东西窗`, x + side * (width / 2 + 0.03), level, z, 0.06, 1.15, depth - 1.6, glass);
      }
    }
    if (roof === 'light') {
      for (const side of [-1, 1]) {
        block(`${name}屋面女儿墙`, x, height + 0.6, z + side * (depth / 2 - 0.3), width, 0.65, 0.35, walls);
        block(`${name}屋面女儿墙`, x + side * (width / 2 - 0.3), height + 0.6, z, 0.35, 0.65, depth, walls);
      }
      block(`${name}屋顶设备间`, x - width * 0.18, height + 1.3, z + depth * 0.2, 6, 2, 4, walls);
      block(`${name}屋顶设备`, x + width * 0.2, height + 0.75, z - depth * 0.16, 3.5, 0.9, 5, roofs.dark);
    }
  }

  const shrubs: [number, number][] = [];
  for (let z = -127; z <= -111; z += 2) shrubs.push([-163, z]);
  for (let x = -162; x <= -149; x += 1.7) shrubs.push([x, -128], [x, -110]);
  for (let z = -52; z <= -38; z += 1.8) shrubs.push([-142, z], [-134, z]);
  const hedge = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(1, 1),
    new THREE.MeshStandardMaterial({ color: '#527447', roughness: 1 }),
    shrubs.length,
  );
  hedge.name = '院落矮灌木';
  const transform = new THREE.Object3D();
  shrubs.forEach(([x, z], index) => {
    transform.position.set(x, 0.55, z);
    transform.scale.set(0.65, 0.45, 0.6);
    transform.rotation.y = index * 1.17;
    transform.updateMatrix();
    hedge.setMatrixAt(index, transform.matrix);
  });
  hedge.instanceMatrix.needsUpdate = true;
  hedge.castShadow = true;
  hedge.receiveShadow = true;
  hedge.computeBoundingSphere();
  group.add(hedge);
  return group;
}
