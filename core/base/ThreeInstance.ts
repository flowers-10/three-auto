import * as THREE from "three";

import { ConfigType } from "../types/ConfigType";
import { CONFIG } from "../config/config";
import Mousemove from "../base/Mousemove";
import Time from "../base/Time";
import Sizes from "../base/Sizes";

import Resources from "./Resources";
import Loading from "../components/loading/Loading";
import Camera from "../components/cameras/Camera";
import Renderer from "../components/renderers/Renderer";
// import BloomPass from "../components/postprocessing/BloomPass";
import Light from "../components/lights/Light";
import Raycaster from "../components/Raycaster";

class ThreeInstance {
  public time: Time;
  public light: Light;
  public scene: THREE.Scene;
  public sizes: Sizes;
  public camera: Camera;
  public _config: ConfigType;
  public config: any;
  public _canvas: HTMLCanvasElement;
  public loading: Loading;
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
    this.loading = new Loading(this);
    // this.resources = new Resources(config.sources, this.loading.loadingManager);
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

export { ThreeInstance };
