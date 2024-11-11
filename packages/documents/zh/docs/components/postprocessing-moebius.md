---
outline: deep
---
# 手绘风格后处理（MoebiusPass）
`MoebiusPass` 类是一个自定义的渲染通道，它使用了 `postprocessing` 库中的 `EffectPass` 和自定义的 `MoebiusEffect` 效果。该类继承自 `CustomPass`，并且依赖于 `ThreeInstance` 以及其他相关依赖。`MoebiusPass` 用于在 Three.js 场景中应用莫比乌斯变换效果。

## 着色器（Shader）

[着色器源码](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/components/postprocessing/MoebiusPass/moebius.glsl)

## 构造函数（Constructor）

[![手绘风格]()]()

:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。
:::

```typescript
MoebiusPass(config: MoebiusProps, instance: ThreeInstance)
```
构造函数接收两个参数，`config`和`ThreeInstance`实例。


### 参数
- **config** (`MoebiusProps`): 配置对象

     **noiseTex** (`THREE.Texture`, 可选): 噪声纹理。

     **frequency** (`number`, 可选, 默认值: `0.04`): 频率。

     **amplitude** (`number`, 可选, 默认值: `2`): 幅度。

     **mod** (`number`, 可选, 默认值: `10`): 模数。

     **thickness** (`number`, 可选, 默认值: `1.5`): 厚度。

     **shadow** (`boolean`, 可选, 默认值: `true`): 是否启用阴影.

- **instance** (`ThreeInstance`): 一个 `ThreeInstance` 实例，用于访问 Three.js 场景、相机和渲染器。

## 方法（Methods）

### render():void
渲染深度和法线信息到相应的渲染目标。应用 MoebiusEffect 效果。渲染最终结果。

### 使用示例
```javascript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto()
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
const customPass = new AUTO.MoebiusPass({
  frequency: 0.04,
  amplitude: 2,
  mod:10,
  thickness:1.5
},instance)

instance.time.on("tick", () => {
  customPass.render();
  box.rotation.y = instance.time.elapsedTime;
});

```
