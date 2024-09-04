import { ConfigType } from "../types/ConfigType";

export const CONFIG: ConfigType = {
  id: "_scene",
  name: "hello world",
  camera: {
    type: 'PerspectiveCamera',
    fov: 60,
    near: 1,
    far: 10000,
    position: {
      x: 2,
      y: 2,
      z: 2,
    },
    lookAt: true,
    controls: {
      show: true,
      enableDamping: true,
      minPolarAngle: Math.PI * 0.25,
      maxPolarAngle: Math.PI * 0.75,
      minAzimuthAngle: -Math.PI * 0.45,
      maxAzimuthAngle: Math.PI * 0.25,
      enablePan: false,
    },
  },
  size: {
    type: "window",
    id: "_Background_3D",
  },
  renderer: {
    antialias: true,
    alpha: true,
    clearAlpha: 0,
    clearColor: '#000000',
  }
};

