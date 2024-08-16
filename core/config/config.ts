import { effect } from "./effect";
import { reactive } from "./reactive";
// import { ThreeInstance } from "../base/ThreeInstance";
import { ConfigType } from "../types/ConfigType";

export const CONFIG: ConfigType = {
  el: "_canvas-scene",
  id: "_scene",
  name: "hello world",
  camera: {
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
    outlineConfig: {
      edgeStrength: 3,
      edgeGlow: 1,
      edgeThickness: 3,
      pulsePeriod: 2,
      gamma: true,
      antiAliasing: true,
      showIndex: 1,
    },
    bloomConfig: {
      strength: 0.8,
      radius: 0.5,
      threshold: 0.5,
    },
  },
  renderer: {
    antialias: true,
    alpha: true,
    clearAlpha: 0,
    clearColor: "",
  },
  light: [
    {
      type: "ambient",
      color: "#ffffff",
      intensity: 0.8,
      helper: false,
      lightId: 0,
      lightName: "光源1",
    },
  ],
  sources: [],
};

export const setupConfigEffect = (config: any,instance:any): any => {
  const configEffect = reactive(config);

  // todo : to many keys should bind to effects
  effect(() => {
    configEffect.name;
    configEffect.id;
    configEffect.sources;
    instance.camera.instance.fov = configEffect.camera.fov;
    instance.camera.instance.near = configEffect.camera.near;
    instance.camera.instance.far = configEffect.camera.far;
    instance.camera.instance.position.x = configEffect.camera.position.x;
    instance.camera.instance.position.y = configEffect.camera.position.y;
    instance.camera.instance.position.z = configEffect.camera.position.z;
  });
  return configEffect
};
