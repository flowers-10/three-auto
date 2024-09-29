import * as THREE from "three";
import { ThreeInstance } from "./ThreeInstance";
import BaseThree from "./BaseThree";

export class Raycaster extends BaseThree {
  public raycaster: THREE.Raycaster;
  constructor(instance: ThreeInstance) {
    super(instance);
    this.raycaster = new THREE.Raycaster();
  }
  update() {
    this.raycaster.setFromCamera(this.mouse, this._camera);
  }
  // Monitor all raycast-detected objects.
  onRaycasting(isLog = false, targets = this.scene.children) {
    const intersects = this.raycaster.intersectObjects(targets, true);
    if (intersects.length > 0) {
      if (isLog) {
        console.log(intersects);
      }
      return intersects;
    } else {
      if (isLog) {
        console.warn("No object was found when event.");
      }
    }
  }
  // Check if the passed target is triggered.
  isTargetIntersected(target: THREE.Mesh) {
    const intersects = this.onRaycasting(false);
    if (intersects) {
      const includedTarget = intersects.find((item) => item.object === target);
      return includedTarget ? includedTarget : null;
    }
  }
}
