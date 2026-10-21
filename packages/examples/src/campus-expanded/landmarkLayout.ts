import * as THREE from 'three';
import { campusBuildings } from '../campus/buildingLayout';
import { expandedGround, pixelToWorld, type PixelPoint } from './layout';

// Anchors measured on the ground texture, in image pixels (TL, TR, BR, BL).
// Each building has its own anchor: the new paving no longer matches the old
// parcel-wide transform. Keep the original campus placement records intact.
export const landmarkPads: Record<string, readonly [PixelPoint, PixelPoint, PixelPoint, PixelPoint]> = {
  'twin-glass': [[502, 435], [658, 419], [668, 477], [512, 493]],
  main: [[516, 582], [680, 567], [696, 644], [532, 659]],
  'dusk-glass': [[264, 585], [365, 571], [375, 635], [274, 649]],
};

function padCorners(id: string) {
  // Texture dimensions differ slightly from the original ground canvas.
  return landmarkPads[id].map(([x, y]) => pixelToWorld([
    x * expandedGround.widthPixels / 1545,
    y * expandedGround.heightPixels / 1018,
  ]));
}

export function landmarkCenter(id: string, height = 0) {
  const centre = padCorners(id).reduce((sum, point) => sum.add(point), new THREE.Vector3()).multiplyScalar(0.25);
  centre.y = height;
  return centre;
}

export function fitLandmark(group: THREE.Group, id: string) {
  group.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(group);
  const size = bounds.getSize(new THREE.Vector3());
  const centre = bounds.getCenter(new THREE.Vector3());
  const [tl, tr, br, bl] = padCorners(id);
  const xAxis = tl.clone().add(bl).sub(tr).sub(br).multiplyScalar(0.5);
  const zAxis = tl.clone().add(tr).sub(bl).sub(br).multiplyScalar(0.5);
  const scale = Math.min(xAxis.length() / size.x, zAxis.length() / size.z);
  xAxis.normalize().multiplyScalar(scale);
  zAxis.normalize().multiplyScalar(scale);
  const position = landmarkCenter(id)
    .addScaledVector(xAxis, -centre.x)
    .addScaledVector(zAxis, -centre.z);

  const wrapper = new THREE.Group();
  wrapper.name = `扩展版地标-${id}`;
  wrapper.matrix.set(
    xAxis.x, 0, zAxis.x, position.x,
    0, 1, 0, 0,
    xAxis.z, 0, zAxis.z, position.z,
    0, 0, 0, 1,
  );
  wrapper.matrixAutoUpdate = false;
  wrapper.add(group);
  wrapper.updateMatrixWorld(true);
  return wrapper;
}

export const landmarkLabels = campusBuildings.map((building) => {
  const centre = landmarkCenter(building.id);
  return { ...building, x: centre.x, z: centre.z };
});
