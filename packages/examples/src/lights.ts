import * as AUTO from "three-auto";
import * as THREE from "three";


const geometry = new THREE.BoxGeometry(30, 30, 30);
const material = new THREE.MeshPhongMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
box.castShadow = true;
box.position.set(0, 30, 0);

const instance = new AUTO.ThreeAuto(undefined, {
  shadow: {
    show: true,
    width: 400,
    height: 400,
    color: '#000',
    opacity: 0.1,
    rotation: { x: -Math.PI / 2, y: 0, z: 0 },
    light: {
      helper: false,
      color: '#fff',
      intensity: 10,
      position: { x: 30, y: 100, z: 100 },
      mapWidth: 1024,
      mapHeight: 1024,
      left: -100,
      top: 100,
      bottom: -100,
      right: 100,
      near: 0.1,
      far: 1000,
      radius: 10,
      bias: -0.004,
      normalBias: 0.027,
    }
  },
  light: [
    {
      type: "hemisphere",
      color: "#980265",
      groundColor: '#5F183B',
      intensity: 1.2,
      helper: true,
      helperSize: 5,
      lightName: "hemisphere-light",
      position: {
        x: 50,
        y: 50,
        z: -50,
      },
    },
    {
      type: "point",
      color: "#3e99e5",
      intensity: 10,
      distance: 10,
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
      distance: 300,
      helper: true,
      helperSize: 5,
      lightName: "spot-light",
      position: {
        x: 0,
        y: 500,
        z: 3,
      },
    },
    {
      type: "directional",
      color: "#C8A2CB",
      intensity: 1,
      distance: 300,
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
        cameraFar: 100,
        radius: 10,
        bias: 0.027,
        normalBias: -0.004
      },
      
    },
    {
      type: "ambient",
      color: "#3e99e5",
      intensity: 1,
      lightName: "ambient-light",
    },
  ],
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
  }
});
instance.scene.add(box);
instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});
