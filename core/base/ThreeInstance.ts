import * as THREE from "three";

import { ConfigType } from "../types/ConfigType";
import { CONFIG } from "../config/config";
import { Mousemove, Time, Sizes, Raycaster, Resources } from "./index";
import { Camera, Renderer, Light } from "../components";
// import BloomPass from "../components/postprocessing/BloomPass";

export interface ThreeInstance {
  time: Time;
  light: Light;
  scene: THREE.Scene;
  sizes: Sizes;
  camera: Camera;
  config: any;
  _config: ConfigType;
  _canvas: HTMLCanvasElement;
  renderer: Renderer;
  mousemove: Mousemove;
  raycaster: Raycaster;
}
class ThreeAuto implements ThreeInstance {
  public time: Time;
  public light: Light;
  public scene: THREE.Scene;
  public sizes: Sizes;
  public camera: Camera;
  public config: any;
  public _config: ConfigType;
  public _canvas: HTMLCanvasElement;
  public renderer: Renderer;
  public mousemove: Mousemove;
  public raycaster: Raycaster;
  public Resources = Resources;
  // private bloomPass;

  constructor(canvas?: HTMLCanvasElement, config: ConfigType = CONFIG) {
    const canvass = document.getElementById(config.id);

    if (!canvass && !canvas) {
      throw new Error("canvas has already been initialized.");
    }
    this._config = config;
    this._canvas = canvas || (canvass as HTMLCanvasElement);
    this.mousemove = new Mousemove(this._canvas);
    this.sizes = new Sizes(config.size);
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.camera = new Camera(config.camera, this);
    this.light = new Light(config.light, this);
    this.raycaster = new Raycaster(this);
    this.renderer = new Renderer(config.renderer, this);

    // todo 等待优化
    // switch (config.rendererPass.type) {
    //   case "OUTLINE":
    //     break;
    //   case "BLOOM":
    //     this.bloomPass = new BloomPass(
    //       config.rendererPass.bloomConfig,
    //       this
    //     );
    //     break;
    //   case "NONE":
    //     break;
    //   default:
    //     break;
    // }
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera?.resize();
    this.renderer?.resize();
  }

  update() {
    this.camera.update();
    this.raycaster.update();
    this.renderer.update();
  }

  clearGroup(group: any) {
    if (!group.children.length) return;
    const clearCache = (item: any) => {
      item.geometry?.dispose();
    };
    const removeObj = (obj: any) => {
      let arr = obj.children.filter((x: any) => x);
      arr.forEach((item: any) => {
        if (item.children.length) {
          removeObj(item);
        } else {
          clearCache(item);
          item.clear();
        }
      });
      obj.clear();
      arr = null;
    };
    removeObj(group);
  }

  dispose() {
    this.sizes.off("resize");
    this.sizes.release();
    this.time.off("tick");
    this.time.release();
    this.mousemove.off("mousemove");
    this.mousemove.release();
    /* 销毁场景里的几何体 材质等 */
    this.scene.traverse((child: any) => {
      child?.geometry?.dispose();
      if (child instanceof THREE.Group || child instanceof THREE.Object3D) {
        this.clearGroup(child);
      }
    });
    this.scene.clear();
    this.renderer.dispose();
    this.camera.dispose();
  }
}

export { ThreeAuto };
