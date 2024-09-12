---
outline: deep
---

# What is auto-three?

three-auto can quickly generate a Three.js scene through default configuration settings, without requiring users to manually declare basic classes like camera and renderer.

::: tip
Just want to try it out? Skip to the [Quickstart](/en/docs/getting-started).
:::

---

# Use Cases
- **3D**

three-auto can help you quickly build your 3D scene and achieve cool visual effects.

- **Charts，DataScreen**

three-auto 支持快速生成3D可视化图表，包括3D的柱状图、曲线、散点、热力图、地图、饼图等常见的图表类型，只要通过配置项就可以定制出你想要的图表类型，这一点参考了[Apache ECharts](https://echarts.apache.org/zh/index.html)的用法。

---

# 开发体验
three-auto本质基于three.js的api，它内部做了配置项架构，开发人员可以直接使用一段js配置项来快速生成一个3D场景。
- three.js: 基于three.js库，生成场景
- gsap: 内部的过渡动画都基于gsap动画库，让你的场景动画过渡不那么生硬
- geo: 支持各种3D可视化图表快速生成



