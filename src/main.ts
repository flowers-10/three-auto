import { effect, reactive, ThreeInstance } from "../core";
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
const obj = {a:1,b:2,c:3,d:4,e:{x:0,y:1,z:2}}
reactive(obj)
effect(() => {
  console.log('我被触发了.',obj);
})
obj.a = 2
obj.c = 3
obj.e.x = 10
