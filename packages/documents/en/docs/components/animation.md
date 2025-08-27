---
outline: deep
---
# Animation

The `Animation` class is used to manage and control animations in Three.js scenes. It inherits from the `BaseThree` class and depends on `ThreeInstance`, `THREE.AnimationClip`, and `THREE.Object3D`. The `Animation` class allows users to create and manage animation mixers by providing animation clips and root objects, and provides methods to get animation names and actions.

<div @dblclick="navLink" style="width:100%;height:600px;position:relative">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import {ref,onMounted} from 'vue'

const navLink = () => {
  console.log(111)
}
onMounted(() => {
const instance = new AUTO.ThreeAuto(undefined, {size: {type: 'parent'}});
const resources = new AUTO.Resources([
  {
    name: "crane",
    type: "GLTF",
    path: "/three-auto/models/crane_ori.glb",
    show: true,
  },
]);
new AUTO.Light(
  [
    {
      type: "ambient",
      color: "#fff",
      intensity: 1,
      helper: false,
      lightName: "ambient-light",
    },
  ],
  instance
);
resources.on("ready", () => {
  // console.log(resources.items.get("crane"));
  const crane = resources.items.get("crane");
  instance.scene.add(crane.scene);
  instance._camera.position.x = 6
  const animation = new AUTO.Animation(instance,crane.animations,crane.scene)
  AUTO.action(crane.scene.rotation,{x:Math.PI})
  AUTO.action(crane.scene.rotation,{y:Math.PI})
  AUTO.action(crane.scene.rotation,{z:Math.PI})
  AUTO.action(crane.scene.position,{x:1})
  AUTO.action(crane.scene.position,{y:1})
  AUTO.action(crane.scene.position,{z:1})
  animation.openSkeletonHelper()
  // console.log(animation.names,animation.actions);
  animation.actions[animation.names[0]].play()
  instance.time.on("tick", () => {
    animation.update()
  });
});
})

</script>

:::tip Note
Double-click to jump to example! ⬆️
:::

## Constructor
This constructor creates a new `Animation`.

```typescript
Animation(instance: ThreeInstance, clips: THREE.AnimationClip[], root: THREE.Object3D)
```
### Parameters
- **instance** (`ThreeInstance`): A `ThreeInstance` instance used to access Three.js scene, camera, and renderer.
- **clips** (`THREE.AnimationClip[]`): An array containing `THREE.AnimationClip` objects representing the animation clips to be loaded.
- **root** (`THREE.Object3D`): The root object of the animation, usually a model containing skeletal structure.

The constructor initializes the animation mixer `THREE.AnimationMixer` and saves the provided animation clips and root object as instance properties.


## Methods

### openSkeletonHelper() :void

- Creates a `THREE.SkeletonHelper` object and adds it to the scene to display the skeletal structure.
- Returns the created `THREE.SkeletonHelper` object. Used for visualizing skeletal structure.

### update() :void
Updates the animation mixer's time, usually called during each frame render.

```typescript
instance.time.on("tick", () => {
    animation.update()
});
```

## Properties

### get names()

A string array containing all animation clip names.

```typescript
const animation = new AUTO.Animation(instance,models.animations,models.scene)
console.log(animation.names)
```

### get actions()
An object where keys are animation clip names and values are corresponding `THREE.AnimationAction` objects.

```typescript
const animation = new AUTO.Animation(instance,models.animations,models.scene)
animation.actions[animation.names[0]].play()
```

## Usage Example

```typescript
import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto();
// Assume this is your model root object
const resources = new AUTO.Resources([
  {
    name: "crane",
    type: "GLTF",
    path: "./models/crane_ori.glb",
    show: true,
  },
]);
// Lighting
new AUTO.Light(
  [
    {
      type: "ambient",
      color: "#fff",
      intensity: 1,
      helper: false,
      lightName: "ambient-light",
    },
  ],
  instance
);

// Resource loading complete
resources.on("ready", () => {
  console.log(resources.items.get("crane"));
  const crane = resources.items.get("crane");
  instance.scene.add(crane.scene);
  const animation = new AUTO.Animation(instance,crane.animations,crane.scene)
  // Show skeleton
  animation.openSkeletonHelper()
  console.log(animation.names,animation.actions);
  // Play animation   
  animation.actions[animation.names[0]].play()

  // Update animation
  instance.time.on("tick", () => {
    animation.update()
  });
});
```


## Action

The `action` function is used to create a GSAP animation that smoothly transitions an object from its starting position to a target position. This function leverages the powerful capabilities of GSAP (GreenSock Animation Platform) to achieve animation effects and allows customization of animation behavior through the `options` parameter.

### Parameters

- `fromPosition` (`THREE.Vector3`): The starting position of the 3D object. Should be a `Vector3` object representing the initial coordinates in 3D space.
  
- `toPosition` (`any`): The target position of the animation. Can be an object containing any valid GSAP properties, usually an object with target position coordinates or other animation parameters.

- `options` (`gsap.TweenVars`, optional): Configuration object for the animation. This object can contain the following properties:
  
  - `duration` (`number`): Duration of the animation in seconds. Default value is `1.5`.
  - `ease` (`string`): Easing function for the animation. Default value is `"none"`. You can specify various GSAP easing functions, such as `"ease-in"`, `"ease-out"`, etc.
  - `repeat` (`number`): Number of animation repetitions. Default value is `0`, meaning no repetition.
  - `yoyo` (`boolean`): Whether to play the animation in reverse after it ends (yoyo). Default value is `false`.
  - `yoyoEase` (`boolean`): If `true`, easing function will be applied during reverse animation. Default value is `true`.

### Return Value

- `gsap.core.Tween`: Returns a GSAP animation `tween` object. Can be used to further control the animation, such as pausing, restarting, or stopping the animation.

### Usage Example

```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);
AUTO.action(box.rotation,{x:Math.PI})
AUTO.action(crane.scene.position,{x:1,y:1,z:1})

```