# 快速开始 

## 安装 

### 前置准备 

- [Node.js](https://nodejs.org/) 18 及以上版本。

three-auto 可以使用以下方式安装它：

::: code-group

```sh [npm]
$ npm add -D three-auto
```

```sh [pnpm]
$ pnpm add -D three-auto
```

```sh [yarn]
$ yarn add -D three-auto
```


:::

::: tip 注意

three-auto 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`。

:::

:::tip three.js 作为 peer dependency
如果想使用 three.js 组件或 API 进行自定义的定制开发，还应该明确地将 `three` 安装为 dependency。如果您的项目使用的是`typescript`，还应该安装`@types/three`。
:::

## 引入到项目中

想要创建一个 auto-three 实例时，首先你需要一个 canvas DOM 根节点或一个虚拟 DOM 节点（像 Vue 和 React 这样的框架支持的）来渲染 Three.js 场景。


- `index.html`
```html {10,12}
<canvas class="webgl" id="_scene"></canvas>
<script type="module" src="./main.ts"></script>  
```


:::tip
请给canvas或者canvas的父容器一个宽高，这样才能展示出场景。
:::

- `main.ts`
```ts
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

instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});

```

:::tip
默认情况下，如果canvas的容器id是`_scene`时，我们就不用手动获取DOM元素。
:::


你应该看到一个粉色的立方体在屏幕中央旋转了！
![getting-started.gif](https://github.com/user-attachments/assets/cb5fb291-a50f-4fdd-8a70-b0b2e47473ba)

## 图表模式
上面介绍了如何引入three-auto到项目中，但是显然这还不够，让我看下怎么渲染出一张3D地图吧！

- `main.ts`
```ts
import * as AUTO from "three-auto";
import ZheJiangCity from '../public/ZheJiangCity.json'

// 指定图表的配置项和数据
const instance = new AUTO.ThreeAuto(undefined, {
  id: "_scene",
  name: "Hello three auto",
  camera: {
    type: 'PerspectiveCamera',
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      x: 0,
      y: 0,
      z: 20,
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
    antialias: true,
    alpha: true,
    clearAlpha: 1,
    clearColor: '#000000',
  },
  series: [
    {
      name: "轮廓地图",
      id: 0,
      type: "map",
      castShadow: false,
      receiveShadow: false,
      json: ZheJiangCity,
      itemStyle: {
        depth: 1,
        bevelEnabled: false,
        bevelSegments: 1,
        bevelSize: 0,
        bevelThickness: 0,
        extrudeFaces: {
          material: 'MeshNormalMaterial',
          color: "#ccc",
          opacity: 1,
          metalness: 1,
          roughness: 1,
        },
        crossSection: {
          material: 'MeshNormalMaterial',
          opacity: 0.8,
          color: "#000",
        },
        lineStyle: {
          show: true,
          color: "#A0E5FF",
          width: 2,
        },
        label: {
          show: true,
          distance: 1.3,
          rotation: {
            x: 0,
            y: 0,
            z: 0,
          },
          textStyle: {
            padding: '8px',
            'font-size': '20px',
            color: "#fff",
            bold: true,
            'font-weight': 400,
            'font-style': 'normal',
          },
        },
      },
    },
  
});

// 打印three-auto实例
console.log(instance)

```

:::tip
这样你的第一个图表就诞生了！
:::

![map3D](../../public/map3D.png)