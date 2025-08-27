---
outline: deep
---
# Lights and Shadows

Lights and shadows components. Lights and shadows complement each other, so we introduce them together.

<div @dblclick="navLink" style="width:100%;height:400px;position:relative;border-radius: 12px;overflow:hidden;">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import * as THREE from "three";
import {ref,onMounted} from 'vue'

const navLink = () => {
  console.log(111)
}
onMounted(() => {
const geometry = new THREE.BoxGeometry(100, 10, 100);
const material = new THREE.MeshPhongMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
box.castShadow = true;
box.position.set(0, 30, 0);

const instance = new AUTO.ThreeAuto(undefined, {
  size: {
    type: 'parent'
  },
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      x: 50, y: 220, z: 50
    }
  },
  renderer: {
    clearColor: '#ccc'
  },
  shadow: {
    show: true,
    width: 1000,
    height: 1000,
    color: '#000',
    opacity: 0.1,
    rotation: { x: -Math.PI / 2, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
  },
  light: [
    {
      type: "hemisphere",
      color: "#3e99e5",
      intensity: 1,
      groundColor: '#fff',
      distance: 1000,
      helper: true,
      helperSize: 5,
      lightName: "hemisphere-light",
      position: {
        x: 0,
        y: 50,
        z: -50,
      },
    },
    {
      type: "point",
      color: "#3e99e5",
      intensity: 1000,
      distance: 1000,
      helper: true,
      helperSize: 5,
      lightName: "point-light",
      position: {
        x: 0,
        y: 50,
        z: 50,
      },
    },
    {
      type: "spot",
      color: "#C8A2CB",
      intensity: 1,
      distance: 3000,
      angle: Math.PI / 20,
      decay: 1,
      penumbra: 5,
      helper: true,
      helperSize: 5,
      lightName: "spot-light",
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
        radius: 10,
      },
      position: {
        x: -150, y: 50, z: 0,
      }
    },
    {
      type: "directional",
      color: "#C8A2CB",
      intensity: 1,
      distance: 3000,
      helper: true,
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
    {
      type: "ambient",
      color: "#3e99e5",
      intensity: 1,
      lightName: "ambient-light",
    },
  ],

});
instance.scene.add(box);

instance.time.on("tick", () => {
  box.rotation.y = instance.time.elapsedTime;
});
})
</script>


## Shadow {#config-resolution}
Shadow component allows you to quickly generate a shadow plane through configuration options.
The `Shadow` class is used to create shadow planes in Three.js scenes. It inherits from the `BaseThree` class and depends on `ThreeInstance` and the `ShadowConfig` interface. The `Shadow` class allows users to define shadow properties such as size, color, opacity, rotation angle, and position through a configuration object.

### Constructor
**`Shadow(config: ShadowConfig, instance: ThreeInstance)`**

#### Parameters
- **config** (`ShadowConfig`): Configuration object containing shadow properties.

     **width** (`number`, optional, default: `10`): Width of the shadow plane.

     **height** (`number`, optional, default: `10`): Height of the shadow plane.

     **color** (`string`, optional, default: `'#000'`): Shadow color (CSS format).

     **opacity** (`number`, optional, default: `0.1`): Shadow opacity (between 0 and 1).

     **rotation** (`{ x?: number; y?: number; z?: number; }`, optional): Rotation angles of the shadow plane.

     **position** (`{ x?: number; y?: number; z?: number; }`, optional): Position of the shadow plane.

- **instance** (`ThreeInstance`): A `ThreeInstance` instance used to access Three.js scene, camera, and renderer.

### Usage Example
```javascript
import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto()
const shadowConfig = {
    width: 8,
    height: 6,
    color: '#ff0000',
    opacity: 5,
    rotation: { x: Math.PI / 90, y: 0, z: 0 },
    position: { x: 0.5, y: -1, z: 0 }
};

const shadow = new Shadow(shadowConfig, instance);
```

## Light
Light component allows you to quickly generate different types of lights through the type property in configuration options.

The `Light` class is used to create and manage various types of light sources in Three.js scenes. It inherits from the `BaseThree` class and depends on `ThreeInstance` and the `LightItems` interface. The `Light` class allows users to define multiple light sources through a configuration array, where each light source can have different types (such as point light, ambient light, hemisphere light, directional light, and spotlight), and can configure the light's position, intensity, color, and other related properties.

### Constructor
`Light(config: LightItems[], instance: ThreeInstance)`

This constructor creates a new `Light`.

#### Parameters
- **config** (`LightItems[]`): Array of objects containing multiple light source configurations.

  **color** (`string`): Light color (CSS format).

  **groundColor** (`string`): Ground color for hemisphere light (only valid for hemisphere light).

  **type** (`string`): Light type, can be `"point"`, `"ambient"`, `"hemisphere"`, `"directional"`, or `"spot"`.

  **intensity** (`number`): Light intensity.

  **distance** (`number`): Influence distance for point lights and spotlights.
  
  **angle** (`number`): Spotlight angle.

  **penumbra** (`number`): Spotlight penumbra decay.

  **position** (`{ x: number, y: number, z: number }`): Light position.
  
  **decay** (`number`): Light decay coefficient.
  
  **target** (`{ x: number, y: number, z: number }`): Light target position (only valid for directional light and spotlight).
  
  **helper** (`boolean`): Whether to enable light helper tools.
  
  **shadow** (`object`): Shadow configuration object containing the following properties:
  
  **mapSizeWidth** (`number`): Shadow map width.
  
  **mapSizeHeight** (`number`): Shadow map height.
  
  **cameraLeft** (`number`): Shadow camera left boundary.
  
  **cameraRight** (`number`): Shadow camera right boundary.
  
  **cameraTop** (`number`): Shadow camera top boundary.
  
  **cameraBottom** (`number`): Shadow camera bottom boundary.
  
  **cameraNear** (`number`): Shadow camera near clipping plane.
  
  **cameraFar** (`number`): Shadow camera far clipping plane.
  
  **radius** (`number`): Shadow blur radius.
  
  **normalBias** (`number`): Shadow normal bias.
  
  **bias** (`number`): Shadow bias.
  
  **castShadow** (`boolean`): Whether to enable shadow casting.

  **helperSize** (`number`): Helper tool size (if helper tools are enabled).
- **instance** (`ThreeInstance`): A `ThreeInstance` instance used to access Three.js scene, camera, and renderer.

### Properties

-  **.light**

Get the current light group.

### Usage Example
```typescript
import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto()

const lightConfigs = [
  {
    type: 'ambient',
    color: 0xffffff,
    intensity: 3,
  },
  {
    type: 'directional',
    color: 0xffaa00,
    intensity: 1,
    position: { x: 5, y: 10, z: 5 },
    target: { x: 0, y: 0.3, z: 0 },
    castShadow: true,
    shadow: {
      mapSizeWidth: 1024,
      mapSizeHeight: 1024,
      cameraLeft: -5,
      cameraRight: 5,
      cameraTop: 5,
      cameraBottom: -5,
      cameraNear: 0.5,
      cameraFar: 500,
      radius: 2,
      normalBias: 0.001,
      bias: 0.001,
    },
    helper: true,
    helperSize: 1,
  },
  // More light source configurations...
];

const lights = new Light(lightConfigs, instance);
```