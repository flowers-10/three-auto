import * as AUTO from "three-auto";
import * as THREE from "three";


const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
const box2 = new THREE.Mesh(
  geometry,
  new THREE.MeshBasicMaterial({
    color: "#000",
    transparent: true,
  })
);
box2.position.set(0, 0, -2);
const group = new THREE.Group();
group.add(box);
group.add(box2);
instance.scene.add(group);
instance.scene.background = null;
instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});
const sceneDom = document.getElementById("_scene") as HTMLCanvasElement;
sceneDom.onclick = function () {
  const intersects = instance.raycaster.onRaycasting(true);
  console.log("Monitor all raycast-detected objects:", intersects);
  const obj = instance.raycaster.isTargetIntersected(box2);
  console.log("Check if the passed target is triggered:", obj);
  if (obj) {
    obj.object.position.x += 1;
  }
};
sceneDom.onmousemove = function () {
  instance.raycaster.onRaycasting();
};
// more events...
