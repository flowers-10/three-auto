import * as THREE from 'three';
import { campusBuildings } from '../campus/buildingLayout';

export type PixelPoint = readonly [x: number, y: number];
type Quad = readonly [PixelPoint, PixelPoint, PixelPoint, PixelPoint];
type SourceBounds = { minX: number; maxX: number; minZ: number; maxZ: number };

export const expandedGround = { widthPixels: 1544, heightPixels: 1019, metresPerPixel: 0.5 } as const;

// Image orientation matches the approved screenshot. Existing campus axes run
// opposite both image axes, so models retain their original facing directions.
export function pixelToWorld([x, y]: PixelPoint, height = 0): THREE.Vector3 {
  return new THREE.Vector3(
    (expandedGround.widthPixels / 2 - x) * expandedGround.metresPerPixel,
    height,
    (expandedGround.heightPixels / 2 - y) * expandedGround.metresPerPixel,
  );
}

export const expandedPlots = {
  southeast: {
    name: '天煌科技园', source: { minX: 87, maxX: 203, minZ: 8, maxZ: 153 },
    quad: [[137, 221], [344, 170], [367, 359], [179, 387]],
  },
  southCentral: {
    name: '海源科创地块', source: { minX: -64, maxX: 64, minZ: 8, maxZ: 153 },
    quad: [[412, 162], [626, 115], [644, 331], [438, 354]],
  },
  southwest: {
    name: '西投云城犀谷', source: { minX: -184, maxX: -86, minZ: 8, maxZ: 151 },
    quad: [[704, 118], [942, 65], [1021, 280], [730, 326]],
  },
  yongchuang: {
    name: '永创智能', source: { minX: 92, maxX: 194, minZ: -161, maxZ: -32 },
    quad: [[208, 451], [387, 417], [410, 634], [241, 655]],
  },
  landmarks: {
    name: '紫金科创与绿峰中心', source: { minX: -64, maxX: 64, minZ: -161, maxZ: -26 },
    quad: [[466, 433], [664, 396], [692, 614], [493, 638]],
  },
  riverside: {
    name: '临河研发地块', source: { minX: -184, maxX: -86, minZ: -161, maxZ: -30 },
    quad: [[750, 405], [1000, 359], [1010, 572], [790, 615]],
  },
} satisfies Record<string, { name: string; source: SourceBounds; quad: Quad }>;

export type ExpandedPlotId = keyof typeof expandedPlots;

export function plotMatrix(id: ExpandedPlotId): THREE.Matrix4 {
  const { source, quad } = expandedPlots[id];
  const [tl, tr, br, bl] = quad.map((point) => pixelToWorld(point));
  const centre = tl.clone().add(tr).add(br).add(bl).multiplyScalar(0.25);
  const xAxis = tl.clone().add(bl).sub(tr).sub(br).multiplyScalar(0.48 / (source.maxX - source.minX));
  const zAxis = tl.clone().add(tr).sub(bl).sub(br).multiplyScalar(0.48 / (source.maxZ - source.minZ));
  const position = centre.clone()
    .addScaledVector(xAxis, -(source.minX + source.maxX) / 2)
    .addScaledVector(zAxis, -(source.minZ + source.maxZ) / 2);
  return new THREE.Matrix4().set(
    xAxis.x, 0, zAxis.x, position.x,
    0, 1, 0, 0,
    xAxis.z, 0, zAxis.z, position.z,
    0, 0, 0, 1,
  );
}

export function mapCampusPoint(id: ExpandedPlotId, x: number, z: number, height = 0) {
  return new THREE.Vector3(x, height, z).applyMatrix4(plotMatrix(id));
}

export function fitPlot(group: THREE.Group, id: ExpandedPlotId, buildingsOnly = false) {
  if (buildingsOnly) {
    const remove: THREE.Object3D[] = [];
    group.traverse((object) => {
      // Thin roofs and architectural trim also have castShadow=false in the
      // original factories. Classify surfaces by purpose, never by shadow flags.
      const namedSurface = /绿化|灌木|花丛|铺装|出入口|绿带|绿岛|花园|草坪|-(?:paving|path|grass|lane)$/.test(object.name);
      // The southwest factory also has two unnamed flat lawn triangles.
      const unnamedLawn = object instanceof THREE.Mesh && !object.name &&
        object.geometry.type === 'ShapeGeometry' && object.position.y < 0.3;
      if (namedSurface || unnamedLawn) remove.push(object);
    });
    remove.forEach((object) => object.removeFromParent());
  }
  const wrapper = new THREE.Group();
  wrapper.name = `扩展版-${expandedPlots[id].name}`;
  wrapper.matrix.copy(plotMatrix(id));
  // Retain the oblique parcel transform; decomposing into rotation/scale would lose its shear.
  wrapper.matrixAutoUpdate = false;
  wrapper.add(group);
  wrapper.updateMatrixWorld(true);
  return wrapper;
}

export const expandedBuildingLabels = campusBuildings.map((building) => {
  const plot = building.id === 'dusk-glass' ? 'yongchuang' : 'landmarks';
  const position = mapCampusPoint(plot, building.x, building.z);
  return { ...building, x: position.x, z: position.z };
});

export const reservedPlots = [
  { id: 'school', name: '学校预留地块', point: [358, 806] as PixelPoint },
  { id: 'phase-two', name: '产业园二期预留地块', point: [632, 790] as PixelPoint },
  { id: 'phase-one', name: '产业园一期预留地块', point: [999, 766] as PixelPoint },
];
