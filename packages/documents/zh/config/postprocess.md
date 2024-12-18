---
outline: deep
---

# Postprocess

`object`

后处理组件。`PostProcessConfig` 是一个用于配置后处理效果的类型，支持多种类型的后处理效果，可以根据需要启用不同的效果或调整其相关参数。

## postprocess.type

`string`

后处理效果类型。

**可选**

- `moebius` 手绘风格滤镜
- `toneMapping` 卡通滤镜
- `bloom` 辉光滤镜

## postprocess.options

`object`

该字段用于存放与后处理效果相关的附加配置。例如，你可以在这里传递一些特定的参数来控制 Bloom 或 Tone Mapping 效果的强度、颜色等。

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
