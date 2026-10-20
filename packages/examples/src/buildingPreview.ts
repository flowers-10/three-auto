import * as AUTO from 'three-auto';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import buildingCatalog from './buildingCatalog';

const models = [
  { name: 'EFC 主楼', file: '/models/building-preview/building-main.glb', bytes: 40326592, group: 'Models · 智慧建筑' },
  { name: '周边建筑', file: '/models/building-preview/buidling-other.glb', bytes: 1130960, group: 'Models · 智慧建筑' },
  { name: '智慧厂房', file: '/models/building-preview/factory-building.glb', bytes: 8764272, group: 'Models · 智慧工厂' },
  { name: '智慧园区八号楼', file: '/models/building-preview/smart-park-building-8.glb', bytes: 27011064, group: 'Models · 智慧园区' },
  ...buildingCatalog,
];
type Model = (typeof models)[number];

function extractBuilding(scene: THREE.Group, model: Model): THREE.Object3D {
  if (!('node' in model)) return scene;
  scene.updateMatrixWorld(true);
  const part = scene.getObjectByName(model.node);
  if (!part) throw new Error(`模型中找不到建筑节点：${model.node}`);
  const transform = part.matrixWorld.clone();
  part.removeFromParent();
  transform.decompose(part.position, part.quaternion, part.scale);
  return part;
}

function disposeBuilding(object: THREE.Object3D) {
  object.traverse((item) => {
    if (!(item instanceof THREE.Mesh)) return;
    item.geometry.dispose();
    for (const material of Array.isArray(item.material) ? item.material : [item.material]) {
      for (const value of Object.values(material)) if (value instanceof THREE.Texture) value.dispose();
      material.dispose();
    }
  });
}

const app = new AUTO.ThreeAuto(undefined, {
  id: '_scene',
  camera: {
    type: 'PerspectiveCamera', fov: 45, near: 0.01, far: 100000,
    position: { x: 8, y: 6, z: 10 }, lookAt: false,
    controls: { enable: true, enableDamping: true, enablePan: true },
  },
  size: { type: 'window', id: '' },
  renderer: { antialias: true, alpha: false, clearAlpha: 1, clearColor: '#dce7ee' },
});

app.scene.background = new THREE.Color('#dce7ee');
app._renderer.toneMapping = THREE.ACESFilmicToneMapping;
app._renderer.toneMappingExposure = 1.3;
app.scene.add(new THREE.HemisphereLight('#ffffff', '#8a9aa5', 2.3));
const sun = new THREE.DirectionalLight('#ffffff', 2.2);
sun.position.set(1, 2, 3);
app.scene.add(sun);

const draco = new DRACOLoader();
draco.setDecoderPath('/draco/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

const panel = document.createElement('div');
panel.style.cssText = 'position:fixed;top:20px;left:20px;z-index:8;max-width:min(420px,calc(100vw - 40px));padding:14px 18px;border-radius:12px;background:rgba(16,34,45,.82);color:white;font:14px/1.5 system-ui,sans-serif;box-shadow:0 8px 24px #172e3340';
const title = document.createElement('strong');
title.style.cssText = 'display:block;font-size:17px;margin-bottom:4px';
const status = document.createElement('div');
const details = document.createElement('div');
details.style.cssText = 'margin-top:8px;color:#d6e7ef;font-variant-numeric:tabular-nums;white-space:pre-line';
const controls = document.createElement('div');
controls.style.cssText = 'display:flex;gap:8px;margin-top:12px';
const previous = document.createElement('button');
const next = document.createElement('button');
const galleryButton = document.createElement('button');
for (const button of [previous, next, galleryButton]) {
  button.style.cssText = 'border:0;border-radius:7px;padding:7px 12px;background:#e6f4fa;color:#163343;cursor:pointer;font:inherit';
  controls.appendChild(button);
}
previous.textContent = '上一个';
next.textContent = '下一个';
galleryButton.textContent = '全部建筑';
panel.append(title, status, details, controls);
document.body.appendChild(panel);

const gallery = document.createElement('section');
gallery.style.cssText = 'position:fixed;inset:0;z-index:12;overflow:auto;padding:24px;background:#e3edf2;color:#183240;font:14px/1.5 system-ui,sans-serif';
gallery.hidden = true;
const galleryTitle = document.createElement('h1');
galleryTitle.style.cssText = 'font-size:24px;margin:0 0 4px';
galleryTitle.textContent = `建筑模型总览 · ${models.length} 个`;
const galleryStatus = document.createElement('p');
galleryStatus.style.cssText = 'margin:0 0 18px;color:#56717e';
galleryStatus.textContent = '正在生成模型缩略图…';
const grid = document.createElement('div');
grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;padding-bottom:24px';
gallery.append(galleryTitle, galleryStatus, grid);
document.body.appendChild(gallery);

const cards = models.map((model, modelIndex) => {
  const card = document.createElement('button');
  card.style.cssText = 'display:block;width:100%;overflow:hidden;text-align:left;border:1px solid #c7d6dd;border-radius:12px;padding:0;background:#fff;color:#183240;cursor:pointer;box-shadow:0 3px 12px #1b3d4d14';
  const image = document.createElement('img');
  image.alt = model.name;
  image.style.cssText = 'display:block;width:100%;height:155px;object-fit:contain;background:#dce7ee';
  const caption = document.createElement('div');
  caption.style.cssText = 'padding:10px 12px';
  const name = document.createElement('strong');
  name.style.cssText = 'display:block;font-size:15px';
  name.textContent = model.name;
  const meta = document.createElement('span');
  meta.style.cssText = 'display:block;color:#657e89;font-size:12px';
  meta.textContent = `${model.group} · ${(model.bytes / 1048576).toFixed(1)} MiB`;
  const state = document.createElement('span');
  state.style.cssText = 'display:block;color:#657e89;font-size:12px';
  state.textContent = '等待生成预览';
  caption.append(name, meta, state);
  card.append(image, caption);
  card.addEventListener('click', () => showModel(modelIndex));
  grid.appendChild(card);
  return { image, state };
});

let current: THREE.Object3D | undefined;
let loadId = 0;
let index = Number(new URLSearchParams(location.search).get('model')) || 0;
index = Math.max(0, Math.min(models.length - 1, index));

function showModel(nextIndex: number) {
  gallery.hidden = true;
  index = nextIndex;
  const model = models[index];
  const url = new URL(location.href);
  url.searchParams.set('model', String(index));
  url.searchParams.delete('gallery');
  history.replaceState(null, '', url);
  title.textContent = `${index + 1} / ${models.length} · ${model.name}`;
  status.textContent = '正在加载模型…';
  details.textContent = '';
  previous.disabled = index === 0;
  next.disabled = index === models.length - 1;
  previous.style.opacity = previous.disabled ? '.45' : '1';
  next.style.opacity = next.disabled ? '.45' : '1';
  const requestId = ++loadId;

  loader.load(model.file, (gltf) => {
    if (requestId !== loadId) return;
    if (current) {
      app.scene.remove(current);
      disposeBuilding(current);
    }
    try {
      current = extractBuilding(gltf.scene, model);
    } catch (error) {
      status.textContent = `建筑节点提取失败：${model.name}`;
      console.error(error);
      return;
    }
    app.scene.add(current);
    const bounds = new THREE.Box3().setFromObject(current);
    if (bounds.isEmpty()) {
      status.textContent = '模型没有可显示的几何体';
      return;
    }
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    let meshCount = 0;
    let triangleCount = 0;
    current.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      meshCount += 1;
      const geometry = object.geometry;
      const count = geometry.index?.count ?? geometry.getAttribute('position')?.count ?? 0;
      triangleCount += Math.floor(count / 3);
    });
    const dimension = (value: number) => value.toLocaleString('zh-CN', { maximumFractionDigits: 2 });
    details.textContent = [
      `文件大小：${(model.bytes / 1048576).toFixed(2)} MiB`,
      `范围：X ${dimension(size.x)} × Y ${dimension(size.y)} × Z ${dimension(size.z)}`,
      `网格：${meshCount.toLocaleString('zh-CN')} · 三角面：${triangleCount.toLocaleString('zh-CN')}`,
      '尺寸为模型原始坐标单位，未确认实际米制比例',
    ].join('\n');
    const radius = Math.max(size.length() / 2, 0.01);
    const camera = app.camera.instance as THREE.PerspectiveCamera;
    const fov = THREE.MathUtils.degToRad(camera.fov);
    const distance = radius / Math.sin(fov / 2) * 1.35;
    camera.position.copy(center).add(new THREE.Vector3(distance * .65, distance * .4, distance * .8));
    camera.near = Math.max(distance / 1000, 0.001);
    camera.far = distance * 20;
    camera.updateProjectionMatrix();
    if (app.camera.controls) {
      app.camera.controls.target.copy(center);
      app.camera.controls.minDistance = radius * .15;
      app.camera.controls.maxDistance = distance * 8;
      app.camera.controls.update();
    }
    status.textContent = `${model.file.split('/').pop()} · 拖动旋转，滚轮缩放`;
  }, (event) => {
    if (requestId === loadId && event.total) {
      status.textContent = `正在加载模型… ${Math.round(event.loaded / event.total * 100)}%`;
    }
  }, (error) => {
    if (requestId === loadId) {
      status.textContent = `加载失败：${model.name}`;
      console.error(error);
    }
  });
}

previous.addEventListener('click', () => showModel(index - 1));
next.addEventListener('click', () => showModel(index + 1));
galleryButton.addEventListener('click', showGallery);

let galleryStarted = false;
function showGallery() {
  loadId += 1;
  if (current) {
    app.scene.remove(current);
    disposeBuilding(current);
    current = undefined;
  }
  gallery.hidden = false;
  const url = new URL(location.href);
  url.searchParams.delete('model');
  url.searchParams.set('gallery', '1');
  history.replaceState(null, '', url);
  if (!galleryStarted) {
    galleryStarted = true;
    void populateGallery();
  }
}

async function populateGallery() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(440, 310);
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  let completed = 0;
  let failed = 0;
  for (const [modelIndex, model] of models.entries()) {
    const card = cards[modelIndex];
    card.state.textContent = '正在加载…';
    let object: THREE.Object3D | undefined;
    try {
      const gltf = await loader.loadAsync(model.file);
      object = extractBuilding(gltf.scene, model);
      const bounds = new THREE.Box3().setFromObject(object);
      if (bounds.isEmpty()) throw new Error('模型没有可显示的几何体');
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#dce7ee');
      scene.add(new THREE.HemisphereLight('#ffffff', '#8a9aa5', 2.4));
      const light = new THREE.DirectionalLight('#ffffff', 2.1);
      light.position.set(1, 2, 3);
      scene.add(light, object);
      const center = bounds.getCenter(new THREE.Vector3());
      const size = bounds.getSize(new THREE.Vector3());
      const radius = Math.max(size.length() / 2, 0.01);
      const camera = new THREE.PerspectiveCamera(45, 440 / 310, radius / 1000, radius * 30);
      const distance = radius / Math.sin(THREE.MathUtils.degToRad(45) / 2) * 1.3;
      camera.position.copy(center).add(new THREE.Vector3(distance * 0.65, distance * 0.4, distance * 0.8));
      camera.lookAt(center);
      renderer.render(scene, camera);
      card.image.src = renderer.domElement.toDataURL('image/jpeg', 0.82);
      card.state.textContent = '点击查看 3D';
    } catch (error) {
      failed += 1;
      card.state.textContent = '预览生成失败，点击可重试';
      console.error(`建筑预览失败：${model.name}`, error);
    } finally {
      if (object) disposeBuilding(object);
      completed += 1;
      galleryStatus.textContent = `已生成 ${completed} / ${models.length} 个缩略图${failed ? ` · ${failed} 个失败` : ''} · 点击任意建筑查看可旋转模型`;
    }
  }
  renderer.dispose();
}

if (new URLSearchParams(location.search).has('model')) showModel(index);
else showGallery();
