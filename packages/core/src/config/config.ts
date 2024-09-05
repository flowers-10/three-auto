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
      enablePan: true,
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

