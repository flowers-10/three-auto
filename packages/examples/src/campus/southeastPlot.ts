import * as THREE from 'three';

type TreePlacement = [x: number, z: number, height: number, yaw: number];
type Roof = 'weathered' | 'dark' | 'light';
type Volume = {
  name: string; x: number; z: number; width: number; depth: number;
  height: number; roof: Roof; pitched?: boolean;
};

// Tianhuang Science Park occupies the last plot, east of the south-central courtyard.
// Footprints follow the aerial reference; roof heights are estimates, in metres.
export const southeastVolumes: readonly Volume[] = [
  { name: '北侧长厂房', x: 137, z: 25, width: 82, depth: 20, height: 11, roof: 'weathered' },
  { name: '西侧第一排厂房', x: 124.5, z: 55, width: 57, depth: 15, height: 10.5, roof: 'dark', pitched: true },
  { name: '西侧第二排厂房', x: 126, z: 80, width: 56, depth: 16, height: 10, roof: 'dark', pitched: true },
  { name: '西侧第三排厂房', x: 128, z: 105, width: 56, depth: 16, height: 9, roof: 'dark', pitched: true },
  { name: '西南配套楼', x: 120, z: 130, width: 38, depth: 12, height: 7, roof: 'weathered' },
  { name: '东侧北配楼', x: 176.5, z: 70, width: 27, depth: 22, height: 12, roof: 'dark' },
  { name: '东侧南配楼', x: 178.5, z: 106, width: 27, depth: 20, height: 10, roof: 'light' },
  { name: '东北服务楼', x: 189.5, z: 29, width: 7, depth: 18, height: 5.5, roof: 'light' },
  { name: '东入口门房', x: 189, z: 52, width: 6, depth: 6, height: 3.8, roof: 'weathered' },
];

export const southeastRoadsideTrees: TreePlacement[] = [];
export const southeastCanopyTrees: TreePlacement[] = [];
for (const [index, z] of [19, 31, 43, 55, 67, 79, 91, 103, 115, 127, 139].entries()) {
  southeastRoadsideTrees.push([91, z, 5.5 + (index % 3) * 0.35, index * 0.93]);
}
for (const [index, z] of [18, 30, 59, 71, 83, 95, 107, 119, 131, 143].entries()) {
  southeastRoadsideTrees.push([201, z, 5.8 + (index % 3) * 0.35, index * 1.17]);
}
for (const [row, z] of [9, 149].entries()) {
  for (const [index, x] of [98, 109, 120, 131, 142, 153, 175, 186, 195].entries()) {
    southeastCanopyTrees.push([x, z, 4.6 + ((index + row) % 3) * 0.35, index * 0.87 + row]);
  }
}
for (const [row, z] of [37, 67, 92, 119].entries()) {
  for (const [index, x] of [105, 117, 129, 141].entries()) {
    southeastCanopyTrees.push([x, z, 4.1 + ((index + row) % 3) * 0.2, index * 1.1 + row]);
  }
}
for (const [index, x] of [171, 181, 190].entries()) {
  for (const z of [126, 138]) southeastCanopyTrees.push([x, z, 4.9 + (index % 2) * 0.4, x * 0.1 + z]);
}

export function createSoutheastPlot() {
  const group = new THREE.Group();
  group.name = '天煌科技园卫星布局建筑模型';
  const materials = {
    wall: new THREE.MeshStandardMaterial({ color: '#cbc7b5', roughness: 0.9 }),
    trim: new THREE.MeshStandardMaterial({ color: '#dcd8c8', roughness: 0.9 }),
    weathered: new THREE.MeshStandardMaterial({ color: '#aaa28c', roughness: 1 }),
    dark: new THREE.MeshStandardMaterial({ color: '#666b63', roughness: 0.96 }),
    light: new THREE.MeshStandardMaterial({ color: '#b9b4a1', roughness: 1 }),
    seam: new THREE.MeshStandardMaterial({ color: '#858a7e', roughness: 0.95 }),
    metal: new THREE.MeshStandardMaterial({ color: '#7b8582', roughness: 0.8 }),
    glass: new THREE.MeshStandardMaterial({ color: '#657d7d', roughness: 0.55, metalness: 0.1 }),
    paving: new THREE.MeshStandardMaterial({ color: '#b2b2a4', roughness: 1 }),
    lane: new THREE.MeshStandardMaterial({ color: '#8d9289', roughness: 1 }),
    path: new THREE.MeshStandardMaterial({ color: '#d6d3c3', roughness: 1 }),
    grass: new THREE.MeshStandardMaterial({ color: '#779365', roughness: 1 }),
  };
  type MaterialKey = keyof typeof materials;
  const batches = new Map<MaterialKey, THREE.Matrix4[]>();
  const transform = new THREE.Object3D();

  function box(material: MaterialKey, x: number, y: number, z: number,
    width: number, height: number, depth: number, pitch = 0) {
    transform.position.set(x, y, z);
    transform.scale.set(width, height, depth);
    transform.rotation.set(pitch, 0, 0);
    transform.updateMatrix();
    let instances = batches.get(material);
    if (!instances) batches.set(material, instances = []);
    instances.push(transform.matrix.clone());
  }
  function surface(material: MaterialKey, x: number, z: number, width: number, depth: number) {
    const y = material === 'grass' ? 0.25 : material === 'lane' ? 0.18 : 0.12;
    box(material, x, y, z, width, 0.08, depth);
  }

  surface('paving', 145, 81, 106, 132);
  surface('lane', 159.5, 94, 5, 108);
  surface('lane', 195.5, 96, 5, 104);
  surface('lane', 145, 145, 106, 4);
  surface('lane', 145, 41.5, 106, 5);
  surface('lane', 186, 46, 24, 5);
  // Entrances meet the existing road verges; the south gate stays free of trees.
  surface('lane', 207, 46, 18, 7);
  surface('lane', 164, 151, 7, 8);
  surface('lane', 164, 139, 7, 16);
  surface('grass', 91, 80, 3.5, 140);
  surface('grass', 201, 25, 3.5, 31);
  surface('grass', 201, 101, 3.5, 96);
  surface('grass', 145, 9, 106, 4);
  surface('grass', 124, 149, 65, 4);
  surface('grass', 185.5, 149, 33, 4);
  surface('grass', 124, 37, 54, 2.5);
  surface('grass', 126, 67, 49, 3.5);
  surface('grass', 128, 92, 50, 3.5);
  surface('grass', 122, 119, 40, 3);
  surface('grass', 180.5, 132, 25, 22);
  box('path', 173, 0.33, 132, 2, 0.08, 22);
  box('path', 180, 0.33, 132, 26, 0.08, 1.5);

  for (const volume of southeastVolumes) {
    const { name, x, z, width, depth, height, roof, pitched } = volume;
    box('wall', x, 0.2 + height / 2, z, width, height, depth);
    box('trim', x, 0.5, z, width + 0.12, 0.6, depth + 0.12);
    if (pitched) {
      const halfDepth = depth / 2 + 0.25;
      const rise = 0.75;
      // A closed triangular prism supplies both slopes and outward-facing gables.
      const section = new THREE.Shape([
        new THREE.Vector2(-halfDepth, 0), new THREE.Vector2(0, rise), new THREE.Vector2(halfDepth, 0),
      ]);
      const geometry = new THREE.ExtrudeGeometry(section, { depth: width + 0.5, bevelEnabled: false, steps: 1 });
      geometry.rotateY(-Math.PI / 2);
      const mesh = new THREE.Mesh(geometry, materials[roof]);
      mesh.name = `${name}浅坡屋面`;
      mesh.position.set(x + width / 2 + 0.25, height + 0.2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      const pitch = Math.atan2(rise, halfDepth);
      for (let localX = -width / 2 + 1; localX < width / 2; localX += 3.1) {
        for (const side of [-1, 1]) {
          box('seam', x + localX, height + 0.2 + rise / 2 + 0.035, z + side * halfDepth / 2,
            0.06, 0.04, Math.hypot(halfDepth, rise), side * pitch);
        }
      }
      box('seam', x, height + rise + 0.24, z, width + 0.6, 0.1, 0.22);
    } else {
      box(roof, x, height + 0.3, z, width + 0.2, 0.2, depth + 0.2);
      for (const side of [-1, 1]) {
        box('trim', x, height + 0.55, z + side * (depth / 2 - 0.15), width, 0.5, 0.3);
        box('trim', x + side * (width / 2 - 0.15), height + 0.55, z, 0.3, 0.5, depth);
      }
      if (width * depth > 300) {
        box('wall', x - width * 0.25, height + 1, z + depth * 0.2, 4.5, 1.4, 3);
        for (let index = 0; index < 3; index += 1) {
          box('metal', x + width * 0.12 + index * 2.4, height + 0.65, z - depth * 0.22, 1.6, 0.7, 2);
        }
        for (let localX = -width / 2 + 7; localX < width / 2; localX += 10) {
          box('trim', x + localX, height + 0.43, z, 0.12, 0.06, depth - 1.2);
        }
      }
    }

    const frontBays = Math.max(1, Math.floor((width - 1.5) / 3.6));
    const sideBays = Math.max(1, Math.floor((depth - 1.5) / 3.6));
    const floorStep = pitched ? 3.8 : 3.3;
    for (let level = 2.8; level < height - 0.8; level += floorStep) {
      for (const side of [-1, 1]) {
        for (let bay = 0; bay < frontBays; bay += 1) {
          const localX = (bay - (frontBays - 1) / 2) * (width - 1.5) / frontBays;
          // Keep loading doors clear of glazing on the southern facade.
          if (pitched && side === 1 && Math.abs(localX) < 2.5 && level < 4.2) continue;
          box('glass', x + localX, level, z + side * (depth / 2 + 0.035),
            Math.min(2.5, (width - 1.5) / frontBays * 0.75), 1.25, 0.07);
        }
        for (let bay = 0; bay < sideBays; bay += 1) {
          const localZ = (bay - (sideBays - 1) / 2) * (depth - 1.5) / sideBays;
          box('glass', x + side * (width / 2 + 0.035), level, z + localZ,
            0.07, 1.25, Math.min(2.5, (depth - 1.5) / sideBays * 0.75));
        }
      }
    }
    if (pitched) {
      box('metal', x, 2.2, z + depth / 2 + 0.07, 4.3, 4, 0.14);
      box('trim', x, 4.4, z + depth / 2 + 0.85, 6, 0.2, 2);
      for (const side of [-1, 1]) {
        for (let localX = -width / 2 + 1; localX < width / 2; localX += 7.2) {
          box('trim', x + localX, height / 2, z + side * (depth / 2 + 0.06), 0.22, height, 0.16);
        }
      }
    }
  }

  // Parking beside the southwest support building leaves both gates and the main lane clear.
  for (let index = 0; index <= 5; index += 1) {
    box('path', 148, 0.26, 126 + index * 2.7, 4.8, 0.04, 0.1);
  }
  box('path', 145.6, 0.26, 132.75, 0.1, 0.04, 13.5);

  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  for (const [material, instances] of batches) {
    const mesh = new THREE.InstancedMesh(unitBox, materials[material], instances.length);
    mesh.name = `天煌科技园-${material}`;
    instances.forEach((matrix, index) => mesh.setMatrixAt(index, matrix));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = !['paving', 'lane', 'path', 'grass'].includes(material);
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    group.add(mesh);
  }
  return group;
}
