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

const gridXZ = new THREE.GridHelper(8, 8, 0xEED5B7, 0xEED5B7);
gridXZ.position.set(4, 0, 4);
instance.scene.add(gridXZ);

const gridXY = new THREE.GridHelper(8, 8, 0xEED5B7, 0xEED5B7);
gridXY.position.set(4, 4, 0);
gridXY.rotation.x = Math.PI / 2;
instance.scene.add(gridXY);

const gridYZ = new THREE.GridHelper(8, 8, 0xEED5B7, 0xEED5B7);
gridYZ.position.set(0, 4, 4);
gridYZ.rotation.z = Math.PI / 2;
instance.scene.add(gridYZ);

for (let i = 0; i < 9; i++) {
  const labelElement = AUTO.htmlRender({ tag: 'div', children: i })
  const tip = instance.createTips(labelElement)
  tip.position.set(8.3, 0, i)
}

for (let i = 0; i < 9; i++) {
  const labelElement = AUTO.htmlRender({ tag: 'div', children: i })
  const tip = instance.createTips(labelElement)
  tip.position.set(i, 0, 8.3)
}

for (let i = 0; i < 9; i++) {
  const labelElement = AUTO.htmlRender({ tag: 'div', children: i })
  const tip = instance.createTips(labelElement)
  tip.position.set(0, i, 8.3)
}

instance.time.on("tick", () => {
  // box.rotation.y = instance.time.elapsedTime;
});


