---
outline: deep
---
# Environment

The `Environment` class is used to create and manage environment maps in Three.js scenes. It generates dynamic environment maps using `THREE.CubeCamera` and applies them to the scene, typically used for reflection effects and global ambient lighting.

This class inherits from `BaseThree` and is initialized through a `ThreeInstance` instance. Environment maps are generated through a cube camera (`THREE.CubeCamera`) that renders six faces of the scene to create the environment map.

:::tip Note
Environment map images can be used as backgrounds and directly on objects for reflections and lighting. They illuminate the entire scene in a very realistic way.
:::

<div @dblclick="navLink" style="width:100%;height:400px;position:relative;border-radius: 12px;overflow:hidden;">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GroundedSkybox } from "three/addons/objects/GroundedSkybox.js";
import {ref,onMounted} from 'vue'

const navLink = () => {
  console.log(111)
}
onMounted(() => {
const rgbeLoader = new RGBELoader();
const instance = new AUTO.ThreeAuto(undefined, {
  size: {type: 'parent'},});

rgbeLoader.load("/three-auto/env/rustig_koppie_puresky_1k.hdr", (environmentMap) => {
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
    env.update();
});
})
</script>


:::tip Note
Click the image to jump to the example! ⬆️
:::

## Constructor

```typescript
Environment(instance: ThreeInstance)
```

This constructor creates a new Environment.

### Parameters
- **instance** (`ThreeInstance`): A `ThreeInstance` object containing basic Three.js renderer, scene, and other settings.


## Methods

### update() :void
Updates the cube camera to re-render the environment texture. This method should be called every frame to maintain real-time environment mapping.

```typescript
instance.time.on("tick", () => {
    animation.update()
});
```
## Properties

### cubeCamera
`THREE.CubeCamera` instance used to render six faces of the scene and generate environment maps.
Access the current `cubeCamera` camera.

```typescript
const env = new AUTO.Environment(instance)
console.log(env.cubeCamera);
```