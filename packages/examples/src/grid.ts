import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto(undefined, {
  camera: {
    fov: 70,
    far: 1000,
    near: 0.1,
    position: {
      x: 25,
      y: 25,
      z: 25
    }
  }
});
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
instance.scene.add(box);
new AUTO.Grid(15,instance)


instance.time.on("tick", () => {
  // box.rotation.y = instance.time.elapsedTime;
});


