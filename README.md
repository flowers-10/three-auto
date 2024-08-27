<h1 align="center">Welcome to three-auto 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/three-auto" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/three-auto.svg">
  </a>
  <a href="1" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/1" target="_blank">
    <img alt="Twitter: 1" src="https://img.shields.io/twitter/follow/1.svg?style=social" />
  </a>
</p>

> three-auto can quickly generate a Three.js scene through default configuration settings, without requiring users to manually declare basic classes like camera and renderer.

### ✨ [Demo](https://three-auto.vercel.app/)

## Install

```sh
npm install three-auto
```

```sh
yarn add three-auto
```
## Useing
> There must be a canvas DOM root node or a virtual DOM node (supporting Vue and React).
> If the canvas's ID is explicitly declared in the HTML file, there is no need to pass in the canvas node.
> It also supports manually passing in a DOM node to create a Three.js instance.

`html`
```html
 <canvas class="webgl" id="_scene"></canvas>
 <script type="module" src="./src/main.ts"></script>
```

`js/ts`
```ts
import * as AUTO from "../core";
import * as THREE from "three";
const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(400, 400, 400);
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

## Author

👤 **flowers-10**

* Website: 1
* Twitter: [@1](https://twitter.com/1)
* Github: [@flowers-10](https://github.com/flowers-10)

## Show your support

Give a ⭐️ if this project helped you!

## Features
- support proxy config setting
- support customer compose renderer pass
- support generate low code
- support webGPU
- support environment
- support physic
- fix Three.js Reminders caused by inconsistent versions: 'Material: onBeforeRender() has been removed.'

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
