---
outline: deep
---
# 卡通后处理（GTToneMapPass）
`GTToneMapPass` 类是一个自定义的渲染通道，它使用了 `postprocessing` 库中的 `EffectPass` 和自定义的 `GTToneMapEffect` 效果。该类继承自 `CustomPass`，并且依赖于 `ThreeInstance` 以及其他相关依赖。`GTToneMapPass` 用于在 Three.js 场景中应用色调映射效果。

## 着色器（Shader）

[着色器源码](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/components/postprocessing/GTToneMapPass/gttonemap.glsl)

## 构造函数（Constructor）

[[Tone Mapping]()]()

:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。
:::

```typescript
GTToneMapPass(config: GTToneMapEffect, instance: ThreeInstance)
```
构造函数接收两个参数，`config`和`ThreeInstance`实例。


### 参数
- **config** (`GTToneMapEffect`): 配置对象

    **MaxLuminanice** (`number`, 可选, 默认值: `1.0`): 最大亮度。
    **Contrast** (`number`, 可选, 默认值: `1.0`): 对比度。
    **LinearSectionStart** (`number`, 可选, 默认值: `0.22`): 线性部分起始点。
    **LinearSectionLength** (`number`, 可选, 默认值: `0.4`): 线性部分长度。
    **BlackTightnessC** (`number`, 可选, 默认值: `1.33`): 黑色紧致度 C。
    **BlackTightnessB** (`number`, 可选, 默认值: `0.0`): 黑色紧致度 B。
    **Enabled** (`boolean`, 可选, 默认值: `true`): 是否启用效果。

- **instance** (`ThreeInstance`): 一个 `ThreeInstance` 实例，用于访问 Three.js 场景、相机和渲染器。

## 方法（Methods）

### render():void
渲染最终结果，应用 GTToneMapEffect 效果。

### 使用示例
```javascript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const geometry = new THREE.BoxGeometry();
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
const customPass = new AUTO.GTToneMapPass({
  MaxLuminanice: ¼,
  Contrast: ⅓,
  LinearSectionStart: 0.22,
  LinearSectionLength: 0.4,
  BlackTightnessC: 1.33,
  BlackTightnessB: 0.0,
  Enabled: true
}, instance);

instance.time.on("tick", () => {
  customPass.render();
  box.rotation.y += 0.01;
});
```
