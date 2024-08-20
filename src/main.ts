import * as AUTO from "../core";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});
