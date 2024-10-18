import * as THREE from "three";
import { ThreeInstance } from "../../../base";
import { CustomPass } from "../CustomPass";
import { MoebiusEffect } from "./MoebiusEffect";
import { EffectPass } from "postprocessing";

export interface MoebiusProps {
  noiseTex?: THREE.Texture;
  frequency?: number;
  amplitude?: number;
  mod?: number;
  thickness?: number;
  shadow?: boolean;
}

export class MoebiusPass extends CustomPass {
  effect: MoebiusEffect;
  depthRenderTarget: THREE.WebGLRenderTarget;
  normalRenderTarget: THREE.WebGLRenderTarget;
  constructor(config: MoebiusProps, instance: ThreeInstance) {
    super(instance);
    const newConfig = {
      frequency: 0.04,
      amplitude: 2,
      mod: 10,
      thickness: 1.5, shadow: true, ...config
    }
    const { noiseTex, amplitude, frequency, mod, thickness, shadow } = newConfig;

    const { width, height } = this.sizes;
    const depthTexture = new THREE.DepthTexture(width, height);
    depthTexture.type = THREE.UnsignedShortType;
    depthTexture.format = THREE.DepthFormat;
    // FBO
    const depthRenderTarget = new THREE.WebGLRenderTarget(width, height, {
      depthTexture,
      generateMipmaps: false,
    });
    const normalRenderTarget = new THREE.WebGLRenderTarget(width, height, {
      generateMipmaps: false,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
      stencilBuffer: false,
      type: THREE.HalfFloatType,
    });
    this.depthRenderTarget = depthRenderTarget;
    this.normalRenderTarget = normalRenderTarget;
    this.effect = new MoebiusEffect({
      sizes: this.sizes,
      camera: this._camera,
      depthRenderTarget,
      normalRenderTarget,
      noiseTex,
      frequency,
      amplitude,
      mod,
      thickness,
      shadow
    });
    this.composer.addPass(new EffectPass(this._camera, this.effect));
  }
  render() {
    const renderer = this.renderer.instance;
    renderer.autoClear = true;
    renderer.setRenderTarget(this.depthRenderTarget);
    if (this._instance && this._instance.shadow && this._instance.shadow.environment) {
      this._instance.shadow.environment.visible = false;
    }
    renderer.render(this.scene, this._camera);
    renderer.setRenderTarget(null);
    renderer.setRenderTarget(this.normalRenderTarget);
    this.scene.overrideMaterial = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
    renderer.render(this.scene, this._camera);
    if (this._instance && this._instance.shadow && this._instance.shadow.environment) {
      this._instance.shadow.environment.visible = true;
    }
    this.scene.overrideMaterial = null;
    renderer.setRenderTarget(null);
    this.effect.update();
    this.composer.render();
  }
}
