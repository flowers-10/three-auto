import * as AUTO from "./src/index";
import * as THREE from "three";
import ChinaJson from "../examples/public/China.json";

const instance = new AUTO.ThreeAuto(undefined, {
  id: "_scene",
  name: "Hello three auto",
  camera: {
    type: 'PerspectiveCamera',
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
      castShadow: false,
      receiveShadow: false,
      json: ChinaJson,
      itemStyle: {
        depth: 1,
        bevelEnabled: false,
        bevelSegments: 1,
        bevelSize: 0,
        bevelThickness: 0,
        extrudeFaces: {
          material: 'MeshNormalMaterial',
          color: "#ccc",
          opacity: 1,
          metalness: 1,
          roughness: 1,
        },
        crossSection: {
          material: 'MeshNormalMaterial',
          opacity: 0.8,
          color: "#000",
        },
        lineStyle: {
          show: true,
          color: "#A0E5FF",
          width: 2,
        },
        label: {
          show: true,
          distance: 1.3,
          rotation: {
            x: 0,
            y: 0,
            z: 0,
          },
          textStyle: {
            padding: '8px',
            'font-size': '20px',
            color: "#fff",
            bold: true,
            'font-weight': 400,
            'font-style': 'normal',
          },
        },
      },
    },
  ]
});

instance.time.on("tick", () => {});