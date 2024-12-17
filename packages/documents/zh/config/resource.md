---
outline: deep
---

# Resource
`array`

资源管理组件。用于管理和描述多种类型的资源，如纹理、模型、音频等，以便在项目中动态加载和使用。


## resource-name

`string`

资源的名称，用于唯一标识该资源。例如 `"brick_texture"`、`"car_model"` 等。


## resource-type

`string`

资源的类型，确定该资源的分类。内部会通过传入的 `type` 选择对应的加载器。

**可选**

 - `TEXTURE` 图片材质
 - `CUBE_TEXTURE` 图片材质
 - `OBJ` obj文件材质
 - `GLTF` glb文件材质
 - `MP3` mp3文件材质
 - `FONT` 字体包材质
 - `HDR` 环境贴图材质



## resource-path

`string`

资源文件的路径，表示该资源文件在项目中的存放位置或 `URL`。默认使用相对路径，请把资源放置到`public`文件夹下。

## resource-show

`boolean`

一个可选的布尔值，用于指示是否显示该资源。在某些情况下，你可能希望控制资源是否可见或是否已加载。默认值为 `true`（如果没有传递该值）。

