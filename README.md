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

### ✨ <a href="https://three-auto.vercel.app/" target="_blank">Demo</a> | 📖 <a href="https://flowers-10.github.io/three-auto/" target="_blank">Documents</a>

## Install

```sh
npm install three-auto
```

```sh
yarn add three-auto
```
## Using
Creating an auto-three instance, you need a canvas DOM root node or a virtual DOM node (supported by frameworks like Vue and React) to render the Three.js scene.

`html`
```html
 <canvas class="webgl" id="_scene"></canvas>
 <script type="module" src="./src/main.ts"></script>
```

`js/ts`
```ts
import * as AUTO from "three-auto";
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
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/flowers-10">
                    <img src="https://private-avatars.githubusercontent.com/u/94791181?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2ODIyMDAsIm5iZiI6MTczNDY4MTAwMCwicGF0aCI6Ii91Lzk0NzkxMTgxIn0.iHY8052dULi5m1PcNty0bxzo69Gs29HNEXctQ006FRs&v=4" width="100;" alt="flowers-10"/>
                    <br />
                    <sub><b>Michela</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/KallkaGo">
                    <img src="https://private-avatars.githubusercontent.com/u/82202033?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2ODIwODAsIm5iZiI6MTczNDY4MDg4MCwicGF0aCI6Ii91LzgyMjAyMDMzIn0.kjqBy76J_eIBEaUo_9J77d6W7C7kozCEFbHCo7DxYo8&v=4" width="100;" alt="KallkaGo"/>
                    <br />
                    <sub><b>More</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/coderhyh">
                    <img src="https://private-avatars.githubusercontent.com/u/84608497?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2ODE3MjAsIm5iZiI6MTczNDY4MDUyMCwicGF0aCI6Ii91Lzg0NjA4NDk3In0.Go8iNHlnQYoXUlXjFOMbvfuFWSiEADr0AUfQcecsfDg&v=4" width="100;" alt="coderhyh"/>
                    <br />
                    <sub><b>coderhyh</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

## Show your support

Give a ⭐️ if this project helped you!

## Features
- support axis helpers 
- support generate low code
- support webGPU
- support physic
- support auto uniforms
- add edit packages (like gui)
- add more chart types(Curve ✅\Bar\Pie  ✅\map  ✅\Scatter\Radar\Heatmap\Graph)

- support environment ✅
- optimize picture sizes ✅
- support customer compose renderer pass ✅
- support animationMixer ✅ （Skeleton） ✅
- support CSS2DRenderer ✅ and CSS3DRenderer ✅
- support tooltip andd tips ✅ 
- support shadow ✅ 
- preferences Raycaster  ✅
- add documentation packages  ✅

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
