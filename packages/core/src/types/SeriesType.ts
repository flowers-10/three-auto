import * as THREE from "three";

export type MaterialType = 'MeshBasicMaterial' | 'MeshDepthMaterial' | 'MeshLambertMaterial' | 'MeshMatcapMaterial' | 'MeshNormalMaterial' | 'MeshPhongMaterial' | 'MeshPhysicalMaterial' | 'MeshStandardMaterial' | 'MeshToonMaterial' | 'ShaderMaterial'

export type MaterialTypeOfTHREE = THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshDepthMaterial | THREE.MeshLambertMaterial | THREE.MeshMatcapMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshToonMaterial


type cssType = 'css2' | 'css3'
export interface LabelStyle {
  show?: boolean;
  type?: cssType;
  distance?: number;
  scale?: number;
  position?: string;
  rotation?: {
    x: number;
    y: number;
    z: number;
  };
  textStyle?: any;
  formatter?: (params: Object | any[]) => string | void
}

export interface MaterialConfig {
  material?: MaterialType
  color?: string;
  opacity?: number;
  metalness?: number;
  roughness?: number;
}

export interface LineStyle {
  show?: boolean;
  color?: string;
  width?: number;
}

export interface ItemStyle {
  color: string;
  extrudeFaces: MaterialConfig;
  crossSection: MaterialConfig;
  lineStyle: LineStyle;
  label: LabelStyle;
  depth: number;
  bevelEnabled: boolean;
  bevelSegments: number;
  bevelSize: number;
  bevelThickness?: number;
  [key: string]: any;
}

export interface DataItem {
  name?: string;
  value?: string | number;
  color?: string;
  itemStyle?: ItemStyle;
  [key: string]: any;
}

export type ChartType = 'map' | 'line' | 'bar' | 'pie' | 'earth';

export interface SeriesConfig {
  name: string;
  id?: number | string;
  type: ChartType;
  shadow?: boolean,
  code?: number | string;
  json?: any; // Replace 'any'
  itemStyle: Partial<ItemStyle>;
  label: LabelStyle;
  data: DataItem[];
  height: number;
  radius: number | [number, number];
  gap: number;
  animation: boolean,
  animationDuration: number,
  animationEasing: string,
  animationDelay: number,
  eventName: string,
  atmosphereDayColor?: string;
  atmosphereTwilightColor?: string;
  atmosphereThickness?: number;
  rotation?: boolean;
  tooltip?: any;
  [key: string]: any
}

