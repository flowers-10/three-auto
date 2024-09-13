import * as AUTO from "./src/index";
import * as THREE from "three";
import ZheJiangCity from '../examples/public/ZheJiangCity.json'

const light: AUTO.LightItems[] = [
  {
    type: "point",
    color: "#3e99e5",
    intensity: 400,
    distance: 100,
    helper: false,
    lightName: "光源1",
    position: {
      x: 4,
      y: 3,
      z: 14,
    },
  },


];
const instance = new AUTO.ThreeAuto();
new AUTO.Light(light, instance);
new AUTO.Series([
  {
    name: "轮廓地图",
    id: 0,
    type: "map",
    castShadow: false,
    receiveShadow: false,
    json: ZheJiangCity,
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
        distance: 1.6,
        rotation: {
          x: Math.PI / 2,
          y: 0,
          z: 0,
        },
        textStyle: {
          padding: '8px',
          'background': 'rgba(0,0,0,0.2)',
          'font-size': '20px',
          color: "#fff",
          'background-color': 'rgba(1,1,1,0.1)',
          bold: true,
          'line-height': '20px',
          'font-family': '"Ma Shan Zheng", cursive',
          'font-weight': 400,
          'font-style': 'normal',
        },
      },
    },
    data: [{ name: '', value: '', itemStyle: {} },]
  },
], instance);

(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 1000;
instance.camera.instance.position.set(0, 0, 20.0);

instance.time.on("tick", () => {
});

instance.mousemove.on("mousemove", () => {
  console.log(instance.mousemove) 
});