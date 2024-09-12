---
outline: deep
---

# 什么是auto-three?

three-auto能通过默认配置项快速生成一个Three.js的3D场景, 不需要用户手动声明相机渲染器等基础类.

::: tip
只是想尝试一下？跳到 [快速开始](/docs/getting-started).
:::

---

# Use Cases
- **3D**

three-auto可以帮助你快速构筑你的3D场景和许多酷炫的特效.

::: tip
快速查看 [案例](/docs/getting-started).
:::

- **Charts，DataScreen**

three-auto 支持快速生成3D可视化图表，包括3D的柱状图、曲线、散点、热力图、地图、饼图等常见的图表类型，只要通过配置项就可以定制出你想要的图表类型，这一点参考了[Apache ECharts](https://echarts.apache.org/zh/index.html)的用法。

---

# 开发体验
three-auto本质基于[three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)的api，它内部做了配置项架构，开发人员可以直接使用一段js配置项来快速生成一个3D场景。
- three.js: 基于three.js库，生成场景。
- gsap: 内部的过渡动画都基于gsap动画库，让你的场景动画过渡不那么生硬。
- geo: 支持各种3D可视化图表快速生成。
- postprocessing: 内置了很多后处理特效，让你的页面更加饱含视觉冲击力。
- low-code: 配置了调试模式支持低代码生成。


