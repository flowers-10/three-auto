import { ConfigType } from "../types/ConfigType";

export const CONFIG: ConfigType = {
  id: "_scene",
  name: "",
  tipsType: 'css2',
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
      enable: true,
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
    logarithmicDepthBuffer:true,
    clearAlpha: 0,
    clearColor: '#000000',
  },
  resource: undefined,
  postprocess: undefined
};

