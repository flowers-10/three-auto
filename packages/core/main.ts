import * as AUTO from "./src/index";
import * as DAT from "lil-gui";
import * as THREE from "three";


const gui = new DAT.GUI();
const instance = new AUTO.ThreeAuto(undefined, {
  camera: {
    fov: 70,
    far: 1000,
    near: 0.1,
    position: {
      x: 10,
      y: 10,
      z: 10
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
new AUTO.Grid(8,instance)



instance.time.on("tick", () => {
  // box.rotation.y = instance.time.elapsedTime;
});


