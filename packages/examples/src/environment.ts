import * as AUTO from "three-auto";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GroundedSkybox } from "three/addons/objects/GroundedSkybox.js";

const rgbeLoader = new RGBELoader();
const instance = new AUTO.ThreeAuto();

rgbeLoader.load("/env/rustig_koppie_puresky_1k.hdr", (environmentMap) => {
    environmentMap.colorSpace = THREE.SRGBColorSpace
    environmentMap.mapping = THREE.EquirectangularReflectionMapping
    instance.scene.background = environmentMap
    const skybox = new GroundedSkybox(environmentMap, 15, 70)
    skybox.scale.setScalar(50)
    instance.scene.add(skybox)
});

const env = new AUTO.Environment(instance)
console.log(env.cubeCamera);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 16),
    new THREE.MeshStandardMaterial({ roughness: 0, metalness: 1, color: 0xaaaaaa })
);

const O3D = new THREE.Mesh(
    new THREE.TorusGeometry(12, 0.5),
    new THREE.MeshBasicMaterial({ color: '#fff' })
);

instance.scene.add(sphere);
instance.scene.add(O3D);
instance._camera.position.set(20, 20, 20)
instance._renderer.setClearColor('#000')

instance.time.on("tick", () => {
    O3D.rotation.x = Math.sin(instance.elapsedTime) * 2
});