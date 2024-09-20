import * as AUTO from "./src/index";
import * as THREE from "three";
import ChinaJson from "../examples/public/China.json";

const instance = new AUTO.ThreeAuto(undefined, {
  id: "_scene",
  name: "Hello three auto",
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      x: 0,
      y: 0,
      z: 20,
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
    clearAlpha: 1,
    clearColor: '#000000',
  },
  series: [
    {
      name: "轮廓地图",
      id: 0,
      type: "map",
      json: ChinaJson,
      itemStyle: {
        label: {
          distance: 2,
        },
      },
    },
  ]
});

instance.time.on("tick", () => {});