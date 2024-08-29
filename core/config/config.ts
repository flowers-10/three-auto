import { ConfigType } from "../types/ConfigType";

export const CONFIG: ConfigType = {
  el: "_canvas-scene",
  id: "_scene",
  name: "hello world",
  camera: {
    type: 'PerspectiveCamera',
    fov: 60,
    near: 1,
    far: 10000,
    position: {
      x: 600,
      y: 600,
      z: 600,
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
  rendererPass: {
    type: "NONE",
  },
  renderer: {
    antialias: true,
    alpha: true,
    clearAlpha: 1,
    clearColor: "#fff",
  },
  light: [
    {
      type: "ambient",
      color: "#ffffff",
      intensity: 0.8,
      helper: false,
      lightId: 0,
      lightName: "ambient-light",
    },
  ],
};

