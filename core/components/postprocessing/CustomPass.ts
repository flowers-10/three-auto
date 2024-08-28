import * as THREE from "three";
import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { EffectComposer, RenderPass } from "postprocessing";

let composerInstance: EffectComposer;

export class CustomPass extends BaseThree {
  public composer: EffectComposer = composerInstance;
  constructor(instance: ThreeInstance) {
    super(instance);
    const composer = new EffectComposer(instance.renderer.instance);
    this.composer = composer;
    const renderPass = new RenderPass(instance.scene, instance.camera.instance);
    composer.addPass(renderPass);
  }
}
