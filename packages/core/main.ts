import * as AUTO from "./src/index";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const instance = new AUTO.ThreeAuto();
const environmentMap = textureLoader.load('/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg')
environmentMap.mapping = THREE.EquirectangularReflectionMapping
environmentMap.colorSpace = THREE.SRGBColorSpace
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
  512,
  {
    type: THREE.FloatType
  }
)
instance.scene.environment = cubeRenderTarget.texture
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget)
instance.scene.background = environmentMap

const box = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshStandardMaterial({ roughness: 0, metalness: 1, color: 0xaaaaaa })
);

box.position.x = -2

const O3D = new THREE.Mesh(
  new THREE.TorusGeometry(8, 0.5),
  new THREE.MeshBasicMaterial({ color: 'hotpink' })
);

const group = new THREE.Group();
group.add(box);


instance.scene.add(group);
instance.scene.add(O3D);

instance._renderer.setClearColor('#000')
instance.time.on("tick", () => {
  group.rotation.y += 0.001
  box.visible = false
  cubeCamera.position.copy(box.position)
  cubeCamera.update(instance._renderer, instance.scene)
  box.visible = true
});

