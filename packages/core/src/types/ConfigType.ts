import { SeriesConfig } from "./SeriesType";
import { LoadingType, SourcesItems } from "./SourcesType";

type SizeType = "parent" | "window";
type LightType = "point" | "ambient" | "hemisphere" | "spot";
type CameraType = "PerspectiveCamera" | "OrthographicCamera" | null | undefined;

type PositionType = {
  x?: number;
  y?: number;
  z?: number;
};

export type LightItems = {
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
  bloom?:boolean,
  options?: any
}


export interface ShadowConfig {
  show?: boolean;
  width?: number;
  height?: number;
  color?: string | number;
  opacity?: number;
  rotation?:  { x: number, y: number, z: number };
  light: {
      helper?: boolean;
      color?: string | number;
      intensity?: number;
      position?: { x: number, y: number, z: number };
      mapWidth?: number;
      mapHeight?: number;
      left?: number;
      top?: number;
      bottom?: number;
      right?: number;
      near?: number;
      far?: number;
      radius?: number;
      bias?: number;
      normalBias?: number;
  }
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
  renderer: RendererConfig;
  shadow?: ShadowConfig;
  postprocess?: PostProcessConfig;
}