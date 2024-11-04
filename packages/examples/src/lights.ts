import * as AUTO from "three-auto";
import * as THREE from "three";


const geometry = new THREE.BoxGeometry(100, 10, 100);
const material = new THREE.MeshPhongMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
box.castShadow = true;
box.position.set(0, 30, 0);

const instance = new AUTO.ThreeAuto(undefined, {
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      x: 50, y: 80, z: 50
    }
  },
  renderer: {
    clearColor: '#ccc'
  },
  shadow: {
    show: true,
    width: 1000,
    height: 1000,
    color: '#000',
    opacity: 0.1,
    rotation: { x: -Math.PI / 2, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
  },
  light: [
    {
      type: "hemisphere",
      color: "#3e99e5",
      intensity: 1,
      groundColor: '#fff',
      distance: 1000,
      helper: true,
      helperSize: 5,
      lightName: "hemisphere-light",
      position: {
        x: 0,
        y: 50,
        z: -50,
      },
    },
    {
      type: "point",
      color: "#3e99e5",
      intensity: 1000,
      distance: 1000,
      helper: true,
      helperSize: 5,
      lightName: "point-light",
      position: {
        x: 0,
        y: 50,
        z: 50,
      },
    },
    {
      type: "spot",
      color: "#C8A2CB",
      intensity: 1,
      distance: 3000,
      angle: Math.PI / 20,
      decay: 1,
      penumbra: 5,
      helper: true,
      helperSize: 5,
      lightName: "spot-light",
      castShadow: true,
      shadow: {
        mapSizeWidth: 1024,
        mapSizeHeight: 1024,
        cameraLeft: -100,
        cameraTop: 100,
        cameraBottom: -100,
        cameraRight: 100,
        cameraNear: 0.1,
        cameraFar: 1000,
        radius: 10,
      },
      position: {
        x: -150, y: 50, z: 0,
      }
    },
    {
      type: "directional",
      color: "#C8A2CB",
      intensity: 1,
      distance: 3000,
      helper: true,
      helperSize: 5,
      lightName: "directional-light",
      castShadow: true,
      shadow: {
        mapSizeWidth: 1024,
        mapSizeHeight: 1024,
        cameraLeft: -100,
        cameraTop: 100,
        cameraBottom: -100,
        cameraRight: 100,
        cameraNear: 0.1,
        cameraFar: 1000,
        radius: 100,
        bias: -0.004,
        normalBias: 0.027
      },
      position: {
        x: 0, y: 100, z: 50,
      }
    },
    {
      type: "ambient",
      color: "#3e99e5",
      intensity: 1,
      lightName: "ambient-light",
    },
  ],

});
instance.scene.add(box);

instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});










