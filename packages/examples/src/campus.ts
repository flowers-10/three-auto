import * as AUTO from 'three-auto';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createCampusTraffic, type CampusTraffic } from './campus/traffic';
import { campusBuildings, type BuildingPlacement } from './campus/buildingLayout';
import { createBuildingLabels } from './campus/buildingLabels';
import { createYongchuangPlot } from './campus/yongchuangPlot';
import { yongchuangRoadsideTrees, yongchuangCanopyTrees } from './campus/yongchuangLandscape';
import { createRiversidePlot, riversideRoadsideTrees, riversideCanopyTrees } from './campus/riversidePlot';
import { createSouthwestPlot, southwestRoadsideTrees, southwestCanopyTrees } from './campus/southwestPlot';

const campusViews = {
  entrance: { position: { x: 125, y: 115, z: -235 }, target: { x: 0, y: 17, z: -85 } },
  overview: { position: { x: 180, y: 550, z: -430 }, target: { x: 0, y: 0, z: 0 } },
  towers: { position: { x: 85, y: 80, z: -148 }, target: { x: 0, y: 23, z: -48 } },
  traffic: { position: { x: 12, y: 10, z: -195 }, target: { x: 0, y: 1.2, z: -174.2 } },
  dusk: { position: { x: 185, y: 210, z: 55 }, target: { x: 143, y: 22, z: -94 } },
  riverside: { position: { x: -106, y: 170, z: 35 }, target: { x: -146, y: 4, z: -95 } },
  southwest: { position: { x: -106, y: 185, z: 228 }, target: { x: -146, y: 5, z: 80 } },
};

const app = new AUTO.ThreeAuto(undefined, {
  id: '_scene',
  camera: {
    type: 'PerspectiveCamera', fov: 45, near: 0.5, far: 2000,
    position: { ...campusViews.entrance.position }, lookAt: false,
    controls: { enable: true, enableDamping: true, enablePan: true },
  },
  size: { type: 'window', id: '' },
  renderer: { antialias: true, alpha: false, clearAlpha: 1, clearColor: '#c9dce8' },
});

const scene = app.scene;
scene.background = new THREE.Color('#c9dce8');
const campusFog = new THREE.Fog('#c9dce8', 800, 1500);
scene.fog = campusFog;
app._renderer.toneMapping = THREE.ACESFilmicToneMapping;
app._renderer.toneMappingExposure = 1.1;
const controls = app.camera.controls;
if (controls) {
  const target = campusViews.entrance.target;
  controls.target.set(target.x, target.y, target.z);
  controls.minDistance = 70;
  controls.maxDistance = 900;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.update();
}

const ambientLight = new THREE.HemisphereLight('#e8f5ff', '#738167', 1.15);
scene.add(ambientLight);
const sun = new THREE.DirectionalLight('#fff4dc', 1.6);
sun.position.set(-90, 160, 55);
scene.add(sun);
scene.add(sun.target);
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -270;
sun.shadow.camera.right = 270;
sun.shadow.camera.top = 270;
sun.shadow.camera.bottom = -270;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 450;
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0001;
sun.shadow.normalBias = 0.02;
app._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const pmrem = new THREE.PMREMGenerator(app._renderer);
const roomEnvironment = new RoomEnvironment();
const centerEnvironment = pmrem.fromScene(roomEnvironment).texture;
roomEnvironment.dispose();
pmrem.dispose();
const centerMaterials: THREE.MeshStandardMaterial[] = [];

const status = document.createElement('div');
status.style.cssText = 'position:fixed;top:20px;left:20px;z-index:5;padding:12px 16px;border-radius:10px;background:rgba(20,37,43,.72);color:white;font:14px/1.5 system-ui,sans-serif;pointer-events:none';
status.textContent = '研发园区 · 正在加载场地与建筑…';
document.body.appendChild(status);

type DetailMode = 'auto' | 'detail' | 'light';
let detailMode: DetailMode = 'auto';
const modePanel = document.createElement('div');
modePanel.style.cssText = 'position:fixed;top:20px;right:20px;z-index:6;display:flex;gap:4px;padding:5px;border-radius:10px;background:rgba(20,37,43,.72);font:13px system-ui,sans-serif';
const modeButtons = (['auto', 'detail', 'light'] as const).map((mode) => {
  const button = document.createElement('button');
  button.textContent = { auto: '自动', detail: '精模', light: '轻量' }[mode];
  button.title = { auto: '按距离自动切换建筑模型', detail: '始终显示建筑精模', light: '始终显示建筑轻量版' }[mode];
  button.style.cssText = 'border:0;border-radius:7px;padding:7px 11px;color:white;background:transparent;cursor:pointer';
  button.addEventListener('click', () => {
    detailMode = mode;
    updateDetailLevel();
  });
  modePanel.appendChild(button);
  return button;
});
document.body.appendChild(modePanel);

type VisualSettings = {
  shadows: boolean;
  fog: boolean;
  shadowStrength: number;
  shadowSoftness: number;
  ambient: number;
  sunlight: number;
  exposure: number;
  azimuth: number;
  elevation: number;
  fogNear: number;
  fogFar: number;
  centerMetalness: number;
  centerRoughness: number;
  centerReflection: number;
};
const defaults: VisualSettings = {
  shadows: false,
  fog: true,
  shadowStrength: 0.7,
  shadowSoftness: 1.5,
  ambient: 1.15,
  sunlight: 1.6,
  exposure: 1.1,
  azimuth: 149,
  elevation: 57,
  fogNear: 800,
  fogFar: 1500,
  centerMetalness: 0.25,
  centerRoughness: 0.6,
  centerReflection: 1.35,
};
const sliderSpecs: Array<{ key: Exclude<keyof VisualSettings, 'shadows' | 'fog'>; label: string; min: number; max: number; step: number; unit?: string }> = [
  { key: 'shadowStrength', label: '阴影强度', min: 0, max: 1, step: 0.05 },
  { key: 'shadowSoftness', label: '阴影柔和', min: 0.5, max: 5, step: 0.1 },
  { key: 'ambient', label: '环境亮度', min: 0, max: 3, step: 0.05 },
  { key: 'sunlight', label: '日光亮度', min: 0, max: 4, step: 0.05 },
  { key: 'exposure', label: '整体曝光', min: 0.4, max: 2, step: 0.05 },
  { key: 'azimuth', label: '太阳方位', min: -180, max: 180, step: 1, unit: '°' },
  { key: 'elevation', label: '太阳高度', min: 15, max: 80, step: 1, unit: '°' },
  { key: 'fogNear', label: '雾气起始距离', min: 0, max: 1500, step: 10, unit: ' m' },
  { key: 'fogFar', label: '雾气结束距离', min: 100, max: 2000, step: 10, unit: ' m' },
  { key: 'centerMetalness', label: '金属度', min: 0, max: 1, step: 0.05 },
  { key: 'centerRoughness', label: '粗糙度', min: 0.08, max: 1, step: 0.02 },
  { key: 'centerReflection', label: '反射强度', min: 0, max: 2, step: 0.05 },
];
const visualSettings = { ...defaults };
const storageKey = 'three-auto-campus-visual-settings';
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}') as Partial<VisualSettings>;
  if (typeof saved.shadows === 'boolean') visualSettings.shadows = saved.shadows;
  if (typeof saved.fog === 'boolean') visualSettings.fog = saved.fog;
  for (const spec of sliderSpecs) {
    const value = saved[spec.key];
    if (typeof value === 'number' && Number.isFinite(value)) {
      visualSettings[spec.key] = THREE.MathUtils.clamp(value, spec.min, spec.max);
    }
  }
  // Older fog distances were authored for a ground plane half this size.
  const fogScaleKey = 'three-auto-campus-fog-scale-v2';
  if (!localStorage.getItem(fogScaleKey) && typeof saved.fogFar === 'number') {
    visualSettings.fogNear = defaults.fogNear;
    visualSettings.fogFar = defaults.fogFar;
    localStorage.setItem(storageKey, JSON.stringify({ ...saved, fogNear: defaults.fogNear, fogFar: defaults.fogFar }));
  }
  localStorage.setItem(fogScaleKey, 'done');
  const glassMaterialKey = 'three-auto-campus-glass-material-v1';
  if (!localStorage.getItem(glassMaterialKey)) {
    visualSettings.centerMetalness = defaults.centerMetalness;
    visualSettings.centerRoughness = defaults.centerRoughness;
    visualSettings.centerReflection = defaults.centerReflection;
    localStorage.setItem(storageKey, JSON.stringify(visualSettings));
    localStorage.setItem(glassMaterialKey, 'done');
  }
  visualSettings.fogNear = Math.min(visualSettings.fogNear, visualSettings.fogFar - 50);
} catch { /* Ignore invalid saved settings. */ }

const drawerStyle = document.createElement('style');
drawerStyle.textContent = `
  .campus-visual-drawer{position:fixed;top:72px;right:20px;z-index:6;width:270px;max-width:calc(100vw - 40px);max-height:calc(100vh - 92px);overflow:auto;padding:10px 14px;border-radius:12px;background:rgba(20,37,43,.86);color:#fff;font:13px/1.4 system-ui,sans-serif;box-shadow:0 6px 20px #0003;backdrop-filter:blur(8px)}
  .campus-visual-drawer:not([open]){width:auto}
  .campus-visual-drawer summary{cursor:pointer;font-weight:600;list-style:none;user-select:none}
  .campus-visual-drawer summary::-webkit-details-marker{display:none}
  .campus-visual-drawer summary::after{content:' ▾'}
  .campus-visual-drawer[open] summary::after{content:' ▴'}
  .campus-visual-drawer .setting-row{display:block;margin-top:14px}
  .campus-visual-drawer .setting-heading{display:flex;justify-content:space-between;gap:12px;margin-bottom:5px}
  .campus-visual-drawer .setting-section{margin-top:18px;padding-top:12px;border-top:1px solid #ffffff40;font-weight:600}
  .campus-visual-drawer input[type=range]{width:100%;accent-color:#9bc8df;cursor:pointer}
  .campus-visual-drawer input[type=range]:disabled{opacity:.4;cursor:not-allowed}
  .campus-visual-drawer .setting-toggle{display:flex;align-items:center;gap:9px;margin-top:14px;cursor:pointer}
  .campus-visual-drawer input[type=checkbox]{accent-color:#9bc8df;width:16px;height:16px}
  .campus-visual-drawer button{margin-top:16px;padding:7px 10px;border:1px solid #ffffff60;border-radius:7px;background:transparent;color:#fff;cursor:pointer}
`;
document.head.appendChild(drawerStyle);

const settingsDrawer = document.createElement('details');
settingsDrawer.className = 'campus-visual-drawer';
settingsDrawer.innerHTML = `
  <summary>光影设置</summary>
  <label class="setting-toggle"><input type="checkbox" data-setting="shadows"> 建筑与树木阴影</label>
  ${sliderSpecs.map((spec) => `
    ${spec.key === 'fogNear' ? '<div class="setting-section">雾气</div><label class="setting-toggle"><input type="checkbox" data-setting="fog"> 启用雾气</label>' : ''}
    ${spec.key === 'centerMetalness' ? '<div class="setting-section">中心建筑玻璃幕墙</div>' : ''}
    <label class="setting-row">
      <span class="setting-heading"><span>${spec.label}</span><output data-value="${spec.key}"></output></span>
      <input type="range" aria-label="${spec.label}" data-setting="${spec.key}" min="${spec.min}" max="${spec.max}" step="${spec.step}">
    </label>
  `).join('')}
  <button type="button" data-reset>恢复默认</button>
`;
document.body.appendChild(settingsDrawer);

function applyVisualSettings() {
  campusFog.near = visualSettings.fogNear;
  campusFog.far = visualSettings.fogFar;
  const activeFog = visualSettings.fog ? campusFog : null;
  if (scene.fog !== activeFog) {
    scene.fog = activeFog;
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          material.needsUpdate = true;
        }
      }
    });
  }
  ambientLight.intensity = visualSettings.ambient;
  sun.intensity = visualSettings.sunlight;
  app._renderer.toneMappingExposure = visualSettings.exposure;
  sun.shadow.intensity = visualSettings.shadowStrength;
  sun.shadow.radius = visualSettings.shadowSoftness;
  const azimuth = THREE.MathUtils.degToRad(visualSettings.azimuth);
  const elevation = THREE.MathUtils.degToRad(visualSettings.elevation);
  sun.position.set(
    220 * Math.cos(elevation) * Math.cos(azimuth),
    220 * Math.sin(elevation),
    220 * Math.cos(elevation) * Math.sin(azimuth),
  );
  sun.target.updateMatrixWorld();
  for (const material of centerMaterials) {
    material.metalness = visualSettings.centerMetalness;
    material.roughness = visualSettings.centerRoughness;
    material.envMapIntensity = visualSettings.centerReflection;
  }
  if (app._renderer.shadowMap.enabled !== visualSettings.shadows) {
    app._renderer.shadowMap.enabled = visualSettings.shadows;
    sun.castShadow = visualSettings.shadows;
    app._renderer.shadowMap.needsUpdate = true;
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          material.needsUpdate = true;
        }
      }
    });
  }
}

function refreshSettingsControls() {
  const checkbox = settingsDrawer.querySelector<HTMLInputElement>('[data-setting="shadows"]')!;
  checkbox.checked = visualSettings.shadows;
  settingsDrawer.querySelector<HTMLInputElement>('[data-setting="fog"]')!.checked = visualSettings.fog;
  for (const spec of sliderSpecs) {
    const input = settingsDrawer.querySelector<HTMLInputElement>(`[data-setting="${spec.key}"]`)!;
    input.value = String(visualSettings[spec.key]);
    if (spec.key === 'fogNear' || spec.key === 'fogFar') input.disabled = !visualSettings.fog;
    settingsDrawer.querySelector<HTMLOutputElement>(`[data-value="${spec.key}"]`)!.textContent =
      `${visualSettings[spec.key]}${spec.unit || ''}`;
  }
}

settingsDrawer.querySelector<HTMLInputElement>('[data-setting="shadows"]')!.addEventListener('change', (event) => {
  visualSettings.shadows = (event.currentTarget as HTMLInputElement).checked;
  applyVisualSettings();
  localStorage.setItem(storageKey, JSON.stringify(visualSettings));
});
settingsDrawer.querySelector<HTMLInputElement>('[data-setting="fog"]')!.addEventListener('change', (event) => {
  visualSettings.fog = (event.currentTarget as HTMLInputElement).checked;
  applyVisualSettings();
  refreshSettingsControls();
  localStorage.setItem(storageKey, JSON.stringify(visualSettings));
});
for (const spec of sliderSpecs) {
  settingsDrawer.querySelector<HTMLInputElement>(`[data-setting="${spec.key}"]`)!.addEventListener('input', (event) => {
    visualSettings[spec.key] = Number((event.currentTarget as HTMLInputElement).value);
    if (spec.key === 'fogNear') visualSettings.fogFar = Math.max(visualSettings.fogFar, visualSettings.fogNear + 50);
    if (spec.key === 'fogFar') visualSettings.fogNear = Math.min(visualSettings.fogNear, visualSettings.fogFar - 50);
    applyVisualSettings();
    refreshSettingsControls();
    localStorage.setItem(storageKey, JSON.stringify(visualSettings));
  });
}
settingsDrawer.querySelector<HTMLButtonElement>('[data-reset]')!.addEventListener('click', () => {
  Object.assign(visualSettings, defaults);
  applyVisualSettings();
  refreshSettingsControls();
  localStorage.setItem(storageKey, JSON.stringify(visualSettings));
});
refreshSettingsControls();
applyVisualSettings();

const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
loader.setDRACOLoader(dracoLoader);
const repeatedBuildingScenes = new Map<string, Promise<THREE.Group>>();
const repeatedBuildingFiles = new Set(['smart-park-building-8.glb']);
const centerGlassMaskPromise = new THREE.TextureLoader()
  .loadAsync('/models/campus/twin-terrace-glass-mask.webp')
  .then((texture) => {
    texture.flipY = false;
    texture.anisotropy = Math.min(8, app._renderer.capabilities.getMaxAnisotropy());
    return texture;
  });

type Building = BuildingPlacement;
let traffic: CampusTraffic | null = null;
let followingTraffic = false;
const followMovement = new THREE.Vector3();

function showCampusView(view: keyof typeof campusViews) {
  followingTraffic = view === 'traffic';
  const { position, target } = campusViews[view];
  app._camera.position.set(position.x, position.y, position.z);
  controls?.target.set(target.x, target.y, target.z);
  if (controls) controls.minDistance = followingTraffic ? 10 : 70;
  if (followingTraffic && traffic) {
    const car = traffic.focusPosition;
    app._camera.position.set(car.x + 12, car.y + 9, car.z - 15);
    controls?.target.set(car.x, car.y + 1.2, car.z);
  }
  controls?.update();
}

const viewPanel = document.createElement('div');
viewPanel.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:6;display:flex;gap:6px;padding:5px;border-radius:10px;background:rgba(20,37,43,.72)';
for (const [label, view] of [['箭头视角', 'entrance'], ['园区总览', 'overview'], ['绿峰中心', 'towers'], ['永创智能', 'dusk'], ['临河地块', 'riverside'], ['西南院落', 'southwest'], ['查看车辆', 'traffic']] as const) {
  const button = document.createElement('button');
  button.textContent = label;
  button.style.cssText = 'border:0;border-radius:7px;padding:8px 12px;color:white;background:rgba(255,255,255,.15);font:13px system-ui,sans-serif;cursor:pointer';
  button.addEventListener('click', () => showCampusView(view));
  viewPanel.appendChild(button);
}
document.body.appendChild(viewPanel);
if (new URLSearchParams(location.search).get('focus') === 'twin-glass') showCampusView('towers');
if (new URLSearchParams(location.search).get('focus') === 'traffic') showCampusView('traffic');
if (['dusk-tower', 'yongchuang'].includes(new URLSearchParams(location.search).get('focus') ?? '')) showCampusView('dusk');
if (new URLSearchParams(location.search).get('focus') === 'buildings') showCampusView('overview');
if (new URLSearchParams(location.search).get('focus') === 'riverside') showCampusView('riverside');
if (new URLSearchParams(location.search).get('focus') === 'southwest') showCampusView('southwest');

const buildingLabels = createBuildingLabels(app._camera, campusBuildings, (building) => {
  followingTraffic = false;
  if (building.id === 'dusk-glass') {
    showCampusView('dusk');
    return;
  }
  const distance = Math.max(70, building.height * 2.2);
  app._camera.position.set(building.x + distance * 0.6, building.height * 1.35, building.z - distance);
  controls?.target.set(building.x, building.height * 0.4, building.z);
  if (controls) controls.minDistance = 30;
  controls?.update();
});

async function loadBuilding(building: Building) {
  let source = repeatedBuildingScenes.get(building.file);
  if (!source) {
    const url = building.file.startsWith('/') ? building.file : `/models/campus/${building.file}`;
    source = loader.loadAsync(url).then((gltf) => gltf.scene);
    if (repeatedBuildingFiles.has(building.file)) repeatedBuildingScenes.set(building.file, source);
  }
  const centerGlassMask = building.file.startsWith('twin-terrace') ? await centerGlassMaskPromise : null;
  const loadedRoot = repeatedBuildingFiles.has(building.file) ? (await source).clone(true) : await source;
  const root = building.node ? loadedRoot.getObjectByName(building.node) : loadedRoot;
  if (!root) throw new Error(`Building node not found: ${building.node}`);
  const placement = new THREE.Group();
  placement.add(root);
  placement.updateMatrixWorld(true);
  let bounds = new THREE.Box3().setFromObject(placement);
  root.scale.multiplyScalar(building.height / bounds.getSize(new THREE.Vector3()).y);
  placement.rotation.y = building.yaw;
  placement.updateMatrixWorld(true);
  bounds = new THREE.Box3().setFromObject(placement);
  if (building.width !== undefined) {
    root.scale.x *= building.width / bounds.getSize(new THREE.Vector3()).x;
    placement.updateMatrixWorld(true);
    bounds.setFromObject(placement);
  }
  const center = bounds.getCenter(new THREE.Vector3());
  placement.position.set(building.x - center.x, 0.08 - bounds.min.y, building.z - center.z);
  root.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      if (!building.file.startsWith('twin-terrace')) {
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          if (material instanceof THREE.MeshStandardMaterial) {
            material.envMap = centerEnvironment;
            material.envMapIntensity = 0.8;
          }
        }
      } else if (building.file.startsWith('twin-terrace')) {
        const prepareMaterial = (source: THREE.Material) => {
          if (!(source instanceof THREE.MeshStandardMaterial)) return source;
          const material = new THREE.MeshPhysicalMaterial({
            color: source.color.clone(), map: source.map,
            normalMap: source.normalMap, normalScale: source.normalScale.clone(),
            aoMap: source.aoMap, aoMapIntensity: source.aoMapIntensity,
            side: source.side,
            metalnessMap: centerGlassMask, roughnessMap: centerGlassMask,
            envMap: centerEnvironment,
            metalness: visualSettings.centerMetalness,
            roughness: visualSettings.centerRoughness,
            envMapIntensity: visualSettings.centerReflection,
            clearcoat: 1, clearcoatMap: centerGlassMask, clearcoatRoughness: 0.08,
            ior: 1.5,
          });
          centerMaterials.push(material);
          return material;
        };
        object.material = Array.isArray(object.material)
          ? object.material.map(prepareMaterial) : prepareMaterial(object.material);
      }
      object.frustumCulled = true;
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return placement;
}

type BuildingLOD = {
  name: string;
  base: Building;
  detailFile?: string;
  light: THREE.Group | null;
  detail: THREE.Group | null;
  promise: Promise<void> | null;
  failed: boolean;
  showingDetail: boolean;
  center: THREE.Vector3;
};
const buildingLODs: BuildingLOD[] = campusBuildings.map((building) => ({
  name: building.name, base: building, detailFile: building.detailFile,
  light: null, detail: null, promise: null, failed: false, showingDetail: false,
  center: new THREE.Vector3(building.x, building.height / 2, building.z),
}));
let assetsReady = false;
let assetFailures = 0;
let styledMode: DetailMode | null = null;

function loadDetailBuilding(entry: BuildingLOD) {
  if (!entry.detailFile || entry.promise || entry.detail || entry.failed) return;
  entry.promise = loadBuilding({ ...entry.base, file: entry.detailFile })
    .then((building) => {
      entry.detail = building;
      building.visible = false;
      scene.add(building);
      updateDetailLevel();
    })
    .catch((error) => {
      entry.failed = true;
      console.error(`${entry.name}精模加载失败`, error);
      updateDetailLevel();
    })
    .finally(() => { entry.promise = null; });
}

function updateDetailLevel() {
  for (const entry of buildingLODs) {
    const distance = app._camera.position.distanceTo(entry.center);
    const wantsDetail = detailMode === 'detail' ||
      (detailMode === 'auto' && distance < (entry.showingDetail ? 185 : 155));
    if (detailMode === 'detail' || (detailMode === 'auto' && distance < 225)) loadDetailBuilding(entry);
    entry.showingDetail = wantsDetail && entry.detail !== null;
    if (entry.light) entry.light.visible = !entry.showingDetail;
    if (entry.detail) entry.detail.visible = entry.showingDetail;
  }
  if (styledMode !== detailMode) {
    modeButtons.forEach((button, index) => {
      const active = (['auto', 'detail', 'light'] as const)[index] === detailMode;
      button.style.background = active ? 'rgba(255,255,255,.24)' : 'transparent';
      button.setAttribute('aria-pressed', String(active));
    });
    styledMode = detailMode;
  }

  if (!assetsReady) return;
  const modelStatus = buildingLODs.some((entry) => entry.failed) && detailMode !== 'light'
    ? '精模加载失败，保持轻量版'
    : buildingLODs.some((entry) => entry.promise) && detailMode !== 'light'
      ? '精模加载中'
      : buildingLODs.some((entry) => entry.showingDetail) ? '当前：近景精模' : '当前：轻量版';
  const nextStatus = assetFailures
    ? `园区部分资产未能加载（${assetFailures}） · ${modelStatus}`
    : `研发园区 · ${modelStatus}${traffic ? ` · ${traffic.activeCount} 辆车行驶中` : ''} · 拖拽旋转 · 滚轮缩放`;
  if (status.textContent !== nextStatus) status.textContent = nextStatus;
}

app.time.on('tick', () => {
  traffic?.update(app.time.deltaTime);
  if (followingTraffic && traffic && controls) {
    const car = traffic.focusPosition;
    followMovement.set(car.x - controls.target.x, 0, car.z - controls.target.z);
    app._camera.position.add(followMovement);
    controls.target.set(car.x, car.y + 1.2, car.z);
    controls.update();
  }
  updateDetailLevel();
  buildingLabels.update();
});

async function placeGround() {
  const gltf = await loader.loadAsync('/models/campus/campus-ground.glb');
  gltf.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) object.receiveShadow = true;
  });
  scene.add(gltf.scene);
}

scene.add(createYongchuangPlot());
scene.add(createRiversidePlot());
scene.add(createSouthwestPlot());

// The ground mesh ends at z = 230; leave a clear gap behind its texture.
const peripheralBuildingsPlacement = { x: 70, groundRearZ: 230, gap: 18, scale: 0.13 };

async function placePeripheralBuildings() {
  const gltf = await loader.loadAsync('/models/building-preview/buidling-other.glb');
  const group = new THREE.Group();
  group.name = '周边建筑';
  group.add(gltf.scene);
  group.scale.setScalar(peripheralBuildingsPlacement.scale);
  group.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(group);
  const center = bounds.getCenter(new THREE.Vector3());
  group.position.set(
    peripheralBuildingsPlacement.x - center.x,
    0.08 - bounds.min.y,
    peripheralBuildingsPlacement.groundRearZ + peripheralBuildingsPlacement.gap - bounds.min.z,
  );
  scene.add(group);
}

type TreePlacement = [x: number, z: number, height: number, yaw: number];

async function placeTrees(file: string, positions: TreePlacement[]) {
  const gltf = await loader.loadAsync(`/models/campus/${file}`);
  const source = gltf.scene;
  const meshes: THREE.Mesh[] = [];
  source.traverse((object) => {
    if (object instanceof THREE.Mesh) meshes.push(object);
  });
  const sourceHeight = new THREE.Box3().setFromObject(source).getSize(new THREE.Vector3()).y;
  const batches = meshes.map((mesh) => new THREE.InstancedMesh(mesh.geometry, mesh.material, positions.length));
  const tree = new THREE.Group();
  tree.add(source);
  positions.forEach(([x, z, height, yaw], index) => {
    tree.position.set(0, 0, 0);
    tree.scale.setScalar(height / sourceHeight);
    tree.rotation.y = yaw;
    tree.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(tree);
    const center = bounds.getCenter(new THREE.Vector3());
    tree.position.set(x - center.x, 0.08 - bounds.min.y, z - center.z);
    tree.updateMatrixWorld(true);
    meshes.forEach((mesh, meshIndex) => batches[meshIndex].setMatrixAt(index, mesh.matrixWorld));
  });
  for (const batch of batches) {
    batch.instanceMatrix.needsUpdate = true;
    batch.computeBoundingSphere();
    batch.castShadow = true;
    batch.receiveShadow = true;
    scene.add(batch);
  }
}

const roadsideTrees: TreePlacement[] = [...yongchuangRoadsideTrees, ...riversideRoadsideTrees, ...southwestRoadsideTrees];
const canopyTrees: TreePlacement[] = [...yongchuangCanopyTrees, ...riversideCanopyTrees, ...southwestCanopyTrees];

// Two planted courts between the buildings, with the central entrance walk kept clear.
for (const [row, z] of [-83, -73].entries()) {
  [-49, -40, -31, -22, -13, 13, 22, 31, 40, 49].forEach((x, index) => {
    const position: TreePlacement = [x, z + (index % 2 ? 0.35 : -0.25), 5.6 + ((index + row) % 4) * 0.35, index * 0.83 + row * 0.4];
    if ((index + row) % 4 === 0) {
      position[2] += 0.8;
      roadsideTrees.push(position);
    } else canopyTrees.push(position);
  });
}
[-43, -28, -13, 13, 28, 43].forEach((x, index) => {
  const position: TreePlacement = [x, -78, 4.5 + (index % 3) * 0.4, index * 1.3];
  (index % 2 ? canopyTrees : roadsideTrees).push(position);
});

// Trees follow the occupied plot's side walks, rather than the distant empty plots.
for (const x of [-63, 63]) {
  [-150, -138, -126, -114, -102, -90, -78, -66, -54, -40, -30].forEach((z, index) => {
    const position: TreePlacement = [x, z, 6.8 + (index % 4) * 0.35, index * 0.9 + (x > 0 ? 0.4 : 0)];
    if (index % 3 === 0) {
      position[2] = 6.1 + (index % 2) * 0.6;
      canopyTrees.push(position);
    } else roadsideTrees.push(position);
  });
}
[-50, -39, -28, -17, -8, 8, 17, 28, 39, 50].forEach((x, index) => {
  canopyTrees.push([x, -151, 6.1 + (index % 3) * 0.4, index * 1.1]);
});
// Keep these trees in the courtyard, clear of the widened tower podium.
for (const x of [-55, 55]) {
  [-83, -78, -73].forEach((z, index) => {
    canopyTrees.push([x, z, 6.0 + index * 0.35, index + (x > 0 ? 0.8 : 0)]);
  });
}

Promise.allSettled([
  placeGround(),
  placePeripheralBuildings(),
  ...buildingLODs.map(async (entry) => {
    const building = await loadBuilding(entry.base);
    entry.light = building;
    scene.add(building);
    updateDetailLevel();
  }),
  placeTrees('roadside-tree.glb', roadsideTrees),
  placeTrees('canopy-tree.glb', canopyTrees),
  createCampusTraffic(scene, loader, centerEnvironment).then((result) => {
    traffic = result;
    if (followingTraffic) showCampusView('traffic');
  }),
]).then((results) => {
  assetFailures = results.filter((result) => result.status === 'rejected').length;
  assetsReady = true;
  updateDetailLevel();
  for (const result of results) if (result.status === 'rejected') console.error('园区资产加载失败', result.reason);
});
