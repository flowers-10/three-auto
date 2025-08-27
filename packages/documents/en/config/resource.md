---
outline: deep
---

# Resource
`array`

Resource management component. Used to manage and describe various types of resources such as textures, models, audio, etc., for dynamic loading and use in projects.

## resource-name

`string`

The name of the resource, used to uniquely identify the resource. For example `"brick_texture"`, `"car_model"`, etc.

## resource-type

`string`

The type of resource, determining the classification of the resource. Internally, the corresponding loader will be selected based on the passed `type`.

**Options**

 - `TEXTURE` Image texture
 - `CUBE_TEXTURE` Cube texture
 - `OBJ` OBJ file material
 - `GLTF` GLB file material
 - `MP3` MP3 file material
 - `FONT` Font package material
 - `HDR` Environment map material

## resource-path

`string`

The path to the resource file, indicating where the resource file is stored in the project or its `URL`. Uses relative paths by default, please place resources in the `public` folder.

## resource-show

`boolean`

An optional boolean value used to indicate whether to display the resource. In some cases, you may want to control whether the resource is visible or has been loaded. Default value is `true` (if this value is not passed).