# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 and above.

three-auto can be installed using the following methods:

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

::: tip Note

three-auto is an ESM-only package. Do not use `require()` to import it, and make sure your latest `package.json` contains `"type": "module"`.

:::

:::tip three.js as peer dependency
If you want to use three.js components or APIs for custom development, you should also explicitly install `three` as a dependency. If your project uses `typescript`, you should also install `@types/three`.
:::

## Import into Project

First, when you want to create an auto-three instance, you need a canvas DOM root node or a virtual DOM node (supported by frameworks like Vue and React) to render the Three.js scene.

- `index.html`

```html {10,12}
<div style="width:100%;height:600px;position:relative">
  <canvas id="_scene" />
</div>
<script type="module" src="./main.ts"></script>
```

:::tip Note
Please give the canvas or the canvas's parent container a width and height so that the scene can be displayed.
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

:::tip Note
By default, if the canvas container id is `_scene`, we don't need to manually get the DOM element.
:::

You should see a pink cube rotating in the center of the screen!

<div style="width:100%;height:600px;position:relative">
    <canvas id="_scene" />
</div>


## Chart Mode

Above we introduced how to import three-auto into your project, but obviously this is not enough. Let's see how to render a 3D map!

:::tip Note
`import ZheJiangCity from '../public/ZheJiangCity.json'`

First you need to create a geographic JSON file.

[China Map JSON Files](https://datav.aliyun.com/portal/school/atlas/area_selector)

[World Map JSON Files](https://geojson.io/#map=2/20/0)
:::

- `main.ts`

```ts
import * as AUTO from "three-auto";
import ZheJiangCity from '../public/ZheJiangCity.json'

// Specify chart configuration options and data
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
      enable: true,
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
      name: "Outline Map",
      id: 0,
      type: "map",
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

// Print three-auto instance
console.log(instance)

```

:::tip Note
Now your first map chart is born!
:::

<div style="width:100%;height:600px;position:relative">
    <canvas id="_scene2" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import * as THREE from "three";
import ZheJiangCity from '../../public/ZheJiangCity.json'

import {ref,onMounted} from 'vue'

onMounted(() => {
    /* box */ 
    const instance = new AUTO.ThreeAuto(undefined, {
      size: {
        type: 'parent'
      }
    });
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

    /* map */
     const mapInstance = new AUTO.ThreeAuto(undefined, {
    id: "_scene2",
    name: "Hello three auto",
    shadow: {
            show: true,
            width: 100,
            height: 100,
            color: '#000',
            opacity: 0.1,
            // rotation: { x: -Math.PI / 2, y: 0, z: 0 },
    },
    camera: {
        type: 'PerspectiveCamera',
        fov: 75,
        near: 0.1,
        far: 1000,
        position: {
        x: 0,
        y: 0,
        z: 10,
        },
        lookAt: true,
        controls: {
          enable: true,
          enableDamping: true,
          enablePan: true,
        },
    },
    light: [ {
        type: "directional",
        color: "#C8A2CB",
        intensity: 1,
        distance: 300,
        helper: false,
        helperSize: 5,
        lightName: "directional-light",
        castShadow: true,
        shadow: {
            mapSizeWidth: 1024,
            mapSizeHeight: 1024,
            cameraLeft: -10,
            cameraTop: 10,
            cameraBottom: -10,
            cameraRight: 10,
            cameraNear: 0.1,
            cameraFar: 100,
            radius: 100,
            bias: -0.004,
            normalBias: 0.027
        },
        position: {
            x: -20, y: 5, z: 20,
        }
        }],
    size: {
        type: "parent",
    },
    renderer: {
        antialias: true,
        alpha: true,
        clearAlpha: 1,
        clearColor: '#fff',
    },
    series: [
        {
        shadow: true,
        name: "Contour Map",
        id: 0,
        type: "map",
        json: ZheJiangCity,
        animation: true,
        animationDuration: 350,
        animationEasing: 'power1.inOut',
        animationDelay: 0,
        selectedOffset: 1.5,
        eventName: 'click',
        data: [
        ],
        tooltip: {
            className: 'three-auto-tooltip',
            background: 'rgba(255,255,255,1)',
            show: true,
            borderWidth: 1,
            padding: '15px 20px',
            hideDelay: 100,
            textStyle: {
            'font-size': '18px',
            color: "#000000",
            'font-weight': 400,
            'font-style': 'normal',
            },
        },
        label: {
            type: 'css2',
            show: true,
            distance: 1.3,
            rotation: {
            x: 0,
            y: 0,
            z: 0,
            },
            textStyle: {
            padding: '8px',
            'font-size': '16px',
            color: "#000",
            bold: true,
            'font-weight': 400,
            'font-style': 'normal',
            },
        },
        itemStyle: {
            depth: 1,
            bevelEnabled: false,
            bevelSegments: 1,
            bevelSize: 0,
            bevelThickness: 0,
            extrudeFaces: {
            material: 'MeshNormalMaterial',
            color: "red",
            opacity: 1,
            metalness: 1,
            roughness: 1,
            },
            crossSection: {
            material: 'MeshNormalMaterial',
            opacity: 1,
            color: "red",
            },
            lineStyle: {
            show: true,
            color: "#A0E5FF",
            width: 2,
            },
        
        },
        },
    ],
    // postprocess: {
        // type: 'moebius',
    // }
    }); 
})
</script>
