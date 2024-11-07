# 动画 Animation

`Animation` 类用于在 Three.js 场景中管理和控制动画。它继承自 `BaseThree` 类，并且依赖于 `ThreeInstance`、`THREE.AnimationClip` 和 `THREE.Object3D`。`Animation` 类允许用户通过提供动画剪辑和根对象来创建和管理动画混合器，并提供了获取动画名称和动作的方法。

[![动画](https://img.picgo.net/2024/11/07/tutieshi_640x304_8sb1d8d4ee586436c5.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/animation.ts)

:::tip 注意
点击图片跳转案例！ ⬆️
:::

## 构造函数（Constructor）
此构造函数创建一个新的`Animation`。

```typescript
Animation(instance: ThreeInstance, clips: THREE.AnimationClip[], root: THREE.Object3D)
```
### 参数
- **instance** (`ThreeInstance`): 一个 `ThreeInstance` 实例，用于访问 Three.js 场景、相机和渲染器。
- **clips** (`THREE.AnimationClip[]`): 一个包含 `THREE.AnimationClip` 对象的数组，表示要加载的动画剪辑。
- **root** (`THREE.Object3D`): 动画的根对象，通常是包含骨骼结构的模型。

构造函数初始化动画混合器 `THREE.AnimationMixer`，并将提供的动画剪辑和根对象保存为实例属性。


## 方法（Methods）

### openSkeletonHelper() :void

- 创建一个 `THREE.SkeletonHelper` 对象，并将其添加到场景中以显示骨骼结构。
- 返回创建的 `THREE.SkeletonHelper` 对象。用于可视化骨骼结构。

### update() :void
更新动画混合器的时间，通常在每一帧渲染时调用。

```typescript
instance.time.on("tick", () => {
    animation.update()
});
```

## 属性（attribute）

### get names()

一个包含所有动画剪辑名称的字符串数组。

```typescript
const animation = new AUTO.Animation(instance,models.animations,models.scene)
console.log(animation.names)
```

### get actions()
一个对象，键是动画剪辑的名称，值是对应的 `THREE.AnimationAction` 对象。

```typescript
const animation = new AUTO.Animation(instance,models.animations,models.scene)
animation.actions[animation.names[0]].play()
```

## 使用示例

```typescript
import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto();
// 假设这是你的模型根对象
const resources = new AUTO.Resources([
  {
    name: "crane",
    type: "GLTF",
    path: "./models/crane_ori.glb",
    show: true,
  },
]);
// 灯光
new AUTO.Light(
  [
    {
      type: "ambient",
      color: "#fff",
      intensity: 1,
      helper: false,
      lightName: "ambient-light",
    },
  ],
  instance
);

// 资源加载完成
resources.on("ready", () => {
  console.log(resources.items.get("crane"));
  const crane = resources.items.get("crane");
  instance.scene.add(crane.scene);
  const animation = new AUTO.Animation(instance,crane.animations,crane.scene)
  // 显示骨骼
  animation.openSkeletonHelper()
  console.log(animation.names,animation.actions);
  // 播放动画   
  animation.actions[animation.names[0]].play()

  // 更新动画
  instance.time.on("tick", () => {
    animation.update()
  });
});
```


## 动作（action）

`action` 函数用于创建一个GSAP动画，该动画将对象从起始位置平滑过渡到目标位置。此函数利用了GSAP（GreenSock Animation Platform）的强大功能来实现动画效果，并允许通过`options`参数自定义动画的行为。

### 参数

- `fromPosition` (`THREE.Vector3`): 3D 对象的起始位置。应该是一个 `Vector3` 对象，表示在 3D 空间中的初始坐标。
  
- `toPosition` (`any`): 动画的目标位置。可以是包含任何有效 GSAP 属性的对象，通常是一个具有目标位置坐标或其他动画参数的对象。

- `options` (`gsap.TweenVars`, 可选): 动画的配置对象。该对象可以包含以下属性：
  
  - `duration` (`number`): 动画的持续时间，单位为秒。默认值为 `1.5`。
  - `ease` (`string`): 动画的缓动函数。默认值为 `"none"`。可以指定多种 GSAP 缓动函数，例如 `"ease-in"`、`"ease-out"` 等。
  - `repeat` (`number`): 动画的重复次数。默认值为 `0`，即不重复。
  - `yoyo` (`boolean`): 是否在动画结束后反向播放（yoyo）。默认值为 `false`。
  - `yoyoEase` (`boolean`): 如果为 `true`，反向动画时会应用缓动函数。默认值为 `true`。

### 返回值

- `gsap.core.Tween`: 返回 GSAP 的动画 `tween` 对象。可以用来进一步控制动画，例如暂停、重启或停止动画。

### 使用示例

```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
AUTO.action(box.rotation,{x:Math.PI})
AUTO.action(crane.scene.position,{x:1,y:1,z:1})

```
