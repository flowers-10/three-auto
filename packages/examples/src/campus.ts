import * as AUTO from 'three-auto';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const app = new AUTO.ThreeAuto(undefined, {
  id: '_scene',
  camera: {
    type: 'PerspectiveCamera', fov: 48, near: 0.5, far: 1000,
    position: { x: 140, y: 160, z: 195 }, lookAt: false,
    controls: { enable: true, enableDamping: true, enablePan: true },
  },
  size: { type: 'window', id: '' },
  renderer: { antialias: true, alpha: false, clearAlpha: 1, clearColor: '#c9dce8' },
});

const scene = app.scene;
scene.background = new THREE.Color('#c9dce8');
scene.fog = new THREE.FogExp2('#c9dce8', 0.0023);
app._renderer.toneMapping = THREE.ACESFilmicToneMapping;
app._renderer.toneMappingExposure = 1.1;
const controls = app.camera.controls;
if (controls) {
  controls.target.set(0, 11, -12);
  controls.minDistance = 70;
  controls.maxDistance = 340;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.update();
}

scene.add(new THREE.HemisphereLight('#e8f5ff', '#738167', 1.15));
const sun = new THREE.DirectionalLight('#fff4dc', 1.6);
sun.position.set(-90, 160, 55);
scene.add(sun);

const status = document.createElement('div');
status.style.cssText = 'position:fixed;top:20px;left:20px;z-index:5;padding:12px 16px;border-radius:10px;background:rgba(20,37,43,.72);color:white;font:14px/1.5 system-ui,sans-serif;pointer-events:none';
status.textContent = '研发园区 · 正在加载场地与建筑…';
document.body.appendChild(status);

const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);

type Building = { file: string; x: number; z: number; height: number; yaw: number };
const buildings: Building[] = [
  { file: 'twin-terrace.glb', x: 0, z: -27, height: 33, yaw: 0 },
  { file: 'rd-building.glb', x: 96, z: -22, height: 16, yaw: 0 },
  { file: 'skyline-tower.glb', x: 37, z: -91, height: 59, yaw: 0 },
];
const officeCopies: Array<[number, number, number]> = [
  [-84, -72, 13], [-51, -74, 12], [-84, -38, 12],
  [-84, 11, 12], [85, 65, 12], [94, 40, 11],
];

async function placeBuilding(building: Building) {
  const gltf = await loader.loadAsync(`/models/campus/${building.file}`);
  const root = gltf.scene;
  const placement = new THREE.Group();
  placement.add(root);
  placement.updateMatrixWorld(true);
  let bounds = new THREE.Box3().setFromObject(placement);
  root.scale.multiplyScalar(building.height / bounds.getSize(new THREE.Vector3()).y);
  placement.rotation.y = building.yaw;
  placement.updateMatrixWorld(true);
  bounds = new THREE.Box3().setFromObject(placement);
  const center = bounds.getCenter(new THREE.Vector3());
  placement.position.set(building.x - center.x, 0.08 - bounds.min.y, building.z - center.z);
  root.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.frustumCulled = true;
      object.castShadow = false;
      object.receiveShadow = false;
    }
  });
  scene.add(placement);
}

async function placeGround() {
  const gltf = await loader.loadAsync('/models/campus/campus-ground.glb');
  scene.add(gltf.scene);
}

async function placeOfficeCopies() {
  const gltf = await loader.loadAsync('/models/campus/rd-building-lod.glb');
  const source = gltf.scene;
  const sourceHeight = new THREE.Box3().setFromObject(source).getSize(new THREE.Vector3()).y;
  for (const [x, z, height] of officeCopies) {
    const copy = source.clone(true);
    copy.scale.setScalar(height / sourceHeight);
    copy.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(copy);
    const center = bounds.getCenter(new THREE.Vector3());
    copy.position.set(x - center.x, 0.08 - bounds.min.y, z - center.z);
    scene.add(copy);
  }
}

Promise.allSettled([
  placeGround(),
  ...buildings.map(placeBuilding),
  placeOfficeCopies(),
]).then((results) => {
  const failures = results.filter((result) => result.status === 'rejected');
  status.textContent = failures.length
    ? `园区部分资产未能加载（${failures.length}），请查看控制台`
    : '研发园区 · 拖拽旋转 · 滚轮缩放';
  for (const result of failures) if (result.status === 'rejected') console.error('园区资产加载失败', result.reason);
});
