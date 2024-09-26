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
  },
  renderer: {
    antialias: true,
    alpha: true,
    clearAlpha: 0,
    clearColor: '#000000',
  },
  light: [
    {
      lightName: "point-light",
      type: "point",
      color: "#fff",
      intensity: 1,
      helper: false,
      position:{
        x: 10,
        y: 10,
        z: 10
      }
    },
  ],
  resource: undefined,
  postprocess: undefined
};

