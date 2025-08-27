---
outline: deep
---

# Resources and Loaders
The resource manager has built-in loader components, so we introduce them together.

[![Resources and Loaders](https://img.picgo.net/2024/11/07/tutieshi_640x488_4s-2cca6985d59e6169c.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/shadow.ts)


## Resource Manager (Resources)

The `Resources` class is used to manage and load various resources in Three.js applications, such as models, textures, fonts, audio, etc. It inherits from the `EventEmitter` class and uses multiple loaders (such as `GLTFLoader`, `OBJLoader`, `TextureLoader`, etc.) to handle different types of resources. This class also supports custom loading progress bars (`Loading`) and triggers a `ready` event when all resources are loaded.

### Constructor

```typescript 
constructor(sources: SourcesItems[], loadingManager?: LoadingType | THREE.LoadingManager)
```

#### Parameters

- **sources** (`SourcesItems[]`): List of resources to load.
- **loadingManager** (`LoadingType | THREE.LoadingManager`, optional): Custom loading manager or loading style, defaults to `undefined`.


### Methods

#### `get getLoaded(): boolean`

**Return Value**

- **getLoaded** (`boolean`): Whether all resources have been loaded.

**Functionality**

- Returns whether `loaded` equals `toLoad`.

#### `get getProgress(): number`

**Return Value**

- **getProgress** (`number`): Loading progress, range `[0, 1]`.

**Functionality**

- Calculates and returns the current loading progress.

### Usage Example

```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const res = new AUTO.Resources([{
  name: "svg",
  type: "TEXTURE",
  path: "./ThreeJs.svg",
  show: false,
},])
console.log(res);
```


## Loader (Loading)
The `CustomLoading` class is used to create and manage custom loading progress bars in Three.js applications. It depends on `THREE.LoadingManager` to handle resource loading and uses GSAP to achieve smooth animation effects. This class also supports multiple loading styles and can select different loading styles through configuration.

### Constructor
**`CustomLoading(type: LoadingType)`**

#### Parameters

- **type** (`LoadingType`): Type of loading style, defaults to `"default"`.

**Functionality**

- Calls the `createBar` method to create a loading progress bar based on the provided type.
- Initializes DOM elements.
- Creates a `THREE.LoadingManager` instance and binds callbacks for loading completion and progress updates.
- Sets a timeout function that automatically calls the `loadedBar` method after 30 seconds.

### Methods

#### createBar(type)
- **type** (`LoadingType`): Type of loading style, defaults to `"default"`.

Uses the `htmlRender` method to render the loading node to `document.body`.

#### loadedBar()
Called when all resources are loaded. Uses GSAP to set fade-out animation for the loading progress bar and removes the loading progress bar after the animation completes. Sets scale animation for the loading progress bar.

#### progressBar(type, loaded, total)

- **type** (`LoadingType`): Type of loading style, defaults to `"default"`.
- **loaded** (`number`): Number of loaded resources.
- **total** (`number`): Total number of resources.

Calculates loading progress. Updates the percentage text of the loading progress bar. If the loading style is `"default"`, updates the scale ratio of the loading progress bar.

#### `dispose()`
Removes existing loading progress bar DOM elements.

### Usage Example

```javascript
import * as AUTO from "three-auto";

const instance = new AUTO.ThreeAuto();
new AUTO.CustomLoading('circle');
```