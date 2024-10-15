import * as AUTO from "./src/index";
import * as THREE from "three";

import ChinaJson from '../examples/public/China.json'

const _scene2 = document.getElementById('_scene2') as HTMLCanvasElement
const instance2 = new AUTO.ThreeAuto(_scene2, {
  size: {
    type: 'parent',
    id: '_scene2'
  },
  series: [
    {
      name: 'earth',
      type: 'earth',
      atmosphereDayColor: '#00aaff',
      atmosphereTwilightColor: '#ff6600',
      atmosphereThickness: 1.04,
      rotation: true,
      radius: 2,
      json: ChinaJson,
    },
  ],
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      z: 3
    }
  },
  renderer: {
    clearColor: '#000',
    clearAlpha: 1,
  }
});

const _scene = document.getElementById('_scene') as HTMLCanvasElement

const instance = new AUTO.ThreeAuto(_scene, {
  size: {
    type: 'parent',
    id: '_scene'
  },
  shadow: {
    show: true,
    width: 400,
    height: 400,
    color: '#000',
    opacity: 0.1,
    rotation:  { x: -Math.PI / 2, y: 0, z: 0 },
    light: {
      helper: false,
      color: '#fff',
      intensity: 10,
      position: { x: 30, y: 100, z: 100 },
      mapWidth: 1024,
      mapHeight: 1024,
      left: -100,
      top: 100,
      bottom: -100,
      right: 100,
      near: 0.1,
      far: 1000,
      radius: 10,
      bias: -0.004,
      normalBias: 0.027,
    }
  },
  series: [
    {
      type: 'pie',
      name: 'three-auto-pie',
      shadow: true,
      data: [
        { name: '小学', value: 100, color: '#fcc02a' },
        { name: '中学', value: 200, color: '#f16b91' },
        { name: '大学', value: 300, color: '#187bac' },
        { name: '不学', value: 500, color: '#eeeeee' },
      ],
      transparent: true,
      opacity: 1,
      selectedOffset: 10,
      height: 20,
      heightMode: 'flat',
      radius: [50, 60],
      gap: 5,
      eventName: 'click',
      label: {
        show: true,
        distance: 3,
        scale: 1,
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        textStyle: {
          padding: '6px',
          'font-size': '16px',
          color: "#000",
          bold: true,
          'font-weight': 400,
          'font-style': 'normal',
        },
      },
      tooltip: {
        className: 'three-auto-tooltip',
        background: 'rgba(255,255,255,1)',
        show: true,
        borderWidth: 1,
        padding: '15px 20px',
        hideDelay: 100,
        textStyle: {
          'font-size': '18px',
          color: "#000000",
          'font-weight': 400,
          'font-style': 'normal',
        },
      }
    }
  ],
  postprocess: {
    type: 'moebius',
    options: {
      shadow: false,
    }
  }
});

(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 5000;
instance.camera.instance.updateProjectionMatrix()
instance.camera.instance.position.set(100, 100, 100.0);
instance._renderer.setClearColor("#DDEAFB");
instance.onTick(() => {
});




