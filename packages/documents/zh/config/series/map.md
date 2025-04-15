---
outline: deep
---

# series-map

`object`
地图系列组件。用于配置图表系列的类型。它包含了图表系列的各种属性，包括图表类型、样式设置、动画效果等。

<div style="width:100%;height:600px;position:relative">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import ZheJiangCity from '../../../public/ZheJiangCity.json'
import {ref,onMounted} from 'vue'

const config =ref({
    id: "_scene",
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
        name: "轮廓地图",
        id: 0,
        type: "map",
        json: ZheJiangCity,
        animation: true,
        animationDuration: 350,
        animationEasing: 'power1.inOut',
        animationDelay: 0,
        selectedOffset: 1.5,
        eventName: 'mousemove',
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
    })

onMounted(() => {
    const instance = new AUTO.ThreeAuto(undefined, config.value);
    instance.time.on("tick", () => {});
})
</script>

## series-map.type = 'map'

`string`

## series-map.name = 'three-auto-map'

`string`

地图名称。这个名称可以帮助识别和管理多个地图实例。

## series-map.id = 0

`number | string`

为地图设定一个唯一的标识符 ID。这可以是数字或字符串形式，用于在复杂应用中区分不同的地图实例。

## series-map.json

`JSON`
地图地理`GeoJSON`文件。这个 JSON 文件记录了地图的几何数据（`geometry`）和基础地理信息。

:::tip 注意
首先你需要制作一个地理 JSON 文件。

[中国地图 JSON 文件](https://datav.aliyun.com/portal/school/atlas/area_selector)

[世界地图 JSON 文件](https://geojson.io/#map=2/20/0)
:::

## series-map.animation = true

`boolean`

开启地图区域动画。

## series-map.animationDuration = 1000

`number`

地图区域动画过度时间单位为毫秒。

## series-map.animationEasing = 'power1.inOut'

`string`

地图区域动画缓动函数。

## series-map.animationDelay = 0

`number`

动画延迟时间，单位为毫秒。在图表加载时，动画将延迟这段时间后开始。

## series-map.eventName = 'click'

`number`

地图区域动画触发事件。

**可选**

- `click` 单击事件
- `dblclick` 双击事件
- `mousedown` 鼠标按钮被按下。
- `mouseup` 鼠标按键被松开。
- `mousemove` 鼠标被移动。
- `mouseover` 鼠标移到某元素之上。
- `mouseout` 鼠标从某元素移开。

## series-map.selectedOffset

选中项的偏移量。这个配置通常用来调整选中项的视觉效果。

## series-map.tooltip

`object`

工具提示框设置。当鼠标悬停在地图上的某个区域时，会弹出一个提示框显示相关信息。

### series-map.tooltip.show = true

`boolean`

控制是否显示工具提示框。当前设置为 true，即开启工具提示。

### series-map.tooltip.className

`string`

给工具提示框指定一个 CSS 类名，以便于样式定制。

### series-map.tooltip.background

`string`

设置工具提示框的背景颜色。

### series-map.tooltip.borderWidth

`string`

设置工具提示框的背景颜色。

### series-map.tooltip.background

`string`

设置工具提示框的背景颜色。

### series-map.tooltip.borderWidth

`number`

定义工具提示框边框的宽度，单位为像素。

### series-map.tooltip.padding

`string`

设置工具提示框内容与边框之间的内边距。

### series-map.tooltip.hideDelay

`number`

设置工具提示框自动隐藏前的延迟时间，单位为毫秒。

### series-map.tooltip.textStyle

`object`

定义工具提示框中文本的样式。

#### series-map.tooltip.textStyle['font-size']

`string`

文本字体大小。

#### series-map.tooltip.textStyle.color

`string`

文本颜色。

#### series-map.tooltip.textStyle['font-weight']

`number`

文本字体粗细。

#### series-map.tooltip.textStyle['font-style']

`string`

文本字体风格。

## series-map.label

`object`

标签设置。用于自定义地图上每个区域的标签样式。

### series-map.label.show

`boolean`

控制是否显示标签。

### series-map.label.distance

`number`

定义标签与对应地图区域之间的距离。

### series-map.label.rotation

`object`

设置标签的旋转角度。

#### series-map.label.rotation.x

`number`

X 轴上的旋转角度。

#### series-map.label.rotation.y

`number`

Y 轴上的旋转角度。

#### series-map.label.rotation.z

`number`

Z 轴上的旋转角度。

### series-map.label.textStyle

`object`

定义标签文本的样式。

#### series-map.label.textStyle['font-size']

`string`

文本字体大小。

#### series-map.label.textStyle.color

`string`

文本颜色。

#### series-map.label.textStyle['font-weight']

`number`

文本字体粗细。

#### series-map.label.textStyle['font-style']

`string`

文本字体风格。

#### series-map.label.textStyle.bold

`boolean`

是否加粗文本。

## series-map.itemStyle

`object`

项目样式设置。允许自定义地图上每个项目的外观，例如材质、颜色、透明度。

### series-map.itemStyle.depth

`number`

设置地图的深度。

### series-map.itemStyle.bevelEnabled

`boolean`

是否启用倒角效果。

### series-map.itemStyle.bevelSegments

`number`

倒角分段数量。

### series-map.itemStyle.bevelSize

`number`

倒角尺寸。

### series-map.itemStyle.bevelThickness

`number`

倒角厚度。

### series-map.itemStyle.extrudeFaces

`object`

挤出面配置项。

#### series-map.itemStyle.extrudeFaces.material

`string`

挤出面使用的材质类型。

**可选**

`THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshDepthMaterial | THREE.MeshLambertMaterial | THREE.MeshMatcapMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshToonMaterial`

#### series-map.itemStyle.extrudeFaces.color

`string`

挤出面的颜色。

#### series-map.itemStyle.extrudeFaces.opacity

`number`

挤出面的透明度。

#### series-map.itemStyle.extrudeFaces.metalness

`number`

挤出面的金属感。

#### series-map.itemStyle.extrudeFaces.roughness

`number`

挤出面的粗糙度。

### series-map.itemStyle.crossSection

`object`

横截面配置项。

#### series-map.itemStyle.crossSection.material = 'MeshNormalMaterial'

`string`

横截面使用的材质类型。

**可选**

`THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshDepthMaterial | THREE.MeshLambertMaterial | THREE.MeshMatcapMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshToonMaterial`

#### series-map.itemStyle.crossSection.opacity

`number`

横截面的透明度。

#### series-map.itemStyle.crossSection.color

`string`

横截面的颜色。

### series-map.itemStyle.lineStyle

`object`

线条样式设置。

#### series-map.itemStyle.lineStyle.show

`boolean`

控制是否显示线条。

#### series-map.itemStyle.lineStyle.color

`string`

线条颜色。

#### series-map.itemStyle.lineStyle.width

`number`

线条宽度。
