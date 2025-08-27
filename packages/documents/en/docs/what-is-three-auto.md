---
outline: deep
---

# What is three-auto? 

three-auto can quickly generate a [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) 3D scene through default configuration options, without requiring users to manually declare basic classes such as [cameras](https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera) and [renderers](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer).

::: tip
Just want to try it out? Jump to [Getting Started](/en/docs/getting-started)
:::

## Use Cases 
- **3D**

three-auto can help you quickly build your 3D scenes and many cool effects.

::: tip
Quickly check out [Examples](/en/examples/api-examples).
:::

- **Charts**

three-auto supports rapid generation of 3D visualization charts, including common chart types such as 3D bar charts, curves, scatter plots, heat maps, maps, pie charts, etc. You can customize the chart type you want just through configuration options, which references the usage of [Apache ECharts](https://echarts.apache.org/en/index.html).

## Development Experience 
three-auto is essentially based on [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) API. It has built-in configuration architecture internally, allowing developers to directly use a piece of JS configuration to quickly generate a 3D scene.
- [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene): Based on the three.js library to generate scenes.
- [gsap](https://gsap.com/): Internal transition animations are all based on the gsap animation library, making your scene animation transitions less rigid.
- charts: Supports rapid generation of various 3D visualization charts.
- [postprocessing](https://github.com/pmndrs/postprocessing): Built-in many post-processing effects to make your pages more visually impactful.
- low-code: Configured debug mode supports low-code generation.

## Acknowledgments
First, please allow me to express my gratitude to [Bruno Simon](https://github.com/brunosimon). His [course](https://threejs-journey.com/) opened up new directions of thinking for me, which is of great significance to me.

Yes, my inspiration comes from [threejs-journey](https://threejs-journey.com/). When I finished reading the course documentation, I had a strong desire to create a repository to preserve this architecture.



