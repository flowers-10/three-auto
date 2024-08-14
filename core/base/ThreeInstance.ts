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
import BloomPass from "../components/postprocessing/BloomPass";
import Light from "../components/lights/Light";
import Raycaster from "../components/Raycaster";

export default class ThreeInstance {
  public static __ins: ThreeInstance;
  public _canvas: HTMLCanvasElement;
  public scene: THREE.Scene;
  public mousemove: Mousemove;
  public resources: Resources;
  public sizes: Sizes;
  public camera: Camera;
  public renderer: Renderer;
  public _config: ConfigType;
  public light: Light;
  public time: Time;
  public raycaster: Raycaster;
  public loading: Loading;
  private bloomPass;

  constructor(canvas?: HTMLCanvasElement, config: ConfigType = CONFIG) {
    const canvass = document.getElementById(config.id);

    if (!canvass && !canvas) {
      throw new Error("canvas has already been initialized.");
    }
    this._canvas = canvas || (canvass as HTMLCanvasElement);
    this._config = config;
    this.mousemove = new Mousemove(this._canvas);
    this.sizes = new Sizes(this._config.size);
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.camera = new Camera(this._config.camera, this);
    this.light = new Light(this._config.light, this);
    this.raycaster = new Raycaster(this);

    this.renderer = new Renderer(this._config.renderer, this);
    switch (this._config.rendererPass.type) {
      case "OUTLINE":
        break;
      case "BLOOM":
        this.bloomPass = new BloomPass(
          this._config.rendererPass.bloomConfig,
          this
        );
        break;
      case "NONE":
        break;
      default:
        break;
    }
    this.loading = new Loading(this);
    this.resources = new Resources(
      this._config.sources,
      this.loading.loadingManager
    );
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
  }

  public setOption(option: any) {
    this._config = { ...this._config, ...option };
  }

  resize() {
    this.camera?.resize();
    this.renderer?.resize();
  }

  update() {
    this.camera?.update();
    this.raycaster.update();
    switch (this._config.rendererPass.type) {
      case "OUTLINE":
        break;
      case "BLOOM":
        this.bloomPass?.update();
        break;
      case "NONE":
        this.renderer?.update();
        break;
      default:
        this.renderer?.update();
        break;
    }
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
