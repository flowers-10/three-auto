---
outline: deep
---

# 什么是auto-three? 

three-auto能通过默认配置项快速生成一个[Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)的3D场景, 不需要用户手动声明[相机](https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera)和[渲染器](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)等基础类。

::: tip
只是想尝试一下？跳到 [快速开始](/docs/getting-started)
:::



## 使用场景 
- **3D**

three-auto可以帮助你快速构筑你的3D场景和许多酷炫的特效。

::: tip
快速查看 [案例](/examples/api-examples)。
:::

- **图表**

three-auto 支持快速生成3D可视化图表，包括3D的柱状图、曲线、散点、热力图、地图、饼图等常见的图表类型，只要通过配置项就可以定制出你想要的图表类型，这一点参考了[Apache ECharts](https://echarts.apache.org/zh/index.html)的用法。


## 开发体验 
three-auto本质基于[Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)的api，它内部做了配置项架构，开发人员可以直接使用一段js配置项来快速生成一个3D场景。
- [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene): 基于three.js库，生成场景。
- [gsap](https://gsap.com/): 内部的过渡动画都基于gsap动画库，让你的场景动画过渡不那么生硬。
- charts: 支持各种3D可视化图表快速生成。
- [postprocessing](https://github.com/pmndrs/postprocessing): 内置了很多后处理特效，让你的页面更加饱含视觉冲击力。
- low-code: 配置了调试模式支持低代码生成。

## 感谢
首先，请允许我对[Bruno Simon](https://github.com/brunosimon)表示谢意。他的[课程](https://threejs-journey.com/)为我打开了新的思考方向,这对我来说意义非凡。

是的，我的灵感来自threejs-journey的[第二十六课](https://threejs-journey.com/lessons/code-structuring-for-bigger-projects)，当我看完课程文档时，我就强烈的想要创造一个仓库来保存这份架构。

我深深地感到，在这个不断进步和发展的领域里，每一份灵感都是一次宝贵的财富积累。而[Bruno Simon](https://github.com/brunosimon)的慷慨分享无疑是我这次项目取得进展的关键所在!


