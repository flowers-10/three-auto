import * as AUTO from "three-auto";
import * as THREE from "three";
import ZheJiangCity from '../public/ZheJiangCity.json'

const light: AUTO.LightItems[] = [
    {
      type: "point", 
      color: "#3e99e5", 
      intensity: 400, 
      distance: 100,
      helper: true,
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
    show: true,
    name: "轮廓地图",
    id: 0,
    type: "map",
    shader: false,
    castShadow: false,
    receiveShadow: false,
    json: ZheJiangCity,
    lineStyle: {
      show:true,
      depth: 1.1,
      color: "#A0E5FF",
      linewidth: .5,
    },
    label: {
      show:true,
      depth: 1,
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      textStyle: {
        arrangement: "horizontal",
        fontSize: 20,
        color: "#ffffff",
        bold: true,
        lineHeight: 20,
        fontFamily: "Arial",
      },
      filterList: [],
      filterStyle: {
        arrangement: "vertical",
        fontSize: 28,
        color: "#ffffff",
        bold: true,
        lineHeight: 20,
        fontFamily: "Arial",
      },
    },
    extrudeFaces: {
      color: "#3EB8F3",
      transparent: true,
      metalness: 1,
      roughness: 1,
      extrudeSettings: {
        depth: 1,
        bevelEnabled: false,
        bevelSegments: 1,
        bevelSize: 0,
        bevelThickness: 0,
      },
    },
    crossSection: {
      transparent: true,
      color: "#2B61A6",
    },
  },
],instance);

(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 1000;
instance.camera.instance.position.set(0, 0, 20.0);

instance.time.on("tick", () => {
});
