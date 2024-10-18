import * as AUTO from "./src/index";

import * as THREE from "three";

const instance = new AUTO.ThreeAuto(undefined, {
  renderer: {
    clearColor: '#000'
  },
  postprocess: {
    type: 'toneMapping',
  }
});
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
instance.scene.add(box);

instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});


