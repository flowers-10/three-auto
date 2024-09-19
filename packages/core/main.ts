import * as AUTO from "./src/index";
import * as THREE from "three";
import ZheJiangCity from '../examples/public/ZheJiangCity.json'

const instance = new AUTO.ThreeAuto();
(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 1000;
instance.camera.instance.position.set(0, 0, 20.0);


instance.onTick(() => {
    console.log();
})

