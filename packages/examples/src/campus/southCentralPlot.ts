import * as THREE from 'three';

type TreePlacement = [x: number, z: number, height: number, yaw: number];
type Point = [x: number, z: number];
type Roof = 'flat' | 'metal' | 'pitched';
type Volume = {
  name: string; x: number; z: number; width: number; depth: number;
  height: number; roof: Roof;
};

// South of Lvfeng Center, between the two north–south streets.
// Footprints follow the supplied aerial view; heights are estimated from the adjacent plots.
export const southCentralVolumes: readonly Volume[] = [
  { name: '西北配楼', x: -36, z: 24, width: 31, depth: 15, height: 10, roof: 'flat' },
  { name: '西侧研发长楼', x: -35, z: 54, width: 36, depth: 40, height: 18, roof: 'flat' },
  { name: '东北研发楼', x: 6, z: 28, width: 33, depth: 30, height: 18.5, roof: 'flat' },
  { name: '东北连接楼', x: 17, z: 49, width: 18, depth: 12, height: 8, roof: 'flat' },
  { name: '中部连廊', x: 0, z: 65, width: 15, depth: 20, height: 7, roof: 'metal' },
  { name: '中部展厅', x: 11, z: 77, width: 42, depth: 18, height: 9, roof: 'pitched' },
  { name: '西南厂房', x: -35, z: 108, width: 34, depth: 30, height: 9.5, roof: 'pitched' },
  { name: '南侧主厂房', x: 16, z: 108, width: 48, depth: 26, height: 11, roof: 'pitched' },
  { name: '东侧条形厂房', x: 48, z: 117, width: 11, depth: 38, height: 7.5, roof: 'pitched' },
  { name: '南侧条形厂房', x: 16, z: 135, width: 48, depth: 13, height: 7, roof: 'pitched' },
  { name: '西南服务楼', x: -35, z: 137, width: 32, depth: 13, height: 6, roof: 'flat' },
];

// The angled northeastern wing is a single connected footprint, with a faceted fan roof.
const auditoriumOutline: Point[] = [[19, 43], [31, 34], [39, 36], [45, 46], [43, 57], [35, 64], [25, 60], [19, 52]];

export const southCentralRoadsideTrees: TreePlacement[] = [];
export const southCentralCanopyTrees: TreePlacement[] = [];
for (const [index, z] of [21, 33, 45, 57, 69, 81, 93, 105, 117, 129, 141].entries()) {
  southCentralRoadsideTrees.push([-62, z, 5.7 + (index % 3) * 0.35, index * 0.91]);
}
for (const [index, z] of [20, 32, 44, 56, 80, 92, 104, 116, 128, 140].entries()) {
  southCentralRoadsideTrees.push([61, z, 5.6 + (index % 3) * 0.3, index * 1.13]);
}
for (const [row, z] of [9, 150].entries()) {
  for (const [index, x] of [-54, -43, -32, -21, -10, 1, 12, 23, 34, 45, 55].entries()) {
    if (row === 1 && x === -10) continue;
    southCentralCanopyTrees.push([x, z, 4.7 + ((index + row) % 3) * 0.35, index * 0.87 + row]);
  }
}
for (const [index, x] of [-49, -40, -31, -22].entries()) {
  southCentralCanopyTrees.push([x, 83, 4.6 + (index % 2) * 0.4, index * 1.2]);
}
southCentralCanopyTrees.push([5, 49, 4.4, 0.8], [12, 57, 4.2, 1.9], [49, 26, 4.8, 2.6]);

export function createSouthCentralPlot() {
  const group = new THREE.Group();
  group.name = '南中地块卫星布局建筑模型';
  const materials = {
    wall: new THREE.MeshStandardMaterial({ color: '#cbc9b9', roughness: 0.88 }),
    trim: new THREE.MeshStandardMaterial({ color: '#e0ddd0', roughness: 0.9 }),
    flatRoof: new THREE.MeshStandardMaterial({ color: '#aaa797', roughness: 1 }),
    paleRoof: new THREE.MeshStandardMaterial({ color: '#dbddd2', roughness: 0.8 }),
    roofSeam: new THREE.MeshStandardMaterial({ color: '#b9beb7', roughness: 0.85 }),
    skylight: new THREE.MeshStandardMaterial({ color: '#8ca9b7', roughness: 0.45, metalness: 0.18 }),
    metal: new THREE.MeshStandardMaterial({ color: '#7e8987', roughness: 0.75 }),
    glass: new THREE.MeshStandardMaterial({ color: '#607a80', roughness: 0.48, metalness: 0.12 }),
    paving: new THREE.MeshStandardMaterial({ color: '#b2b2a5', roughness: 1 }),
    lane: new THREE.MeshStandardMaterial({ color: '#8a8f89', roughness: 1 }),
    path: new THREE.MeshStandardMaterial({ color: '#d4d2c4', roughness: 1 }),
    grass: new THREE.MeshStandardMaterial({ color: '#779365', roughness: 1 }),
  };
  type MaterialKey = keyof typeof materials;
  const batches = new Map<MaterialKey, THREE.Matrix4[]>();
  const transform = new THREE.Object3D();

  function box(material: MaterialKey, x: number, y: number, z: number,
    width: number, height: number, depth: number, yaw = 0, pitch = 0) {
    transform.position.set(x, y, z);
    transform.scale.set(width, height, depth);
    transform.rotation.set(pitch, yaw, 0);
    transform.updateMatrix();
    let instances = batches.get(material);
    if (!instances) batches.set(material, instances = []);
    instances.push(transform.matrix.clone());
  }
  function surface(material: MaterialKey, x: number, z: number, width: number, depth: number) {
    const y = material === 'grass' ? 0.23 : material === 'lane' ? 0.18 : 0.12;
    box(material, x, y, z, width, 0.08, depth);
  }
  function line(material: MaterialKey, from: Point, to: Point, y: number, width: number, height: number) {
    const dx = to[0] - from[0], dz = to[1] - from[1];
    box(material, (from[0] + to[0]) / 2, y, (from[1] + to[1]) / 2,
      width, height, Math.hypot(dx, dz), Math.atan2(dx, dz));
  }
  function shapedMesh(name: string, points: Point[], height: number, material: MaterialKey, y: number) {
    const shape = new THREE.Shape(points.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geometry = height > 0
      ? new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false, steps: 1 })
      : new THREE.ShapeGeometry(shape);
    geometry.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geometry, materials[material]);
    mesh.name = name;
    mesh.position.y = y;
    mesh.castShadow = height > 0.5;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  surface('paving', -3, 81, 118, 134);
  surface('lane', -13, 85, 6.5, 122);
  surface('lane', 56.5, 81, 5, 134);
  surface('lane', -3, 89.5, 118, 6);
  surface('lane', -3, 146, 118, 4);
  surface('lane', 47, 78, 14, 20);
  // Open gates connect to the existing streets on the east and south.
  surface('lane', 59, 68, 11, 7);
  surface('lane', -13, 151, 7, 8);
  surface('grass', -62, 80, 4, 140);
  surface('grass', 61, 38, 3, 54);
  surface('grass', 61, 111, 3, 75);
  surface('grass', -3, 9, 122, 4);
  surface('grass', -39, 150, 45, 4);
  surface('grass', 26, 150, 70, 4);
  surface('grass', -35, 83, 38, 10);
  surface('grass', 5, 49, 10, 8);
  surface('grass', 49, 26, 11, 25);
  shapedMesh('折线楼南侧绿岛', [[17, 59], [24, 64], [36, 66], [35, 67], [17, 67]], 0, 'grass', 0.26);
  line('path', [-55, 78], [-17, 78], 0.29, 1.5, 0.06);
  line('path', [-55, 88], [-55, 145], 0.29, 1.6, 0.06);

  function pitchedRoof(volume: Volume) {
    const { name, x, z, width, depth, height } = volume;
    const halfWidth = width / 2 + 0.35, halfDepth = depth / 2 + 0.35;
    const eave = height + 0.28;
    const rise = Math.min(1.4, depth * 0.055);
    const corners = [
      [-halfWidth, eave, -halfDepth], [-halfWidth, eave + rise, 0], [halfWidth, eave + rise, 0], [halfWidth, eave, -halfDepth],
      [-halfWidth, eave + rise, 0], [-halfWidth, eave, halfDepth], [halfWidth, eave, halfDepth], [halfWidth, eave + rise, 0],
    ];
    const vertices: number[] = [];
    for (const offset of [0, 4]) {
      for (const index of [0, 1, 2, 0, 2, 3]) vertices.push(...corners[offset + index]);
    }
    const roofGeometry = new THREE.BufferGeometry();
    roofGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    roofGeometry.computeVertexNormals();
    const roof = new THREE.Mesh(roofGeometry, materials.paleRoof);
    roof.position.set(x, 0, z);
    roof.name = `${name}浅坡金属屋面`;
    roof.castShadow = true;
    roof.receiveShadow = true;
    group.add(roof);
    // Close the triangular gables below the two roof slopes.
    for (const side of [-1, 1]) {
      const gable = new THREE.BufferGeometry();
      const points = [side * halfWidth, eave, -halfDepth, side * halfWidth, eave + rise, 0, side * halfWidth, eave, halfDepth];
      if (side === -1) points.splice(0, points.length, ...points.slice(6, 9), ...points.slice(3, 6), ...points.slice(0, 3));
      gable.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      gable.computeVertexNormals();
      const mesh = new THREE.Mesh(gable, materials.wall);
      mesh.position.set(x, 0, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    }
    const pitch = Math.atan2(rise, halfDepth);
    for (let localX = -width / 2 + 0.8; localX < width / 2; localX += 2.3) {
      for (const side of [-1, 1]) {
        box('roofSeam', x + localX, eave + rise / 2 + 0.035, z + side * halfDepth / 2,
          0.08, 0.055, Math.hypot(halfDepth, rise), 0, side * pitch);
      }
    }
    box('trim', x, eave + rise + 0.06, z, width + 0.8, 0.12, 0.3);
    if (name === '南侧主厂房') {
      for (const side of [-1, 1]) {
        box('skylight', x, eave + rise * 0.56 + 0.1, z + side * halfDepth * 0.44,
          width - 5, 0.08, 1.2, 0, side * pitch);
      }
    }
  }

  for (const volume of southCentralVolumes) {
    const { name, x, z, width, depth, height, roof } = volume;
    box('wall', x, 0.18 + height / 2, z, width, height, depth);
    box('trim', x, 0.48, z, width + 0.15, 0.55, depth + 0.15);
    if (roof === 'pitched') {
      pitchedRoof(volume);
    } else {
      box(roof === 'metal' ? 'paleRoof' : 'flatRoof', x, height + 0.3, z, width + 0.25, 0.24, depth + 0.25);
      for (const side of [-1, 1]) {
        box('trim', x, height + 0.65, z + side * (depth / 2 - 0.15), width, 0.6, 0.3);
        box('trim', x + side * (width / 2 - 0.15), height + 0.65, z, 0.3, 0.6, depth);
      }
    }
    const frontBays = Math.max(1, Math.floor((width - 2) / 3.5));
    const sideBays = Math.max(1, Math.floor((depth - 2) / 3.5));
    const industrial = roof === 'pitched';
    for (let level = industrial ? height - 2 : 2.8; level < height - 0.8; level += 3.3) {
      for (const side of [-1, 1]) {
        for (let bay = 0; bay < frontBays; bay += 1) {
          const localX = (bay - (frontBays - 1) / 2) * (width - 2) / frontBays;
          box('glass', x + localX, level, z + side * (depth / 2 + 0.035),
            Math.min(2.2, (width - 2) / frontBays * 0.72), industrial ? 1.15 : 1.5, 0.07);
        }
        for (let bay = 0; bay < sideBays; bay += 1) {
          const localZ = (bay - (sideBays - 1) / 2) * (depth - 2) / sideBays;
          box('glass', x + side * (width / 2 + 0.035), level, z + localZ,
            0.07, industrial ? 1.15 : 1.5, Math.min(2.2, (depth - 2) / sideBays * 0.72));
        }
      }
      if (!industrial) box('trim', x, level - 1.05, z, width + 0.12, 0.14, depth + 0.12);
    }
    if (industrial) {
      const entranceZ = z - depth / 2 - 0.06;
      box('metal', x + width * 0.22, 2, entranceZ, Math.min(4.5, width * 0.4), 3.6, 0.12);
      box('trim', x + width * 0.22, 4, entranceZ - 0.7, Math.min(6, width * 0.6), 0.2, 1.8);
    } else if (width * depth > 300) {
      box('wall', x - width * 0.25, height + 1.2, z + depth * 0.25, 5, 1.8, 4);
      for (let index = 0; index < 3; index += 1) {
        box('metal', x + width * 0.12 + index * 2.5, height + 0.8, z - depth * 0.25, 1.7, 0.9, 2.3);
      }
    }
    if (name === '西侧研发长楼') {
      box('skylight', x, height + 0.52, z, 7, 0.2, depth - 8);
      for (const localZ of [-9, 0, 9]) box('trim', x, height + 0.66, z + localZ, 7.4, 0.12, 0.3);
    }
    if (name === '东北研发楼') {
      for (const side of [-1, 1]) {
        box('trim', x + side * 9, height + 0.48, z, 0.3, 0.18, depth - 4);
      }
      box('trim', x, height + 0.48, z, width - 4, 0.18, 0.3);
    }
  }

  shapedMesh('东北折线楼', auditoriumOutline, 10, 'wall', 0.18);
  shapedMesh('东北折线楼屋面', auditoriumOutline, 0.24, 'flatRoof', 10.2);
  const hinge: Point = [24, 48];
  for (let index = 0; index < auditoriumOutline.length; index += 1) {
    const from = auditoriumOutline[index], to = auditoriumOutline[(index + 1) % auditoriumOutline.length];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute([
      hinge[0], 12.1, hinge[1], to[0], 10.5, to[1], from[0], 10.5, from[1],
    ], 3));
    geometry.computeVertexNormals();
    const facet = new THREE.Mesh(geometry, materials[index % 2 ? 'paleRoof' : 'roofSeam']);
    facet.castShadow = true;
    facet.receiveShadow = true;
    group.add(facet);
    line('trim', from, to, 10.5, 0.25, 0.24);
    for (const level of [3.1, 6.6]) line('glass', from, to, level, 0.09, 1.25);
  }
  box('glass', -16.94, 2, 56, 0.1, 3.5, 4.2);
  box('trim', -15.9, 4, 56, 2.5, 0.25, 6);
  // Parking stays in the eastern yard, clear of the gate and circulation lane.
  for (let index = 0; index <= 5; index += 1) {
    box('path', 47, 0.21, 70 + index * 3, 5.2, 0.035, 0.12);
  }
  box('path', 44.4, 0.21, 77.5, 0.12, 0.035, 15);

  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  for (const [material, instances] of batches) {
    const mesh = new THREE.InstancedMesh(unitBox, materials[material], instances.length);
    mesh.name = `南中院落-${material}`;
    instances.forEach((matrix, index) => mesh.setMatrixAt(index, matrix));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = !['paving', 'lane', 'path', 'grass'].includes(material);
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    group.add(mesh);
  }
  return group;
}
