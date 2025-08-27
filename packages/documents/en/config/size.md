---
outline: deep
---
# Size
Size component. Used to listen for page or element size changes to update the `three` instance rendering in real-time.

## size.type = "window"
`string`

Specifies the type of element to listen for width and height dimensions.

By default, listens to `window` width and height dimensions.

**Options:**
- `'window'` Listen to `window` width and height dimensions
- `'parent'` Listen to the outer element width and height dimensions of the current `canvas`

## size.dom
`HTMLElement`

Pass in the `dom` node element that needs to be listened for width and height.

:::tip Note
When both `dom` and `id` exist, `dom` takes priority
:::

## size.id
`string | number`

`threeAuto` automatically obtains the related `dom` node based on the configuration `size.id` and automatically updates the renderer based on the width and height of the node's parent element.

:::tip Note
When `size.type` is `'parent'`, `size.id` or `size.dom` must be passed in, otherwise the width and height of `window` will be used.
:::