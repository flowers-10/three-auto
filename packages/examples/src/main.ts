import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
const div1 = AUTO.htmlRender({ tag: 'div', children: 'Hello ThreeAuto 👋' , style: { 'font-size': '40px', background: 'rgba(1,1,1,0.1)', padding: '20px', 'border-radius': '8px' } })
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
});
