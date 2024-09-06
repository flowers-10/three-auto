import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
new AUTO.Light(
  [
    {
      type: "point", // 点光源
      color: "#3e99e5", // 颜色
      intensity: 10, // 强度
      distance: 500,
      helper: true, // 助手
      helperSize: 0.1,
      lightName: "point-light",
      position: {
        x: 0,
        y: 2,
        z: 2,
      },
    },
    {
      type: "ambient",
      color: "#3e99e5",
      intensity: 1,
      helper: false,
      lightName: "ambient-light",
    },
  ],
  instance
);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
instance.scene.background = null;

instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});
