import * as THREE from "three";
import { SeriesConfig } from "./SeriesType";
import { LoadingType, SourcesItems } from "./SourcesType";
import {TipsType} from '../components/web/Tips'

type SizeType = "parent" | "window";
type LightType = "point" | "ambient" | "hemisphere" | "spot" | 'directional';
type CameraType = "PerspectiveCamera" | "OrthographicCamera" | null | undefined;

type PositionType = {
  x?: number;
  y?: number;
  z?: number;
};

export type LightShadowConfig = {
  mapSizeWidth: number;
  mapSizeHeight: number;
  cameraLeft: number;
  cameraRight: number;
  cameraTop: number;
  cameraBottom: number;
  cameraNear: number;
  cameraFar: number;
  radius: number;
  normalBias: number;
  bias: number;
}
export type LightItems = {
  castShadow?: boolean;
  shadow?: Partial<LightShadowConfig>;
  target?: THREE.Object3D;
  type: LightType;
  color: string;
  intensity: number;
  distance?: number;
  helper?: boolean;
  helperSize?: number;
  lightName?: string;
  position?: PositionType;
  groundColor?: string;
  angle?: number;
  penumbra?: number;
  decay?: number;
};

export type SizeConfigType = {
  type?: SizeType;
  id?: string;
  dom?: HTMLElement;
};

export type CameraConfig = {
  type?: CameraType;
  fov: number;
  near: number;
  far: number;
  position: PositionType;
  lookAt?: boolean;
  controls?: {
    show: boolean;
    enableDamping: boolean;
    minPolarAngle?: number;
    maxPolarAngle?: number;
    minAzimuthAngle?: number;
    maxAzimuthAngle?: number;
    enablePan: boolean;
  };
};

export type RendererConfig = {
  logarithmicDepthBuffer?:boolean;
  antialias?: boolean;
  alpha?: boolean;
  clearAlpha?: number;
  clearColor: string;
};

export type BloomConfigType = {
  strength: number;
  radius: number;
  threshold: number;
};

type PostProcessConfigType = 'moebius' | 'bloom' | 'toneMapping';

export type PostProcessConfig = {
  type: PostProcessConfigType;
  moebius?: boolean,
  bloom?: boolean,
  options?: any
}


export interface ShadowConfig {
  show?: boolean;
  width?: number;
  height?: number;
  color?: string | number;
  opacity?: number;
  rotation?: { x: number, y: number, z: number };
  position?: { x: number, y: number, z: number };
}

export interface ConfigType {
  id: string;
  name: string;
  size: SizeConfigType;
  light?: LightItems[];
  camera: CameraConfig;
  series?: Partial<SeriesConfig>[];
  resource?: SourcesItems[]
  loadingType?: LoadingType;
  tipsType?: TipsType;
  renderer: RendererConfig;
  shadow?: ShadowConfig;
  postprocess?: PostProcessConfig;
  env?: {} 
}