import * as AUTO from "three-auto";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

const gui = new GUI();
const instance = new AUTO.ThreeAuto(undefined, {
  id: "_scene",
  name: "hello world",
  tipsType: 'css2',
  camera: {
    type: "PerspectiveCamera",
    fov: 60,
    near: 0.1,
    far: 1000,
    position: {
      x: 120, // 100
      y: 60, // 100
      z: 150, // 100
    },
    lookAt: false,
    controls: {
      show: true,
      enableDamping: true,
      enablePan: true,
    },
  },
  size: {
    type: "window",
    id: "",
  },
  renderer: {
    logarithmicDepthBuffer: true,
    antialias: false,
    alpha: false,
    clearAlpha: 0,
    clearColor: "#000",
  },
  loadingType: 'circle',
  resource: [
    {
      name: "preview",
      type: "GLTF",
      path: "./models/preview_opt.glb",
      show: true,
    },
    {
      name: 'env',
      type: 'HDR',
      path: '/env/artist_workshop_1k.f6da9025.hdr'
    }
  ],
  light: [
    // {
    //   type: "directional",
    //   color: "#fff",
    //   intensity: 1,
    //   distance: 300,
    //   helper: false,
    //   helperSize: 5,
    //   lightName: "directional-light",
    //   castShadow: false,
    //   shadow: {
    //     mapSizeWidth: 1024,
    //     mapSizeHeight: 1024,
    //     cameraLeft: -100,
    //     cameraTop: 100,
    //     cameraBottom: -100,
    //     cameraRight: 100,
    //     cameraNear: 0.1,
    //     cameraFar: 500,
    //     radius: 100,
    //     bias: -0.004,
    //     normalBias: 0.027
    //   },
    //   position: {
    //     x: 100, y: 100, z: 100,
    //   }
    // },
  ],

});

// const env = new AUTO.Environment(instance)
instance.resource?.on('ready', () => {
  const preview = instance.resource?.items.get('preview')
  preview.scene.position.x = 170 // 170
  // preview.scene.position.y = -100 
  preview.scene.position.z = 120
  instance.scene.add(preview.scene)
  const env = instance.resource?.items.get('env')
  env.mapping = THREE.EquirectangularReflectionMapping
  instance.scene.environment = env
})

const liftDetail = [
  {
    name: '1号楼',
    x: 41,
    y: 35,
    z: 117
  },
  {
    name: '2号楼',
    x: 41,
    y: 35,
    z: 73
  },
  {
    name: '3号楼',
    x: 41,
    y: 35,
    z: 26
  },
  {
    name: '4号楼',
    x: 41,
    y: 35,
    z: -23
  },
  {
    name: '7号楼',
    x: -24,
    y: 45,
    z: -14
  },
  {
    name: '6号楼',
    x: -24,
    y: 45,
    z: 46
  },
  {
    name: '5号楼',
    x: -20,
    y: 35,
    z: 98
  },
 
  {
    name: '13号楼',
    x: 17,
    y: 95,
    z: -85
  },
  {
    name: '12号楼',
    x: -35,
    y: 95,
    z: -85
  },
  {
    name: '11号楼',
    x: -90,
    y: 95,
    z: -85
  },
  {
    name: '10号楼',
    x: -87,
    y: 95,
    z: -24
  },
  {
    name: '9号楼',
    x: -87,
    y: 95,
    z: 29
  },
  {
    name: '8号楼',
    x: -87,
    y: 95,
    z: 86
  }
]
for (let index = 0; index < liftDetail.length; index++) {
  const item = liftDetail[index]
  const tipDom: HTMLElement = AUTO.htmlRender({ tag: 'div', children: item.name, style: { 'font-size': '16px', background: '#ccc', padding: '10px', 'border-radius': '8px' } })
  const tips = instance.createTips(tipDom)
  tips.position.set(item.x, item.y, item.z)
}


gui.add(instance._camera.position,'x').name('cx')
gui.add(instance._camera.position,'y').name('cy')
gui.add(instance._camera.position,'z').name('cz')
const stats = new Stats()
document.body.appendChild(stats.dom);

instance.onTick(() => {
  // env.update()
  stats.update()
})