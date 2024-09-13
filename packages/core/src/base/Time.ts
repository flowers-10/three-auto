import * as THREE from "three";
import { EventEmitter } from "./EventEmitter";
// import { clamp, lerp } from "three/src/math/MathUtils.js";

export class Time extends EventEmitter {
  public clock: THREE.Clock;
  private start: number;
  private current: number;
  public lerpValue: number;
  public delta: number;
  public elapsedTime: number;

  private animationTick: null | number;
  private timer: number;
  private index: number;
  constructor() {
    super();
    this.clock = new THREE.Clock();
    this.start = Date.now();
    this.current = this.start;
    this.delta = 16;
    this.elapsedTime = 0;
    this.lerpValue = 0;

    this.animationTick = null;
    this.timer = 0;
    this.index = 0;
    this.tick();
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsedTime = this.clock.getElapsedTime();
    // let dt = this.clock.getDelta();
    // this.lerpValue = lerp(this.lerpValue, 1, clamp(dt,0,1))

    this.trigger("tick", null);
    this.animationTick = window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  release() {
    if (this.animationTick) window.cancelAnimationFrame(this.animationTick);
  }

  // Execute the callback function every interval second.
  delayInterval(cb: (e: number) => void, interval = 1000) {
    this.timer += this.delta;
    if (this.timer >= interval) {
      this.index++;
      this.timer = 0;
      cb(this.index);
    }
  }
}
