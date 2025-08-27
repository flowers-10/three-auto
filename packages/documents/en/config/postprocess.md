---
outline: deep
---

# Postprocess

`object`

Post-processing component. `PostProcessConfig` is a type used to configure post-processing effects, supporting multiple types of post-processing effects. Different effects can be enabled or their related parameters adjusted as needed.

## postprocess.type

`string`

Post-processing effect type.

**Options**

- `moebius` Hand-drawn style filter
- `toneMapping` Cartoon filter
- `bloom` Bloom filter

## postprocess.options

`object`

This field is used to store additional configurations related to post-processing effects. For example, you can pass specific parameters here to control the intensity, color, etc. of Bloom or Tone Mapping effects.

### moebius

```typescript
{
    frequency: 0.04,
    amplitude: 2,
    mod: 10,
    thickness: 1.5,
    shadow: true
}
```

### toneMapping

```typescript
{
    MaxLuminanice: 1.0,
    Contrast: 1.0,
    LinearSectionStart: 0.22,
    LinearSectionLength: 0.4,
    BlackTightnessC: 1.33,
    BlackTightnessB: 0.0,
    Enabled: true,
            
}
```

### bloom

```typescript
{
    blendFunction?: BlendFunction;
	luminanceThreshold?: number;
	luminanceSmoothing?: number;
	mipmapBlur?: boolean;
	intensity?: number;
	radius?: number;
	levels?: number;
	kernelSize?: KernelSize;
	resolutionScale?: number;
	width?: number;
	height?: number;
	resolutionX?: number;
	resolutionY?: number;
}
```