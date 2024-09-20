import * as THREE from "three";

import { ConfigType } from "../types/ConfigType";
import { CONFIG } from "../config/config";
import {
  MouseMoveTracker,
  Time,
  Sizes,
  Raycaster,
  Resources,
  Renderer,
  Camera,
} from "./index";
import { Light, Series, PostProcess } from "../components";

export interface ThreeInstance {
  time: Time;
  scene: THREE.Scene;
  sizes: Sizes;
  camera: Camera;
  _camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  _config: Partial<ConfigType>;
  _canvas: HTMLCanvasElement;
  renderer: Renderer;
  _renderer: THREE.WebGLRenderer;
  mousemove: MouseMoveTracker;
  raycaster: Raycaster;
  dispose(): void;
  onTick(cb: Function): void;
  onResize(cb: Function): void;
  onMousemove(cb: Function): void;
  onRaycasting(isLog: boolean, targets?: THREE.Object3D[]): void;
}
class ThreeAuto implements ThreeInstance {
  public time: Time;
  public scene: THREE.Scene;
  public sizes: Sizes;
  public camera: Camera;
  public _camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  public _config: Partial<ConfigType>;
  public _canvas: HTMLCanvasElement;
  public renderer: Renderer;
  public _renderer: THREE.WebGLRenderer;
  public mousemove: MouseMoveTracker;
  public raycaster: Raycaster;
  public series?: Series;
  public light?: Light;
  public postprocess?: PostProcess;
  public resource?: Resources;
  public Light = Light;
  public Resources = Resources;
  public Raycaster = Raycaster;
  public Series = Series;
  public PostProcess = PostProcess;

  constructor(canvas?: HTMLCanvasElement, config: Partial<ConfigType> = {}) {
    const {
      id = CONFIG.id,
      size = CONFIG.size,
      camera = CONFIG.camera,
      renderer = CONFIG.renderer,
    } = config;

    const canvass = document.getElementById(id);
    if (!canvass && !canvas) {
      throw new Error("canvas has already been initialized.");
    }
    this._config = config;
    this._canvas = canvas || (canvass as HTMLCanvasElement);
    this.mousemove = new MouseMoveTracker(this._canvas);
    this.sizes = new Sizes(size);
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.camera = new Camera(camera, this);
    this._camera = this.camera.instance;
    this.raycaster = new Raycaster(this);
    this.renderer = new Renderer(renderer, this);
    this._renderer = this.renderer.instance;

    if (config.light) {
      this.light = new Light(config.light, this);
    }
    if (config.series) {
      this.series = new Series(config.series, this);
    }
    if (config.postprocess) {
      this.postprocess = new PostProcess(config.postprocess, this);
    }
    if (config.resource) {
      this.resource = new Resources(config.resource);
    }

    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
  }
  protected resize() {
    this.camera?.resize();
    this.renderer?.resize();
  }
  protected update() {
    this.camera.update();
    this.raycaster.update();
    this.renderer.update();
    this.postprocess?.render();
  }
  public dispose() {
    this.sizes.off("resize");
    this.sizes.release();
    this.time.off("tick");
    this.time.release();
    this.mousemove.off("mousemove");
    this.mousemove.dispose();
    function clearGroup(group: THREE.Object3D) {
      if (!group.children.length) return;
      const clearCache = (item: THREE.Mesh) => {
        item.geometry?.dispose();
      };
      const removeObj = (obj: THREE.Object3D) => {
        let arr = obj.children.filter((x: THREE.Mesh | THREE.Object3D) => x);
        arr.forEach((item: THREE.Mesh | THREE.Object3D) => {
          if (item.children instanceof THREE.Object3D) {
            removeObj(item);
          }
          if (item instanceof THREE.Mesh) {
            clearCache(item);
            item.clear();
          }
        });
        obj.clear();
        arr = [];
      };
      removeObj(group);
    }
    this.scene.traverse((child: any) => {
      child?.geometry?.dispose();
      if (child instanceof THREE.Group || child instanceof THREE.Object3D) {
        clearGroup(child);
      }
    });
    this.scene.clear();
    this.renderer.dispose();
    this.camera.dispose();
  }
  public onTick(cb: Function) {
    this.time.on("tick", cb);
  }
  public delayInterval(cb: (e?: number) => void, interval?: number) {
    this.time.delayInterval(cb, interval);
  }
  get delta() {
    return this.time.delta;
  }
  get elapsedTime() {
    return this.time.elapsedTime;
  }
  public onResize(cb: Function) {
    this.sizes.on("resize", cb);
  }
  public getSizeInfo(message: string) {
    return this.sizes.info(message);
  }
  get width() {
    return this.sizes.width;
  }
  get height() {
    return this.sizes.height;
  }
  get pixelRatio() {
    return this.sizes.pixelRatio;
  }
  public onMousemove(cb: Function) {
    this.mousemove.on("mousemove", cb);
  }
  get eventOffset() {
    return this.mousemove.eventOffset;
  }
  get mouse() {
    return this.mousemove.mouse;
  }
  public onRaycasting(isLog: boolean = false, targets?: THREE.Object3D[]) {
    this.raycaster.onRaycasting(isLog, targets)
  }
  public isTargetIntersected(target: THREE.Mesh) {
    this.raycaster.isTargetIntersected(target);
  }
}

export { ThreeAuto };
