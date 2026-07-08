import * as AUTO from "./src/index";
import * as THREE from "three";

const bootstrapCanvas = document.getElementById("_canvas") as HTMLCanvasElement | null;

const instance = new AUTO.ThreeAuto(bootstrapCanvas ?? undefined, {
  renderer: {
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true,
    clearAlpha: 1,
    clearColor: "#F29EC0",
  },
  camera: {
    position: { x: 6, y: 15, z: 17 },
    lookAt: true,
    controls: {
      enable: false,
      enableDamping: true,
      enablePan: true,
      design: true,
    },
  },
  light: [
    { type: "ambient", color: "#ffffff", intensity: 1.1 },
  ]
  
} as any);

const grid = new THREE.GridHelper(30, 30, 0xc85c96, 0xb45b8d);
grid.position.y = -0.01;
grid.userData.designSelectable = false;
instance.scene.add(grid);

const box = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshStandardMaterial({ color: 0x5b5bd6, roughness: 0.28, metalness: 0.08 }),
);
box.name = "target-box";
box.position.set(0, 1, 0);
instance.scene.add(box);

const group = new THREE.Group();
group.name = "design-group";
group.userData.designRoot = true;
group.position.set(3.2, 1, -1.2);

const capsule = new THREE.Mesh(
  new THREE.CapsuleGeometry(0.55, 1.4, 8, 16),
  new THREE.MeshStandardMaterial({ color: 0x7b5cff, roughness: 0.22, metalness: 0.05 }),
);
capsule.position.set(0, 0.9, 0);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.48, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xffb347, roughness: 0.18, metalness: 0.04 }),
);
sphere.position.set(1.35, 0.45, 0.35);

group.add(capsule, sphere);
instance.scene.add(group);
