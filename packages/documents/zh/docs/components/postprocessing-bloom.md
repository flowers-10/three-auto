---
outline: deep
---

# 辉光后处理（BloomPass）

`BloomPass` 类是一个自定义的渲染通道，它使用了 `postprocessing` 库中的 `EffectPass` 和的 `BloomEffect` 效果。该类继承自 `CustomPass`，并且依赖于 `ThreeInstance` 以及其他相关依赖。`BloomPass` 用于在 Three.js 场景中应用辉光效果。

## 构造函数（Constructor）


:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。
:::

```typescript
BloomPass(option: BloomEffectOptions, instance: ThreeInstance)
```

构造函数接收两个参数，`option`和`ThreeInstance`实例。

### 参数

- **config** (`MoebiusProps`): 配置对象

  **blendFunction** (`BlendFunction`, 可选, 默认值: 依赖于实现): 指定使用的混合函数。这是一个枚举类型，表示不同的混合模式。

  **luminanceThreshold** (`number`, 可选, 默认值: 依赖于实现): 设置亮度阈值，用于控制哪些区域受效果影响。数值越大，受影响的区域越少。

  **luminanceSmoothing** (`number`, 可选, 默认值: 依赖于实现): 控制亮度平滑的程度。较高的值会导致更平滑的效果。

  **mipmapBlur** (`boolean`, 可选, 默认值: 依赖于实现): 启用或禁用 mipmap 模糊效果。当设置为 `true` 时启用模糊。

  **intensity** (`number`, 可选, 默认值: 依赖于实现): 效果强度。数值越大，效果越强烈。

  **radius** (`number`, 可选, 默认值: 依赖于实现): 效果的作用半径。较大的半径意味着更大的作用范围。

  **levels** (`number`, 可选, 默认值: 依赖于实现): 效果的层次数。更多的层次可以产生更复杂的效果。

  **kernelSize** (`KernelSize`, 可选, 默认值: 依赖于实现): 指定卷积核的大小。这是一个枚举类型，表示不同的核尺寸。

  **resolutionScale** (`number`, 可选, 默认值: 依赖于实现): 设置分辨率缩放比例。数值越小，性能越高但质量可能下降。

  **width** (`number`, 可选, 默认值: 依赖于实现): 设置宽度。通常用于自定义渲染目标的宽度。

  **height** (`number`, 可选, 默认值: 依赖于实现): 设置高度。通常用于自定义渲染目标的高度。

  **resolutionX** (`number`, 可选, 默认值: 依赖于实现): 设置水平方向的分辨率。

  **resolutionY** (`number`, 可选, 默认值: 依赖于实现): 设置垂直方向的分辨率。

- **instance** (`ThreeInstance`): 一个 `ThreeInstance` 实例，用于访问 Three.js 场景、相机和渲染器。

## 方法（Methods）

### render():void

应用辉光效果。渲染最终结果。

### 使用示例

```javascript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
const customPass = new AUTO.BloomPass(
  {
    luminanceThreshold: 0.01,
    mipmapBlur: true,
    intensity: 0.5,
    radius: 0.1,
  },
  instance
);

instance.time.on("tick", () => {
  customPass.render();
  box.rotation.y = instance.time.elapsedTime;
});
```
