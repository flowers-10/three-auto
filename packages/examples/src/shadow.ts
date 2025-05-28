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


