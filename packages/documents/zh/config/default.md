---
outline: deep
---
# default
基础配置项。

## id = '_scene'
`threeAuto`根据配置项`id`来自动获取`canvas`节点并根据节点自动生成`three.js`场景。 
`canvas`文档节点的唯一`id`，默认值是`'_scene'`。

## name
实例名称，用来区分不同实例。

## loadingType
当使用`Resources`配置加载资源时，可传入此类型来选择加载动画。
暂不支持自定义动画！

**可选：**
- `'default'` 加载条

![加载条](https://img.picgo.net/2024/12/13/image4cca4c73abdbed71.png)

- `'circle'` 圆形动画

![圆形加载](https://img.picgo.net/2024/12/13/imagea64b6b6ec44195dc.png)
- `'fade'` 渐变动画

![渐变动画](https://img.picgo.net/2024/12/13/image7e4351e97974dc81.png)

- `null` | `undefined` （不传入时则不会出现加载动画）

## tipsType = 'css2'
提示框组件类型。

`CSS3`渲染器`CSS3DRenderer`和`CSS2`渲染器`CSS2DRenderer`整体使用流程基本相同，只是在`HTML`标签渲染效果方面不同，比如`CSS3`渲染的标签会跟着场景相机同步缩放，而`CSS2`渲染的标签默认保持自身像素值。

**可选：**
- `'css2'` 
- `'css3'`

<!-- <div> 这是响应式的属性num : {{ num }}</div>

<script setup lang="ts">
    console.log('markdown 中写 script 标签 begin ');

    import {ref,onMounted} from 'vue'
    const num = ref(100)
    onMounted(()=>{
        console.log('markdown 中写 script 标签 - onMounted success ');
    })
</script> -->