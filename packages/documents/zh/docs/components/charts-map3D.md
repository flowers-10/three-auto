---
outline: deep
---
# 地图（Map3D）

## 构造函数（Constructor）
此构造函数创建一个新的Map3D。

<div style="width:100%;height:400px;position:relative;border-radius: 12px;overflow:hidden;">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import * as THREE from "three";
import ZheJiangCity from '../../../public/ZheJiangCity.json'

import {ref,onMounted} from 'vue'

onMounted(() => {
     const mapInstance = new AUTO.ThreeAuto(undefined, {
    id: "_scene",
    name: "Hello three auto",
    shadow: {
            show: true,
            width: 100,
            height: 100,
            color: '#000',
            opacity: 0.4,
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
        show: true,
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
            x: -20, y: 30, z: 20,
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
        name: "轮廓地图",
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
            distance: .8,
            rotation: {
            x: 0,
            y: 0,
            z: 0,
            },
            textStyle: {
            padding: '8px',
            'font-size': '12px',
            color: "#000",
            bold: true,
            'font-weight': 400,
            'font-style': 'normal',
            },
        },
        itemStyle: {
            depth: 0.5,
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


:::tip 注意
双击跳转案例！ ⬆️

配置项详情请见配置项手册。

:::

```typescript
Map3D(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。


## 属性（attribute）

### .group: THREE.Group;
地图的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。
### .config: SeriesConfig;
访问地图配置项。
