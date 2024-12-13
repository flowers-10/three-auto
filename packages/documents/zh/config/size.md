---
outline: deep
---
# Size
尺寸组件。用来监听页面或者元素尺寸变化来实时更新`three`实例渲染。


## size.type = "window"
指定监听元素宽高尺寸的类型。

默认监听`window`宽高尺寸。

**可选：**
- `'window'` 监听`window`宽高尺寸
- `'parent'` 监听当前`canvas`的外层元素宽高尺寸

:::
## size.dom
传入需要监听宽高的`dom`节点元素。

:::tip 注意
`dom` 和 `id`同时存在时优先取`dom`
:::

## size.id
`threeAuto`根据配置项`size.id`来自动获取相关`dom`节点并根据节点父元素的宽高自动更新渲染器。 

:::tip 注意
当`size.type`为`'parent'`时，`size.id`或者`size.dom`必须传入,否则取`window`的宽高。



