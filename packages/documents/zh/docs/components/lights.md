---
outline: deep
---
# 灯光和阴影

灯光组件和阴影组件，灯光和阴影是相辅相成的，所以我们一起介绍它们。

[![阴影和灯光](https://img.picgo.net/2024/11/07/tutieshi_640x295_10s24d588c40e8c6e6d.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/shadow.ts)

## 阴影（Shadow）{#config-resolution}
阴影组件，你可以通过配置项快速生成一个阴影平面。
`Shadow` 类是用于在 Three.js 场景中创建阴影平面的对象。它继承自 `BaseThree` 类，并且依赖于 `ThreeInstance` 和 `ShadowConfig` 接口。`Shadow` 类允许用户通过配置对象来定义阴影的大小、颜色、透明度、旋转角度和位置等属性。

### 构造函数（Constructor）
**`Shadow(config: ShadowConfig, instance: ThreeInstance)`**

#### 参数
- **config** (`ShadowConfig`): 包含阴影属性的配置对象。

     **width** (`number`, 可选, 默认值: `10`): 阴影平面的宽度。

     **height** (`number`, 可选, 默认值: `10`): 阴影平面的高度。

     **color** (`string`, 可选, 默认值: `'#000'`): 阴影的颜色（CSS 格式）。

     **opacity** (`number`, 可选, 默认值: `0.1`): 阴影的透明度（0 到 1 之间）。

     **rotation** (`{ x?: number; y?: number; z?: number; }`, 可选): 阴影平面的旋转角度。

     **position** (`{ x?: number; y?: number; z?: number; }`, 可选): 阴影平面的位置。

- **instance** (`ThreeInstance`): 一个 `ThreeInstance` 实例，用于访问 Three.js 场景、相机和渲染器。

### 使用示例
```javascript
import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto()
const shadowConfig = {
    width: 8,
    height: 6,
    color: '#ff0000',
    opacity: 5,
    rotation: { x: Math.PI / 90, y: 0, z: 0 },
    position: { x: 0.5, y: -1, z: 0 }
};

const shadow = new Shadow(shadowConfig, instance);
```

## 灯光（Light）
灯光组件，你可以通过配置项中的type属性快速生成不同的灯光。

`Light` 类用于在 Three.js 场景中创建和管理多种类型的光源。它继承自 `BaseThree` 类，并且依赖于 `ThreeInstance` 和 `LightItems` 接口。`Light` 类允许用户通过配置数组来定义多个光源，每个光源可以有不同的类型（如点光源、环境光、半球光、方向光和聚光灯），并且可以配置光源的位置、强度、颜色以及其他相关属性。

### 构造函数（Constructor）
`Light(config: LightItems[], instance: ThreeInstance)`

此构造函数创建一个新的`Light`。

#### 参数
- **config** (`LightItems[]`): 包含多个光源配置的对象数组。

  **color** (`string`): 光源的颜色（CSS 格式）。

  **groundColor** (`string`): 半球光的地面颜色（仅对半球光有效）。

  **type** (`string`): 光源类型，可以是 `"point"`, `"ambient"`, `"hemisphere"`, `"directional"`, 或 `"spot"`。

  **intensity** (`number`): 光源的强度。

  **distance** (`number`): 点光源和聚光灯的影响距离。
  
  **angle** (`number`): 聚光灯的角度。

  **penumbra** (`number`): 聚光灯的半影衰减。

  **position** (`{ x: number, y: number, z: number }`): 光源的位置。
  
  **decay** (`number`): 光源的衰减系数。
  
  **target** (`{ x: number, y: number, z: number }`): 光源的目标位置（仅对方向光和聚光灯有效）。
  
  **helper** (`boolean`): 是否启用光源辅助工具。
  
  **shadow** (`object`): 阴影配置对象，包含以下属性：
  
  **mapSizeWidth** (`number`): 阴影贴图的宽度。
  
  **mapSizeHeight** (`number`): 阴影贴图的高度。
  
  **cameraLeft** (`number`): 阴影相机的左侧边界。
  
  **cameraRight** (`number`): 阴影相机的右侧边界。
  
  **cameraTop** (`number`): 阴影相机的顶部边界。
  
  **cameraBottom** (`number`): 阴影相机的底部边界。
  
  **cameraNear** (`number`): 阴影相机的近裁剪面。
  
  **cameraFar** (`number`): 阴影相机的远裁剪面。
  
  **radius** (`number`): 阴影的模糊半径。
  
  **normalBias** (`number`): 阴影的法线偏移。
  
  **bias** (`number`): 阴影的偏移。
  
  **castShadow** (`boolean`): 是否启用投射阴影。

  **helperSize** (`number`): 辅助工具的大小（如果启用了辅助工具）。
- **instance** (`ThreeInstance`): 一个 `ThreeInstance` 实例，用于访问 Three.js 场景、相机和渲染器。

### 属性（attribute）

-  **.light**

获取当前的灯光组。

### 使用示例
```typescript
import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto()

const lightConfigs = [
  {
    type: 'ambient',
    color: 0xffffff,
    intensity: 3,
  },
  {
    type: 'directional',
    color: 0xffaa00,
    intensity: 1,
    position: { x: 5, y: 10, z: 5 },
    target: { x: 0, y: 0.3, z: 0 },
    castShadow: true,
    shadow: {
      mapSizeWidth: 1024,
      mapSizeHeight: 1024,
      cameraLeft: -5,
      cameraRight: 5,
      cameraTop: 5,
      cameraBottom: -5,
      cameraNear: 0.5,
      cameraFar: 500,
      radius: 2,
      normalBias: 0.001,
      bias: 0.001,
    },
    helper: true,
    helperSize: 1,
  },
  // 更多光源配置...
];

const lights = new Light(lightConfigs, instance);
```



