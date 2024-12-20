---
outline: deep
---
# 饼图（Pie）

## 构造函数（Constructor）
此构造函数创建一个新的Pie。


<div @dblclick="navLink" style="width:100%;height:400px;position:relative;    border-radius: 12px;overflow:hidden;">
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
const instance = new AUTO.ThreeAuto(undefined, {
    size: {
        type: 'parent'
    },
  light: [
    {
      type: "directional",
      color: "#fff",
      intensity: 6,
      distance: 3000,
      helper: false,
      helperSize: 5,
      lightName: "directional-light",
      castShadow: true,
      shadow: {
        mapSizeWidth: 1024,
        mapSizeHeight: 1024,
        cameraLeft: -100,
        cameraTop: 100,
        cameraBottom: -100,
        cameraRight: 100,
        cameraNear: 0.1,
        cameraFar: 1000,
        radius: 100,
        bias: -0.004,
        normalBias: 0.027
      },
      position: {
        x: 0, y: 100, z: 50,
      }
    },
   
  ],
  shadow: {
    show: true,
    width: 400,
    height: 400,
    color: '#000',
    opacity: 0.1,
    rotation:  { x: -Math.PI / 2, y: 0, z: 0 },
  },
  series: [
    {
      type: 'pie',
      name: 'three-auto-pie',
      shadow: true,
      data: [
        { name: '小学', value: 100, color: '#fcc02a' },
        { name: '中学', value: 200, color: '#f16b91' },
        { name: '大学', value: 300, color: '#187bac' },
        { name: '不学', value: 500, color: '#eeeeee' },
      ],
      transparent: true,
      opacity: 1,
      selectedOffset: 10,
      height: 20,
      heightMode: 'flat',
      radius: [50, 60],
      gap: 5,
      eventName: 'click',
      label: {
        show: true,
        distance: 3,
        scale: 1,
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        textStyle: {
          padding: '6px',
          'font-size': '16px',
          color: "#000",
          bold: true,
          'font-weight': 400,
          'font-style': 'normal',
        },
      },
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
      }
    }
  ],
  postprocess: {
    type: 'moebius',
    options: {
      shadow: false,
    }
  }
});


(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 5000;
instance.camera.instance.updateProjectionMatrix()
instance.camera.instance.position.set(100, 100, 100.0);
instance._renderer.setClearColor("#DDEAFB");
instance.onTick(() => {
});
})
</script>


:::tip 注意
双击跳转案例！ ⬆️

配置项详情请见配置项手册。

:::

```typescript
Pie(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。

## 属性（attribute）

### .group: THREE.Group;
饼图的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。
### .config: SeriesConfig;
访问饼图配置项。

