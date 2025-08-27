# Default
`object`

Basic configuration options.
The total configuration includes the following major categories:

```typescript
interface ConfigType {
  id: string;
  name: string;
  size: SizeConfigType;
  light?: LightItems[];
  camera: CameraConfig;
  series?: Partial<SeriesConfig>[];
  resource?: SourcesItems[]
  loadingType?: LoadingType;
  tipsType?: TipsType;
  renderer: RendererConfig;
  shadow?: ShadowConfig;
  postprocess?: PostProcessConfig;
  env?: {} 
}
```

## id = '\_scene'

`string`

`threeAuto` automatically obtains the `canvas` node based on the configuration `id` and automatically generates a `three.js` scene based on the node.
The unique `id` of the `canvas` document node, with a default value of `'_scene'`.

## name

`string`

Instance name, used to distinguish different instances.

## loadingType

`string`

When using `Resources` configuration to load resources, you can pass in this type to select loading animation.

No loading animation by default.

Custom loading animations are not supported yet!

**Options:**

- `'default'` Loading bar

## tipsType

`string`

When using `Resources` configuration to load resources, you can pass in this type to select tip animation.

No tip animation by default.

Custom tip animations are not supported yet!

**Options:**

- `'default'` Default tip

## env

`object`

Environment configuration, used to set environment maps, etc.

Currently not implemented.