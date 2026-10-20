export type BuildingPlacement = {
  file: string;
  node?: string;
  x: number;
  z: number;
  height: number;
  width?: number;
  yaw: number;
};

export type CampusBuilding = BuildingPlacement & {
  id: string;
  name: string;
  detailFile?: string;
};

// One record per distinct building; detail files are distance-based alternatives.
// Yongchuang keeps its commissioned model; surrounding draft volumes live in yongchuangPlot.ts.
export const campusBuildings: CampusBuilding[] = [
  { id: 'main', name: '紫金科创', file: 'twin-terrace.glb', detailFile: 'twin-terrace-detail.glb',
    x: 0, z: -114, height: 33, yaw: 0 },
  { id: 'twin-glass', name: '绿峰中心', file: 'twin-glass-towers.glb', detailFile: 'twin-glass-towers-detail.glb',
    x: 0, z: -48, height: 50, width: 112.6, yaw: Math.PI },
  { id: 'dusk-glass', name: '永创智能', file: 'dusk-glass-tower.glb', detailFile: 'dusk-glass-tower-detail.glb',
    x: 144, z: -133, height: 78, yaw: 0 },
  { id: 'rd-office', name: '研发办公楼', file: 'rd-building-lod.glb', detailFile: 'rd-building.glb',
    x: -25, z: 55, height: 27, yaw: Math.PI / 2 },
  { id: 'south-center-office', name: '南中配套楼', file: 'smart-park-building-8.glb',
    x: 25, z: 120, height: 15, yaw: Math.PI / 2 },
  { id: 'factory', name: '智慧厂房', file: 'factory-building.glb',
    x: 143, z: 78, height: 11, yaw: Math.PI / 2 },
];
