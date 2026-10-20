import * as THREE from 'three';

type TreePlacement = [x: number, z: number, height: number, yaw: number];
type Point = [x: number, z: number];

// Satellite footprint fitted to the southwest plot: x -184..-86, z 8..151.
// The southern building is assembled from connected wings around an open court.
export const southwestVolumes = [
  { name: '西北主楼', x: -149.5, z: 32, width: 27, depth: 18, height: 18, yaw: 0 },
  { name: '西北前楼', x: -149.5, z: 53, width: 27, depth: 14, height: 13, yaw: 0 },
  { name: '东北主楼', x: -111, z: 35, width: 35, depth: 29, height: 20, yaw: 0 },
  { name: '西侧服务楼', x: -175, z: 51, width: 7, depth: 15, height: 6, yaw: 0 },
  { name: '南侧主楼长翼', x: -128, z: 128, width: 70, depth: 18, height: 20, yaw: 0 },
  { name: '南侧主楼西回翼', x: -150, z: 108, width: 26, depth: 12, height: 14, yaw: 0 },
  { name: '南侧主楼中连楼', x: -135, z: 118, width: 10, depth: 20, height: 15, yaw: 0 },
  { name: '南侧主楼东回翼', x: -101, z: 108, width: 16, depth: 30, height: 21, yaw: 0 },
  { name: '南侧主楼北楼', x: -116, z: 91, width: 28, depth: 17, height: 19, yaw: 0 },
  { name: '临河长条配楼', x: -176, z: 112, width: 7, depth: 55, height: 6.5, yaw: 0.08 },
] as const;

export const southwestRoadsideTrees: TreePlacement[] = [];
export const southwestCanopyTrees: TreePlacement[] = [];
for (const [row, x] of [-190, -199].entries()) {
  for (let index = 0; index < (row ? 11 : 12); index += 1) {
    southwestCanopyTrees.push([x, 16 + index * 12 + row * 6, 6.4 + ((index + row) % 4) * 0.45, index * 1.2 + row]);
  }
}
for (const [index, x] of [-178, -168, -158, -148, -138, -128, -118, -108, -98].entries()) {
  southwestCanopyTrees.push([x, 11, 5.1 + (index % 3) * 0.35, index * 0.8]);
}
for (const [index, z] of [20, 32, 44, 56, 88, 100, 112, 124, 136].entries()) {
  southwestRoadsideTrees.push([-89, z, 5.5 + (index % 3) * 0.35, index * 0.9]);
}
for (const [index, x] of [-178, -167, -156, -145, -134, -123, -112, -101, -92].entries()) {
  southwestCanopyTrees.push([x, 148.5, 4.5 + (index % 3) * 0.3, index * 0.95]);
}
for (const x of [-120, -113, -106]) {
  for (const z of [61, 67]) southwestCanopyTrees.push([x, z, 4 + ((x + z) % 3) * 0.15, x + z]);
}
southwestCanopyTrees.push([-158, 88, 4.5, 0.7], [-143, 74, 4.3, 1.5]);

export function createSouthwestPlot() {
  const group = new THREE.Group();
  group.name = '西南地块卫星布局建筑模型';
  const materials = {
    wall: new THREE.MeshStandardMaterial({ color: '#ceccbd', roughness: 0.85 }),
    trim: new THREE.MeshStandardMaterial({ color: '#dedbce', roughness: 0.9 }),
    roof: new THREE.MeshStandardMaterial({ color: '#bab7a6', roughness: 1 }),
    metal: new THREE.MeshStandardMaterial({ color: '#929d9d', roughness: 0.75 }),
    serviceRoof: new THREE.MeshStandardMaterial({ color: '#879eaa', roughness: 0.8 }),
    glass: new THREE.MeshStandardMaterial({ color: '#617a80', roughness: 0.45, metalness: 0.15 }),
    paving: new THREE.MeshStandardMaterial({ color: '#b2b3a7', roughness: 1 }),
    path: new THREE.MeshStandardMaterial({ color: '#d8d6c8', roughness: 1 }),
    grass: new THREE.MeshStandardMaterial({ color: '#769465', roughness: 1 }),
    water: new THREE.MeshStandardMaterial({ color: '#6d9695', roughness: 0.3, metalness: 0.1 }),
  };
  type MaterialKey = keyof typeof materials;
  const matrices = new Map<MaterialKey, THREE.Matrix4[]>();
  const transform = new THREE.Object3D();

  // Repeated facade and roof details share geometry and a handful of draw calls.
  function box(material: MaterialKey, x: number, y: number, z: number,
    width: number, height: number, depth: number, yaw = 0) {
    transform.position.set(x, y, z);
    transform.scale.set(width, height, depth);
    transform.rotation.set(0, yaw, 0);
    transform.updateMatrix();
    let batch = matrices.get(material);
    if (!batch) matrices.set(material, batch = []);
    batch.push(transform.matrix.clone());
  }
  function rectangle(material: MaterialKey, x: number, z: number, width: number, depth: number) {
    box(material, x, material === 'grass' ? 0.2 : 0.12, z, width, 0.08, depth);
  }
  function polygon(points: Point[], material: MaterialKey) {
    const shape = new THREE.Shape(points.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geometry = new THREE.ShapeGeometry(shape);
    geometry.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geometry, materials[material]);
    mesh.position.y = 0.25;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  function path(from: Point, to: Point, width: number) {
    const dx = to[0] - from[0];
    const dz = to[1] - from[1];
    box('path', (from[0] + to[0]) / 2, 0.28, (from[1] + to[1]) / 2,
      width, 0.05, Math.hypot(dx, dz), Math.atan2(dx, dz));
  }

  rectangle('paving', -137, 80, 92, 130);
  rectangle('paving', -87, 73, 12, 8);
  rectangle('grass', -194, 80, 20, 142);
  rectangle('grass', -137, 11, 92, 4);
  rectangle('grass', -89, 39.5, 3.5, 53);
  rectangle('grass', -89, 111, 3.5, 66);
  rectangle('grass', -137, 148.5, 94, 3);
  rectangle('grass', -112, 64, 24, 12);
  rectangle('grass', -176, 73, 9, 16);
  polygon([[-164, 68], [-138, 100], [-164, 100]], 'grass');
  polygon([[-160, 64], [-136, 64], [-134, 94]], 'grass');
  path([-164, 64], [-133, 102], 3);
  path([-172, 62], [-133, 62], 2.5);
  path([-133, 53], [-133, 79], 3);
  path([-167, 63], [-167, 139], 2.5);
  path([-180, 141], [-94, 141], 3);
  rectangle('path', -120, 109, 18, 15);

  for (const volume of southwestVolumes) {
    const { x, z, width, depth, height, yaw, name } = volume;
    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);
    function part(material: MaterialKey, localX: number, y: number, localZ: number,
      w: number, h: number, d: number) {
      box(material, x + localX * cos + localZ * sin, y, z - localX * sin + localZ * cos, w, h, d, yaw);
    }
    part('wall', 0, 0.18 + height / 2, 0, width, height, depth);
    const roofMaterial = name === '西侧服务楼' ? 'serviceRoof' : 'roof';
    part(roofMaterial, 0, height + 0.3, 0, width + 0.2, 0.3, depth + 0.2);
    for (const side of [-1, 1]) {
      part('trim', 0, height + 0.65, side * (depth / 2 - 0.2), width, 0.6, 0.3);
      part('trim', side * (width / 2 - 0.2), height + 0.65, 0, 0.3, 0.6, depth);
    }
    const frontBays = Math.max(1, Math.floor((width - 1.8) / 3.4));
    const sideBays = Math.max(1, Math.floor((depth - 1.8) / 3.4));
    for (let floor = 2.8; floor < height - 1; floor += 3.3) {
      part('trim', 0, floor - 1.05, 0, width + 0.15, 0.16, depth + 0.15);
      for (const side of [-1, 1]) {
        for (let bay = 0; bay < frontBays; bay += 1) {
          const localX = (bay - (frontBays - 1) / 2) * (width - 2) / frontBays;
          part('glass', localX, floor, side * (depth / 2 + 0.035), Math.min(2.25, (width - 2) / frontBays * 0.72), 1.45, 0.07);
        }
        for (let bay = 0; bay < sideBays; bay += 1) {
          const localZ = (bay - (sideBays - 1) / 2) * (depth - 2) / sideBays;
          part('glass', side * (width / 2 + 0.035), floor, localZ, 0.07, 1.45, Math.min(2.25, (depth - 2) / sideBays * 0.72));
        }
      }
    }
    if (width * depth > 280) {
      part('wall', -width * 0.2, height + 1.15, depth * 0.16, Math.min(width * 0.22, 8), 1.7, 4.5);
      for (let index = 0; index < 3; index += 1) {
        part('metal', width * 0.12 + index * 2.4, height + 0.7, -depth * 0.2, 1.65, 0.8, 2.4);
      }
    }
  }

  // Entrances face the garden and the eastern access lane.
  box('glass', -111, 1.9, 49.55, 4, 3.4, 0.08);
  box('trim', -111, 3.7, 50.5, 6, 0.25, 2.5);
  box('glass', -116, 1.9, 82.45, 4.5, 3.4, 0.08);
  box('trim', -116, 3.7, 81.4, 7, 0.25, 2.6);
  box('path', -116, 0.25, 80.5, 8, 0.18, 3.6);

  const fountainBase = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.15, 24), materials.path);
  fountainBase.position.set(-174, 0.28, 73);
  fountainBase.receiveShadow = true;
  group.add(fountainBase);
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.32, 24), materials.trim);
  basin.position.set(-174, 0.48, 73);
  group.add(basin);
  const water = new THREE.Mesh(new THREE.CircleGeometry(1.2, 24), materials.water);
  water.rotation.x = -Math.PI / 2;
  water.position.set(-174, 0.65, 73);
  group.add(water);

  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  for (const [key, instances] of matrices) {
    const mesh = new THREE.InstancedMesh(unitBox, materials[key], instances.length);
    mesh.name = `西南院落-${key}`;
    instances.forEach((matrix, index) => mesh.setMatrixAt(index, matrix));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = !['paving', 'path', 'grass'].includes(key);
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    group.add(mesh);
  }
  return group;
}
