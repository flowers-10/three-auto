import * as AUTO from "three-auto";
import * as THREE from "three";


const instance = new AUTO.ThreeAuto(undefined, {
    size: {
        type: 'parent',
        id: '_scene'
    },
    camera: {
        fov: 75,
        near: 0.1,
        far: 1000,
        position: {
            x: 50, y: 80, z: 50
        },
        controls: {
            enable: true,
            enableDamping: true,
            enablePan: true
        }
    },
    light: [
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
    ],
    shadow: {
        show: true,
        width: 400,
        height: 400,
        color: '#000',
        opacity: 0.1,
        rotation: { x: -Math.PI / 2, y: 0, z: 0 },
    },
    
});

const geometry = new THREE.BoxGeometry(30, 30, 30);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
box.position.set(0,30,0);
box.castShadow = true
instance.scene.add(box);

instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});


