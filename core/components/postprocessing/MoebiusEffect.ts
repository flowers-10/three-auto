import { Effect } from "postprocessing";
import { CustomPass } from "./CustomPass";
import { ThreeInstance } from "../../base/ThreeInstance";

export class MoebiusEffect extends CustomPass {
  constructor(instance: ThreeInstance) {
    super(instance);
  }
}
