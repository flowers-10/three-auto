---
outline: deep
---

# 资源和加载器
资源管理器内置了加载器组件，所以我们一起介绍它们。

[![资源和加载器](https://img.picgo.net/2024/11/07/tutieshi_640x488_4s-2cca6985d59e6169c.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/shadow.ts)


## 资源管理器（Resources）

`Resources` 类用于管理和加载 Three.js 应用程序中的各种资源，如模型、纹理、字体、音频等。它继承自 `EventEmitter` 类，并使用多种加载器（如 `GLTFLoader`、`OBJLoader`、`TextureLoader` 等）来处理不同类型的资源。该类还支持自定义加载进度条(`Loading`)，并在所有资源加载完成后触发 `ready` 事件。

### 构造函数（Constructor）

```typescript 
constructor(sources: SourcesItems[], loadingManager?: LoadingType | THREE.LoadingManager)
```

#### 参数

- **sources** (`SourcesItems[]`): 要加载的资源列表。
- **loadingManager** (`LoadingType | THREE.LoadingManager`, 可选): 自定义加载管理器或加载样式，默认为 `undefined`。


### 方法（Methods）

#### `get getLoaded(): boolean`

**返回值**

- **getLoaded** (`boolean`): 所有资源是否已加载完成。

**功能**

- 返回 `loaded` 是否等于 `toLoad`。

#### `get getProgress(): number`

**返回值**

- **getProgress** (`number`): 加载进度，范围为 `[0, 1]`。

**功能**

- 计算并返回当前加载进度。

### 使用示例

```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const res = new AUTO.Resources([{
  name: "svg",
  type: "TEXTURE",
  path: "./ThreeJs.svg",
  show: false,
},])
console.log(res);
```


## 加载器（Loading）
`CustomLoading` 类用于在 Three.js 应用程序中创建和管理自定义加载进度条。它依赖于 `THREE.LoadingManager` 来处理资源加载，并使用 GSAP 来实现平滑的动画效果。该类还支持多种加载样式，并可以通过配置来选择不同的加载样式。

### 构造函数（Constructor）
**`CustomLoading(type: LoadingType)`**

#### 参数

- **type** (`LoadingType`): 加载样式的类型，默认为 `"default"`。

**功能**

- 调用 `createBar` 方法根据提供的类型创建加载进度条。
- 初始化 DOM 元素。
- 创建 `THREE.LoadingManager` 实例，并绑定加载完成和进度更新的回调函数。
- 设置一个超时函数，在 30 秒后自动调用 `loadedBar` 方法。

### 方法（Methods）

#### createBar(type)
- **type** (`LoadingType`): 加载样式的类型，默认为 `"default"`。

使用 `htmlRender` 方法将加载节点渲染到 `document.body` 中。

#### loadedBar()
当所有资源加载完成后调用。使用 GSAP 设置加载进度条的淡出动画，并在动画完成后移除加载进度条。设置加载进度条的缩放动画。

#### progressBar(type, loaded, total)

- **type** (`LoadingType`): 加载样式的类型，默认为 `"default"`。
- **loaded** (`number`): 已加载的资源数量。
- **total** (`number`): 总资源数量。

计算加载进度。更新加载进度条的百分比文本。如果加载样式为 `"default"`，则更新加载进度条的缩放比例。

#### `dispose()`
移除现有的加载进度条 DOM 元素。

### 使用示例

```javascript
import * as AUTO from "three-auto";

const instance = new AUTO.ThreeAuto();
new AUTO.CustomLoading('circle');
```