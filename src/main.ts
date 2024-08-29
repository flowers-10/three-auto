import * as AUTO from "../core";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
AUTO.createLoading('circle')
setTimeout(() => {
  AUTO.endLoading()
}, 2000);
const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);

const customPass = new AUTO.MoebiusPass(instance,{
  frequency: 0.04,
  amplitude: 2,
  mod:10,
  tickness:1.5
})


instance.time.on("tick", () => {
  customPass.render();
  box.rotation.y = instance.time.elapsedTime;
});
