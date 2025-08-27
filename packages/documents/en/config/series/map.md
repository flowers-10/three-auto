---
outline: deep
---

# series-map

`object`
Map series component. Used to configure the type of chart series. It contains various properties of chart series, including chart type, style settings, animation effects, etc.

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
        name: "Contour Map",
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

Map name. This name can help identify and manage multiple map instances.

## series-map.id = 0

`number | string`

Set a unique identifier ID for the map. This can be in numeric or string form, used to distinguish different map instances in complex applications.

## series-map.json

`JSON`
Map geographic `GeoJSON` file. This JSON file records the map's geometric data (`geometry`) and basic geographic information.

:::tip Note
First you need to create a geographic JSON file.

[China Map JSON Files](https://datav.aliyun.com/portal/school/atlas/area_selector)

[World Map JSON Files](https://geojson.io/#map=2/20/0)
:::

## series-map.animation = true

`boolean`

Enable map region animation.

## series-map.animationDuration = 1000

`number`

Map region animation transition time in milliseconds.

## series-map.animationEasing = 'power1.inOut'

`string`

Map region animation easing function.

## series-map.animationDelay = 0

`number`

Animation delay time in milliseconds. When the chart loads, the animation will start after this delay.

## series-map.eventName = 'click'

`number`

Map region animation trigger event.

**Options**

- `click` Click event
- `dblclick` Double-click event
- `mousedown` Mouse button is pressed down.
- `mouseup` Mouse button is released.
- `mousemove` Mouse is moved.
- `mouseover` Mouse moves over an element.
- `mouseout` Mouse moves away from an element.

## series-map.selectedOffset

Offset of the selected item. This configuration is usually used to adjust the visual effect of the selected item.

## series-map.tooltip

`object`

Tooltip settings. When the mouse hovers over a region on the map, a tooltip will pop up to display relevant information.

### series-map.tooltip.show = true

`boolean`

Controls whether to display the tooltip. Currently set to true, i.e., tooltip is enabled.

### series-map.tooltip.className

`string`

Specify a CSS class name for the tooltip for style customization.

### series-map.tooltip.background

`string`

Set the background color of the tooltip.

### series-map.tooltip.borderWidth

`number`

Define the width of the tooltip border in pixels.

### series-map.tooltip.padding

`string`

Set the padding between the tooltip content and border.

### series-map.tooltip.hideDelay

`number`

Set the delay time before the tooltip automatically hides, in milliseconds.

### series-map.tooltip.textStyle

`object`

Define the text style in the tooltip.

#### series-map.tooltip.textStyle['font-size']

`string`

Text font size.

#### series-map.tooltip.textStyle.color

`string`

Text color.

#### series-map.tooltip.textStyle['font-weight']

`number`

Text font weight.

#### series-map.tooltip.textStyle['font-style']

`string`

Text font style.

## series-map.label

`object`

Label settings. Used to customize the label style for each region on the map.

### series-map.label.show

`boolean`

Controls whether to display labels.

### series-map.label.distance

`number`

Defines the distance between the label and its corresponding map region.

### series-map.label.rotation

`object`

Set the rotation angle of the label.

#### series-map.label.rotation.x

`number`

Rotation angle on the X-axis.

#### series-map.label.rotation.y

`number`

Rotation angle on the Y-axis.

#### series-map.label.rotation.z

`number`

Rotation angle on the Z-axis.

### series-map.label.textStyle

`object`

Define the text style of the label.

#### series-map.label.textStyle['font-size']

`string`

Text font size.

#### series-map.label.textStyle.color

`string`

Text color.

#### series-map.label.textStyle['font-weight']

`number`

Text font weight.

#### series-map.label.textStyle['font-style']

`string`

Text font style.

#### series-map.label.textStyle.bold

`boolean`

Whether to bold the text.

## series-map.itemStyle

`object`

Item style settings. Allows customization of the appearance of each item on the map, such as material, color, transparency.

### series-map.itemStyle.depth

`number`

Set the depth of the map.

### series-map.itemStyle.bevelEnabled

`boolean`

Whether to enable bevel effect.

### series-map.itemStyle.bevelSegments

`number`

Number of bevel segments.

### series-map.itemStyle.bevelSize

`number`

Bevel size.

### series-map.itemStyle.bevelThickness

`number`

Bevel thickness.

### series-map.itemStyle.extrudeFaces

`object`

Extruded faces configuration.

#### series-map.itemStyle.extrudeFaces.material

`string`

Material type used for extruded faces.

**Options**

`THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshDepthMaterial | THREE.MeshLambertMaterial | THREE.MeshMatcapMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshToonMaterial`

#### series-map.itemStyle.extrudeFaces.color

`string`

Color of the extruded faces.

#### series-map.itemStyle.extrudeFaces.opacity

`number`

Transparency of the extruded faces.

#### series-map.itemStyle.extrudeFaces.metalness

`number`

Metalness of the extruded faces.

#### series-map.itemStyle.extrudeFaces.roughness

`number`

Roughness of the extruded faces.

### series-map.itemStyle.crossSection

`object`

Cross-section configuration.

#### series-map.itemStyle.crossSection.material = 'MeshNormalMaterial'

`string`

Material type used for cross-section.

**Options**

`THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshDepthMaterial | THREE.MeshLambertMaterial | THREE.MeshMatcapMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshToonMaterial`

#### series-map.itemStyle.crossSection.opacity

`number`

Transparency of the cross-section.

#### series-map.itemStyle.crossSection.color

`string`

Color of the cross-section.

### series-map.itemStyle.lineStyle

`object`

Line style settings.

#### series-map.itemStyle.lineStyle.show

`boolean`

Controls whether to display lines.

#### series-map.itemStyle.lineStyle.color

`string`

Line color.

#### series-map.itemStyle.lineStyle.width

`number`

Line width.