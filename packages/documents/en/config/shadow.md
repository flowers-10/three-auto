---
outline: deep
---

# Shadow

Shadow component. Defines shadow-related configuration options, mainly controlling shadow display, size, color, transparency, rotation, and position properties.

## shadow.show

`boolean`

Whether to display shadows. When set to true, shadows will be visible.

## shadow.width

`number`

The width of the shadow to be cast onto the related plane.

## shadow.height

`number`

The length of the shadow to be cast onto the related plane.

## shadow.rotation
`Object`

The rotation angle of the shadow to be cast onto the related plane.
### shadow.rotation.x

`number`

The angle of rotation around the `X` axis for the related plane.

### shadow.rotation.y

`number`

The angle of rotation around the `Y` axis for the related plane.

## shadow.position
`Object`

The position of the shadow to be cast onto the related plane.
### shadow.position.x

`number`

Horizontal offset of the related plane.

### shadow.position.y

`number`

Vertical offset of the related plane.

### shadow.position.z
`number`

Depth offset of the related plane.

## shadow.color

`string | number`

The color of the shadow.

## shadow.opacity

`number`

Shadow transparency.