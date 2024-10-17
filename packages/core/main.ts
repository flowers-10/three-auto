import * as AUTO from "./src/index";
import * as THREE from "three";

import ChinaJson from '../examples/public/China.json'

const instance = new AUTO.ThreeAuto(undefined, {
  size: {
    type: 'window',
  },
  series: [
    {
      name: 'earth',
      type: 'earth',
      atmosphereDayColor: '#00aaff',
      atmosphereTwilightColor: '#ff6600',
      atmosphereThickness: 1.04,
      rotation: true,
      radius: 20,
      json: ChinaJson,
      data: [
        { name: '曼谷', value: 100, color: '#fcc02a', lng: 100.49074172973633,lat: 22 },
        { name: '澳大利亚', value: 200, color: '#f16b91', lng: 133,lat: -23.68477416688374 },
        { name: '新疆维吾尔自治区', value: 300, color: '#187bac', lng: 85,lat: 42 },
        { name: '德黑兰', value: 500, color: '#eeeeee', lng: 51,lat: 35 },
        { name: '美国', value: 1000, color: '#ccc', lng: 241,lat: 34 },
        { name: '英国', value: 400, color: '#000', lng: 359,lat: 51 },
        { name: '巴西', value: 500, color: '#3e1', lng: 668,lat: -9 },
        { name: '西藏', value: 200, color: '#9e2', lng: 91,lat: 29 },
        { name: '广西', value: 100, color: '#cf1', lng: 108,lat: 22 },
        { name: '江西', value: 0, color: '#cf2', lng: 115,lat: 28 },
      ],
    },
  ],
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      z: 40,
    }
  },
  renderer: {
    clearColor: '#000',
    clearAlpha: 1,
  }
});





