import * as THREE from "three";
import gsap from "gsap";
import BaseThree from "../../base/BaseThree";
import { ThreeInstance } from "../../base";

export class Animation extends BaseThree {
  clips: THREE.AnimationClip[];
  root: THREE.Object3D;
  mixer: THREE.AnimationMixer;
  constructor(
    instance: ThreeInstance,
    clips: THREE.AnimationClip[],
    root: THREE.Object3D
  ) {
    super(instance);
    this.clips = clips;
    this.root = root;
    this.mixer = new THREE.AnimationMixer(root);
  }
   openSkeletonHelper() {
    const skeletonHelper = new THREE.SkeletonHelper(this.root);
    this.scene.add(skeletonHelper); 
    return skeletonHelper
  }
  get names() {
    return this.clips.map((item) => item.name);
  }
  get actions() {
    return Object.fromEntries(
      this.clips.map((item) => [item.name, this.mixer.clipAction(item)])
    );
  }
  update(): void {
    this.mixer.update(1);
  }
}

export function action(
  fromPosition: THREE.Vector3,
  toPosition: any,
  options: gsap.TweenVars = {
    duration: 1.5,
    ease: "none",
    repeat: 0,
    yoyo: false,
    yoyoEase: true,
  }
) {
  return gsap.to(fromPosition, {
    ...toPosition,
    ...options,
  });
}
