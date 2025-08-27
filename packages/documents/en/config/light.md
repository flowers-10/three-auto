---
outline: deep
---

# Light
`array`

Light component. Defines various configurable options for light objects, including light type, color, intensity, shadow settings, etc. Below is a detailed description of each property.

## light-type

`string`

The type of light. Can be one of the following:

- `"point"`: Point light, light rays emanate from a point in all directions.
- `"ambient"`: Ambient light, uniformly illuminates the scene without casting shadows.
- `"hemisphere"`: Hemisphere light, provides two different light sources from above and below.
- `"spot"`: Spotlight, emits a directional beam of light, commonly used to focus on a specific area.
- `"directional"`: Directional light, light rays illuminate all objects in the scene from a specific direction.

## light-castShadow

`boolean`

Whether to enable shadow casting. When set to `true`, the light will cast shadows. Ensure that objects in the scene and surfaces receiving shadows support shadow rendering.

## light-shadow

`object`

Configures the shadow properties of the light. The `shadow` configuration is an optional partial configuration that allows further adjustment of shadow details, such as shadow size, depth, etc. See `LightShadowConfig` below for specific configuration options.

### light-shadow.mapSizeWidth

`number`

The width of the shadow map. Affects shadow resolution; larger values can improve shadow detail.

### light-shadow.mapSizeHeight

`number`

The height of the shadow map, similar to mapSizeWidth, controls shadow detail.

### light-shadow.cameraLeft

`number`

The left boundary of the shadow camera, controls the frustum range of the shadow camera.

### light-shadow.cameraRight

`number`

The right boundary of the shadow camera.

### light-shadow.cameraTop

`number`

The top boundary of the shadow camera.

### light-shadow.cameraBottom

`number`

The bottom boundary of the shadow camera.

### light-shadow.cameraNear

`number`

The near clipping plane of the shadow camera.

### light-shadow.cameraFar

`number`

The far clipping plane of the shadow camera.

### light-shadow.radius

`number`

The attenuation radius of the shadow, affects the softness of the shadow.

### light-shadow.normalBias

`number`

Used to adjust shadow offset, avoiding unnatural shadow phenomena at seams.

### light-shadow.bias

`number`

Shadow offset amount, typically used to resolve "shadow acne" issues that may appear in shadow maps.

## light-target

`THREE.Object3D`

The target object of the light, only needed when the light type is spotlight (`spot`) or directional light (`directional`). The target object is the direction the light illuminates; by default, the light illuminates the origin of the scene.

## light-color

`string`

The color of the light, can use standard `CSS` color notation such as `HEX`, `RGB`, or `RGBA` values.

## light-intensity

`number`

The intensity of the light, determines the brightness of the light source. Higher values make the light source brighter.

## light-distance

`number`

For point lights or spotlights, distance represents the maximum effective range of the light source. Beyond this distance, the light source no longer illuminates objects.

## light-helper

`boolean`

Whether to enable the light's debug helper. Debug helpers can help visualize the position and range of lights in the scene.

## light-helperSize

`number`

The size of the debug helper. For lights with helper enabled, set this property to adjust the size of the debug helper.

## light-lightName

`string`

Assign a name to the light for easy reference during debugging or other operations.

## light-position

`object`

Sets the position of the light. A type containing `x`, `y`, and `z` coordinates, representing the position of the light source in the scene.

### light-position.x

`number`

Light horizontal offset

### light-position.y

`number`

Light vertical offset

### light-position.z

`number`

Light depth offset

## light-groundColor

`string`

Hemisphere light (`hemisphere`) uses this property to set the ground color. It defines the color of light from below the scene.

## light-angle

`number`

For spotlights (`spot`), `angle` defines the angle of the light beam (in radians). It controls the range of the spotlight beam.

## light-penumbra

`number`

For spotlights (`spot`), `penumbra` controls the transition area of the light beam (shadow edges). A value of `0` creates completely hard edges, while a value of `1` creates smooth edge transitions.

## light-decay

`number`

For point lights or spotlights, `decay` controls the speed of light source attenuation. When greater than `1`, light intensity gradually attenuates with increasing distance.