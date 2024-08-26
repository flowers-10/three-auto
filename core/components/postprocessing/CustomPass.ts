import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { EffectComposer, RenderPass } from "postprocessing";


export class CustomPass extends BaseThree {
  public composer:EffectComposer;
  constructor( instance: ThreeInstance) {
    super(instance);
    const composer = new EffectComposer(instance.renderer.instance)
    this.composer = composer
    const renderPass = new RenderPass(instance.scene, instance.camera.instance)
    composer.addPass(renderPass);
  }
}
