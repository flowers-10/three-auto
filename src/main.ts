import { ThreeInstance } from "../core";
import * as THREE from "three";

const instance:ThreeInstance = new ThreeInstance()
const geometry = new THREE.BoxGeometry(400,400,400)
const material = new THREE.MeshBasicMaterial({
  color:'#E89ABE',
  transparent:true,
})
const box = new THREE.Mesh(geometry,material)

instance.scene.add(box)
instance.time.on("tick", () => {
   box.rotation.y = instance.time.elapsedTime 
});
console.log(instance.config);

instance.config.camera.fov = 60
setTimeout(() => {
  instance.config.camera.position.x = 10000
  setTimeout(() => {
    instance.config.camera.position.x = 1000
    setTimeout(() => {
      instance.config.camera.position.x = 10000
      setTimeout(() => {
        instance.config.camera.position.x = 1000
        setTimeout(() => {
          instance.config.camera.position.x = 10000
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);



