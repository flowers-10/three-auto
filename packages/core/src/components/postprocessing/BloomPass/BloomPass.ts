import { ThreeInstance } from "../../../base";
import { CustomPass } from "../CustomPass";
import { BloomEffect, BloomEffectOptions, EffectPass} from "postprocessing";

export class BloomPass extends CustomPass {
  constructor(option: BloomEffectOptions, instance: ThreeInstance) {
    super(instance);
    this.composer.addPass(new EffectPass(this._camera, new BloomEffect(option)));
  }
  render() {
    this.composer.render();
  }
}
