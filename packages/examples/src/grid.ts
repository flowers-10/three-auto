import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto(undefined, {
  camera: {
    type: 'PerspectiveCamera',
    fov: 70,
    near: 1,
    far: 1000,
    position: {
      x: 25,
      y: 25,
      z: 25,
    },
    lookAt: true,
    controls: {
      enable: true,
      enableDamping: true,
      enablePan: false,
    },
  },
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


