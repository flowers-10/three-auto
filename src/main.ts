import { ThreeInstance } from "../core";
import * as THREE from "three";

const instance: ThreeInstance = new ThreeInstance();
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
console.log(instance.config);

instance.config.camera.fov = 60;
setTimeout(() => {
  instance.config.camera.position.x = 10000;
  instance.config.renderer.clearColor = "#ccc";
  setTimeout(() => {
    instance.config.camera.position.x = 1000;
    instance.config.renderer.clearColor = "#fff";

    setTimeout(() => {
      instance.config.camera.position.x = 10000;
      instance.config.renderer.clearColor = "#eee";

      setTimeout(() => {
        instance.config.camera.position.x = 1000;
        instance.config.renderer.clearColor = "#fff";

        setTimeout(() => {
          instance.config.camera.position.x = 10000;
          instance.config.renderer.clearColor = "#ccc";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
