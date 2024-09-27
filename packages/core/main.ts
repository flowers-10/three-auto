import * as AUTO from "./src/index";
import ChinaJson from "../examples/public/China.json";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const pie = new AUTO.Pie(
  {
    data: [
      { name: '小学', value: 100, color: '#fcc02a' },
      { name: '中学', value: 200, color: '#f16b91' },
      { name: '大学', value: 300, color: '#187bac' },
      { name: '不学', value: 500, color: '#' },
    ],
    height: 20,
    radius: 30,
    gap: 0.5,
    label: {
      show: true,
      distance: 5,
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      textStyle: {
        padding: '6px',
        'font-size': '10px',
        color: "#fff",
        bold: true,
        'font-weight': 400,
        'font-style': 'normal',
      },
    },
  }, instance
);
(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 1000;
instance.camera.instance.position.set(100, 100, 100.0);
instance._renderer.setClearColor("#000");
instance.onTick(() => {
});

let previous: any = null
const sceneDom = document.getElementById("_scene") as HTMLCanvasElement;

sceneDom.onclick = function () {
  const intersects = instance.raycaster.onRaycasting();
  if (previous) {
    const dir = previous.userData.dir
    previous.position.addScaledVector(dir, -2)
    previous = null
  }
  pie.group.children.forEach(item => {
    item.children.forEach(itemX => {
      if (intersects && intersects[0].object.uuid === itemX.uuid) {
        previous = item
        const dir = item.userData.dir
        item.position.addScaledVector(dir, 2)
      }
    })
  })
};
