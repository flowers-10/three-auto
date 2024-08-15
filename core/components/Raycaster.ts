import * as THREE from "three";
import { ThreeInstance } from "../base/ThreeInstance";
import BaseThree from "../base/BaseThree";

// import { eventBus } from '@BI/utils/eventBus'

export default class Raycaster extends BaseThree {
  public raycaster: THREE.Raycaster;
  constructor(instance: ThreeInstance) {
    super(instance);
    this.raycaster = new THREE.Raycaster();
  }
  update() {
    this.raycaster.setFromCamera(this.mouse, this._camera);
  }
}
