import { Effect } from "postprocessing";
import * as THREE from "three";
import fragmentShader from "./moebius.glsl";
import { Sizes } from "../../../base";

export interface MoebiusEffectProps {
  depthRenderTarget: THREE.WebGLRenderTarget;
  normalRenderTarget: THREE.WebGLRenderTarget;
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  sizes: Sizes;
  noiseTex?: THREE.Texture;
  frequency?: number;
  amplitude?: number;
  mod?: number;
  thickness?: number;
  shadow?: boolean
}

export class MoebiusEffect extends Effect {
  sizes: Sizes;
  constructor(args: MoebiusEffectProps) {

    const defines = new Map<string, any>([]);
    if (args.shadow) {
      defines.set("SHADOW", '');
    }
    super("Moebius", fragmentShader, {
      defines,
      uniforms: new Map<string, any>([
        ["cameraNear", new THREE.Uniform(args.camera.near)],
        ["cameraFar", new THREE.Uniform(args.camera.far)],
        ["uDepth", new THREE.Uniform(args.depthRenderTarget.depthTexture)],
        ["uNormal", new THREE.Uniform(args.normalRenderTarget.texture)],
        ["uResolution", new THREE.Uniform(new THREE.Vector2())],
        ["uFrequency", new THREE.Uniform(args.frequency)],
        ["uAmplitude", new THREE.Uniform(args.amplitude)],
        ["uNoiseTex", new THREE.Uniform(args.noiseTex)],
        ["uMod", new THREE.Uniform(args.mod || 0)],
        ["uThickness", new THREE.Uniform(args.thickness || 0)],
      ]),
    });
    this.sizes = args.sizes;
  }
  update() {
    this.uniforms
      .get("uResolution")!
      .value.set(
        this.sizes.width * this.sizes.pixelRatio,
        this.sizes.height * this.sizes.pixelRatio
      );
  }
}
