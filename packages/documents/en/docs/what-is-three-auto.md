---
outline: deep
---

# What is auto-three? 

Three-auto can quickly generate a [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) 3D scene through default configuration options, without requiring the user to manually declare basic classes such as the [camera](https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera) and [renderer](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer).

::: tip
Just want to try it out? Jump to the [Quick Start](/docs/getting-started).
:::



## Use Cases
- **3D**

three-auto can help you quickly build your 3D scenes and many cool effects.

::: tip
Quickly check out the [examples](/docs/getting-started).
:::

- **Charts，DataScreen**

Three-auto supports the rapid generation of 3D visual charts, including 3D bar charts, curves, scatter plots, heatmaps, maps, pie charts, and other common chart types. You can customize the chart type you want just by using configuration options, which is inspired by the usage of [Apache ECharts](https://echarts.apache.org/zh/index.html).


## Developer Experience
Three-auto is essentially based on the API of [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene). It has an internal configuration architecture that allows developers to quickly generate a 3D scene using a segment of JavaScript configuration options.
- [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene): Based on the Three.js library, generate a scene.
- [gsap](https://gsap.com/): The internal transition animations are based on the GSAP animation library, making your scene transitions smoother and less rigid.
- charts: Supports the quick generation of various 3D visualization charts.
- [postprocessing](https://github.com/pmndrs/postprocessing): Built-in post-processing effects enhance the visual impact of your page.
- low-code: Configured with a debugging mode that supports low-code generation.



