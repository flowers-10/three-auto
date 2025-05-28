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

const customPass = new AUTO.MoebiusPass({
  frequency: 0.04,
  amplitude: 2,
  mod:10,
  thickness:1.5
},instance)


instance.time.on("tick", () => {
  customPass.render();
  box.rotation.y = instance.time.elapsedTime;
});
