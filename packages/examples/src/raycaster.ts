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

const div1 = AUTO.htmlRender({ tag: 'div', children: 'Click box 👆', style: { 'font-size': '40px', background: 'rgba(1,1,1,0.1)', padding: '20px', 'border-radius': '8px' } })
const css3 = new AUTO.Tips(instance)
const tipsMesh1 = css3.createTips(div1)
tipsMesh1.position.set(-5, 0, 0)
tipsMesh1.scale.set(0.005, 0.005, 1)
instance.time.on("tick", () => {
  css3.update()
  box.rotation.y = instance.time.elapsedTime;
});

instance.sizes.on('resize',() => {
  // css2.resize()
  css3.resize()
})

const sceneDom = document.getElementById("_scene") as HTMLCanvasElement;
sceneDom.onclick = function () {
  const intersects = instance.raycaster.onRaycasting(true);
  alert(`Monitor all raycast-detected objects: ${JSON.stringify(intersects)}`);
  const obj = instance.raycaster.isTargetIntersected(box2);
  console.log(`Check if the passed target is triggered: ${JSON.stringify(obj)}`);
  if (obj) {
    obj.object.position.x += 1;
  }
};
sceneDom.onmousemove = function () {
  instance.raycaster.onRaycasting();
};
// more events...
