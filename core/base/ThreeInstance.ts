import * as THREE from "three";

import { ConfigType } from "../types/ConfigType";
import { CONFIG } from "../config/config";
import { MouseMoveTracker, Time, Sizes, Raycaster, Resources } from "./index";
import { Camera, Renderer, Light } from "../components";
// import BloomPass from "../components/postprocessing/BloomPass";

export interface ThreeInstance {
  time: Time;
  light: Light;
  scene: THREE.Scene;
  sizes: Sizes;
  camera: Camera;
  _camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  config: any;
  _config: ConfigType;
  _canvas: HTMLCanvasElement;
  renderer: Renderer;
  _renderer: THREE.WebGLRenderer;
  mousemove: MouseMoveTracker;
  raycaster: Raycaster;
  resize(): void;
  update(): void;
  dispose(): void;
}
class ThreeAuto implements ThreeInstance {
  public time: Time;
  public light: Light;
  public scene: THREE.Scene;
  public sizes: Sizes;
  public camera: Camera;
  public _camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  public config: any;
  public _config: ConfigType;
  public _canvas: HTMLCanvasElement;
  public renderer: Renderer;
  public _renderer: THREE.WebGLRenderer;
  public mousemove: MouseMoveTracker;
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
    this.mousemove = new MouseMoveTracker(this._canvas);
    this.sizes = new Sizes(config.size);
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.camera = new Camera(config.camera, this);
    this._camera = this.camera.instance;
    this.light = new Light(config.light, this);
    this.raycaster = new Raycaster(this);
    this.renderer = new Renderer(config.renderer, this);
    this._renderer = this.renderer.instance;
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
  }

  public resize() {
    this.camera?.resize();
    this.renderer?.resize();
  }

  public update() {
    this.camera.update();
    this.raycaster.update();
    this.renderer.update();
  }

  public clearGroup(group: any) {
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

  public dispose() {
    this.sizes.off("resize");
    this.sizes.release();
    this.time.off("tick");
    this.time.release();
    this.mousemove.off("mousemove");
    this.mousemove.dispose();
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
