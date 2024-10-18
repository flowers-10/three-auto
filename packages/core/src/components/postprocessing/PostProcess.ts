import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { PostProcessConfig } from "../../types";
import { MoebiusPass } from "./MoebiusPass/MoebiusPass";
import { BloomPass } from "./BloomPass/BloomPass";
import { GTToneMapPass } from "./GTToneMapPass/GTToneMapPass";

export class PostProcess extends BaseThree {
  public customPass: any;
  constructor(config: PostProcessConfig, instance: ThreeInstance) {
    super(instance);
    const { type } = config;
    switch (type) {
      case "moebius":
        this.customPass = new MoebiusPass(config.options, instance);
        break;
      case "bloom":
        this.customPass = new BloomPass(config.options, instance);
        break;
      case "toneMapping":
        this.customPass = new GTToneMapPass(config.options, instance)
    }
  }
  render() {
    this.customPass.render();
  }
}
