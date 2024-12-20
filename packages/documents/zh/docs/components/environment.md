---
outline: deep
---
# 环境贴图 (Environment)

`Environment` 类用于在 Three.js 场景中创建和管理环境贴图。它通过使用 `THREE.CubeCamera` 来生成动态环境贴图，并将其应用到场景中，通常用于反射效果和全局环境光照。

该类继承自 `BaseThree`，并通过一个 `ThreeInstance` 实例初始化。环境贴图是通过一个立方体相机 (`THREE.CubeCamera`) 生成的，该相机会渲染场景的六个面来生成环境贴图。

:::tip 注意
环境贴图的图像可以用作背景，并且直接在对象上用作反射和照明。以非常逼真的方式照亮整个场景。
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


:::tip 注意
点击图片跳转案例！ ⬆️
:::

## 构造函数（Constructor）

```typescript
Environment(instance: ThreeInstance)
```

此构造函数创建一个新的Environment。

### 参数
- **instance** (`ThreeInstance`):一个 `ThreeInstance` 对象，包含了 Three.js 渲染器、场景等基本设置。


## 方法（Methods）

### update() :void
更新立方体相机以重新渲染环境纹理。这个方法应当在每一帧调用以保持环境映射的实时性。

```typescript
instance.time.on("tick", () => {
    animation.update()
});
```
## 属性（attribute）

### cubeCamera
`THREE.CubeCamera` 实例，用于渲染场景的六个面并生成环境贴图。
访问当前的`cubeCamera`相机。

```typescript
const env = new AUTO.Environment(instance)
console.log(env.cubeCamera);
```


