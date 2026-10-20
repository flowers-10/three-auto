import * as THREE from 'three';
import type { CampusBuilding } from './buildingLayout';

type BuildingLabelTarget = Pick<CampusBuilding, 'id' | 'name' | 'x' | 'z' | 'height'>;

/** Show name tags only for the three landmark buildings. */
export function createBuildingLabels(
  camera: THREE.Camera,
  buildings: BuildingLabelTarget[],
  select: (building: BuildingLabelTarget) => void,
) {
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;inset:0;z-index:4;pointer-events:none;overflow:hidden';
  container.setAttribute('aria-label', '园区建筑');
  const landmarkIds = new Set(['dusk-glass', 'main', 'twin-glass']);
  const labels = buildings.filter((building) => landmarkIds.has(building.id)).map((building) => {
    const button = document.createElement('button');
    button.textContent = building.name;
    button.title = `查看${building.name}`;
    button.style.cssText = 'position:absolute;left:0;top:0;white-space:nowrap;border:1px solid #ffffff70;border-radius:7px;padding:5px 9px;background:rgba(24,43,48,.82);color:white;font:12px/1.3 system-ui,sans-serif;box-shadow:0 2px 8px #0002;pointer-events:auto;cursor:pointer;display:none';
    button.addEventListener('click', () => select(building));
    container.appendChild(button);
    return { button, point: new THREE.Vector3(building.x, building.height + 4, building.z) };
  });
  document.body.appendChild(container);
  const projected = new THREE.Vector3();
  return {
    update() {
      for (const { button, point } of labels) {
        projected.copy(point).project(camera);
        const visible = projected.z >= -1 && projected.z <= 1 &&
          projected.x > -1.15 && projected.x < 1.15 && projected.y > -1.05 && projected.y < 1.05;
        button.style.display = visible ? 'block' : 'none';
        if (visible) {
          const x = (projected.x * 0.5 + 0.5) * innerWidth;
          const y = (-projected.y * 0.5 + 0.5) * innerHeight;
          button.style.transform = `translate(${x}px,${y}px) translate(-50%,-100%)`;
        }
      }
    },
  };
}
