---
outline: deep
---
# 环境贴图 (Environment)

`Environment` 类用于在 Three.js 场景中创建和管理环境贴图。它通过使用 `THREE.CubeCamera` 来生成动态环境贴图，并将其应用到场景中，通常用于反射效果和全局环境光照。

该类继承自 `BaseThree`，并通过一个 `ThreeInstance` 实例初始化。环境贴图是通过一个立方体相机 (`THREE.CubeCamera`) 生成的，该相机会渲染场景的六个面来生成环境贴图。

:::tip 注意
环境贴图的图像可以用作背景，并且直接在对象上用作反射和照明。以非常逼真的方式照亮整个场景。
:::

[![环境贴图](https://img.picgo.net/2024/11/07/environment854deaf1420fe80e.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/environment.ts)

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


