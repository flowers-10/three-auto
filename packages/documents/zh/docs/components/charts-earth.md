---
outline: deep
---

# 地球（Earth）

## 构造函数（Constructor）

此构造函数创建一个新的 Earth。

<div @dblclick="navLink" style="width:100%;height:400px;position:relative;border-radius: 12px;overflow:hidden;">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import ChinaJson from '../../../public/China.json'
import {ref,onMounted} from 'vue'

const navLink = () => {
  console.log(111)
}
onMounted(() => {
    new AUTO.ThreeAuto(undefined, {
  size: {
    type: 'parent',
  },
  series: [
    {
      name: 'three-auto-earth',
      type: 'earth',
      atmosphereDayColor: '#00aaff',
      atmosphereTwilightColor: '#ff6600',
      atmosphereThickness: 1.04,
      rotation: true,
      radius: 20,
    //   json: ChinaJson,
      data: [
        { name: '曼谷', value: 100, color: '#fcc02a', lng: 100.49074172973633,lat: 22 },
        { name: '澳大利亚', value: 200, color: '#f16b91', lng: 133,lat: -23.68477416688374 },
        { name: '新疆维吾尔自治区', value: 300, color: '#187bac', lng: 85,lat: 42 },
        { name: '德黑兰', value: 500, color: '#eeeeee', lng: 51,lat: 35 },
        { name: '美国', value: 1000, color: '#ccc', lng: 241,lat: 34 },
        { name: '英国', value: 400, color: '#000', lng: 359,lat: 51 },
        { name: '巴西', value: 500, color: '#3e1', lng: 668,lat: -9 },
        { name: '西藏', value: 200, color: '#9e2', lng: 91,lat: 29 },
        { name: '广西', value: 100, color: '#cf1', lng: 108,lat: 22 },
        { name: '江西', value: 0, color: '#cf2', lng: 115,lat: 28 },
      ],
    },
  ],
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      z: 50,
    }
  },
  renderer: {
    clearColor: '#000',
    clearAlpha: 1,
  }
});
})
</script>

:::tip 注意
双击跳转案例！ ⬆️

配置项详情请见配置项手册。
:::

```typescript
Earth(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```

构造函数接收两个参数，`option`和`ThreeInstance`实例。

## 属性（attribute）

### .resources: Resources;

渲染地球所需要的静态资源，主要类型是 TEXTURE（图片资源）。

### .earth: THREE.Mesh | null;

地球的网格对象，你可以访问它对它做一些其他处理。

### .group: THREE.Group;

地球的曲线、地图、标注等网格对象，你可以访问它们对它们做一些其他处理。

### .option: EarthOptions;

访问地球配置项。
