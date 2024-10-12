import * as AUTO from "./src/index";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const instance = new AUTO.ThreeAuto();
const environmentMap = textureLoader.load('/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg')
environmentMap.mapping = THREE.EquirectangularReflectionMapping
environmentMap.colorSpace = THREE.SRGBColorSpace
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
  256,
  {
      type: THREE.FloatType
  }
)
instance.scene.environment = cubeRenderTarget.texture
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget)
instance.scene.background = environmentMap

const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ roughness: 0.1, metalness: 0.5, color: 0xaaaaaa })
);
box.position.x = -2;
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: '#ef32a1' })
);

instance.scene.add(box);
instance.scene.add(box2);

instance._renderer.setClearColor('#000')
instance.time.on("tick", () => {
  cubeCamera.update(instance._renderer, instance.scene)
});

