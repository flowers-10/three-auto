import * as AUTO from "./src/index";
import ChinaJson from "../examples/public/China.json";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const pie = new AUTO.Pie(
  {
    colors: ['#fcc02a', '#f16b91', '#187bac'],
    data: [
      { name: '小学', value: 100, color: '#fcc02a' },
      { name: '中学', value: 200, color: '#f16b91' },
      { name: '大学', value: 300, color: '#187bac' }
    ],
    isLabel: true,
    maxHeight: 20,
    baseHeight: 10,
    radius: 30,
    suffix: '',
    fontSize: 10,
    fontColor: 'rgba(255,255,255,1)',
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
  // if (previous) {
  //   previous.position.set(previous.position.x - 10, 0, 0)
  //   previous = null
  // }
  pie.group.children.forEach(item => {
    item.children.forEach(itemX => {
      if (intersects && intersects[0].object.uuid === itemX.uuid) {
        previous = item
        const dir = item.userData.direction
        dir.normalize()
        item.position.addScaledVector(dir, 2)
      }
    })
  })
};
