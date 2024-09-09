import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { PostProcessConfig } from "../../types";
import { MoebiusPass, MoebiusProps } from "./MoebiusPass/MoebiusPass";
import { generateTypeGuard } from "../../shared";

export class PostProcess extends BaseThree {
  public customPass: MoebiusPass;
  constructor(config: PostProcessConfig, instance: ThreeInstance) {
    super(instance);
    const { type } = config;
    switch (type) {
      case "moebius":
        const isMoebiusProps = generateTypeGuard<MoebiusProps>({});
        if (!config.options) {
          config.options = {
            frequency: 0.04,
            amplitude: 2,
            mod: 10,
            thickness: 1.5, // 修正拼写错误
          };
        }
        if (!isMoebiusProps(config.options)) {
          throw new Error("config.options must be of type MoebiusProps");
        }
        this.customPass = new MoebiusPass(config.options, instance);
        break;
    }
  }
  render() {
    this.customPass.render();
  }
}
