import { SeriesConfig } from "./SeriesType";

type SizeType = "parent" | "window";
type LightType = "point" | "ambient" | "hemisphere" | "spot";
type CameraType = "PerspectiveCamera" | "OrthographicCamera" | null | undefined;

type PositionType = {
  x: number;
  y: number;
  z: number;
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
  type: SizeType;
  id: string;
};
export type CameraConfig = {
  type?: CameraType;
  fov: number;
  near: number;
  far: number;
  position: PositionType;
  lookAt: boolean;
  controls: {
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
  antialias: boolean;
  alpha: boolean;
  clearAlpha: number;
  clearColor: string;
};

export type BloomConfigType = {
  strength: number;
  radius: number;
  threshold: number;
};

export interface ConfigType {
  id: string;
  name: string;
  camera: CameraConfig;
  size: SizeConfigType;
  light?: LightItems[];
  renderer: RendererConfig;
  series: SeriesConfig[];
}
