import * as AUTO from "three-auto";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";

const instance = new AUTO.ThreeAuto(undefined, {
  id: "_scene",
  name: "hello world",
  camera: {
    type: "PerspectiveCamera",
    fov: 60,
    near: 0.1,
    far: 1000,
    position: {
      x: 100,
      y: 100,
      z: 100,
    },
    lookAt: true,
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
    logarithmicDepthBuffer:true,
    antialias: false,
    alpha: true,
    clearAlpha: 1,
    clearColor: "#fff",
  },
  loadingType: 'circle',
  resource: [
    {
      name: "preview",
      type: "GLTF",
      path: "./models/preview.glb",
      show: true,
    },
    {
      name: 'env',
      type: 'HDR',
      path: '/env/footprint_court_2k.65b82a2f.hdr'
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

const env = new AUTO.Environment(instance)
instance.resource?.on('ready', () => {
  const preview = instance.resource?.items.get('preview')
  preview.scene.position.x = 130
  preview.scene.position.y = -100
  instance.scene.add(preview.scene)
  const environmentMap = instance.resource?.items.get('env')
  environmentMap.colorSpace = THREE.SRGBColorSpace
  environmentMap.mapping = THREE.EquirectangularReflectionMapping
})
// gui.add(instance.light,)


const stats =new Stats()
document.body.appendChild( stats.dom );

instance.onTick(() => {
  env.update()
  stats.update()
})