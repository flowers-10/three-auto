import * as THREE from "three";
import { ThreeInstance } from "./ThreeInstance";
import BaseThree from "./BaseThree";
import { RendererConfig } from "../types";

export class Renderer extends BaseThree {
  public instance: THREE.WebGLRenderer;
  constructor(config: RendererConfig, instance: ThreeInstance) {
    super(instance);
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: config.antialias,
      alpha: config.alpha,
      logarithmicDepthBuffer: config.logarithmicDepthBuffer,
    });
    this.setRenderer(config);
  }

  setRenderer(config: RendererConfig): void {
    // Renderer settings
    this.instance.outputColorSpace = THREE.SRGBColorSpace;
    this.instance.setClearColor(config.clearColor,config.clearAlpha); 
    this.instance.setSize(this.sizes.width, this.sizes.height);    
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 1));
  }
  info(message = "present memory:") {
    console.log(message, this.instance.info.memory);
  }

  resize() {
    this.instance.setSize(this.sizes?.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 1));
  }

  update() {
    this.instance.render(this.scene, this.camera?.instance);
  }

  dispose() {
    this.instance.clear();
    this.instance.setSize(0, 0);
    this.instance.dispose();
    this.info("cleared memory:");
  }
}
