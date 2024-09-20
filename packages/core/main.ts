import * as AUTO from "./src/index";
import * as THREE from "three";
import ZheJiangCity from "../examples/public/ZheJiangCity.json";

const instance = new AUTO.ThreeAuto();
const earth = new AUTO.Earth(
  {
    atmosphereDayColor: "#00aaff",
    atmosphereTwilightColor: "#ff6600",
    atmosphereThickness: 1.04,
    rotation: false,
    revolution: false,
    json: ZheJiangCity,
  },
  instance
);
(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 1000;
instance.camera.instance.position.set(0, 0, 5.0);
instance._renderer.setClearColor("#000");
instance.onTick(() => {
  earth.update();
});
