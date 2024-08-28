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
Creating an auto-three instance, you need a canvas DOM root node or a virtual DOM node (supported by frameworks like Vue and React) to render the Three.js scene.

`html`
```html
 <canvas class="webgl" id="_scene"></canvas>
 <script type="module" src="./src/main.ts"></script>
```

`js/ts`
```ts
import * as AUTO from "../core";
import * as THREE from "three";
const canvas = document.getElementById('_scene') as HTMLCanvasElement;
const instance = new AUTO.ThreeAuto(canvas);
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

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/flowers-10/three-auto/releases).

## Contribution
Thank you to all the people who already contributed to three-auto!
<!-- readme: contributors -start -->
<!-- readme: contributors -end -->

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
