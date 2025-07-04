import * as THREE from "three";
import gsap from "gsap";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

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
import { Light, Series, PostProcess, Tips, Shadow, Environment, Legend } from "../components";

export interface ThreeInstance {
  time: Time;
  scene: THREE.Scene;
  sizes: Sizes;
  camera: Camera;
  shadow?: Shadow;
  _camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
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
  createTips(root: HTMLElement): any
}
class ThreeAuto implements ThreeInstance {
  public static gsap = gsap;
  public static MotionPathPlugin = MotionPathPlugin;
  public tips: Tips;
  public time: Time;
  public scene: THREE.Scene;
  public sizes: Sizes;
  public camera: Camera;
  public shadow?: Shadow;
  public _camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  public _canvas: HTMLCanvasElement;
  public renderer: Renderer;
  public _renderer: THREE.WebGLRenderer;
  public mousemove: MouseMoveTracker;
  public raycaster: Raycaster;
  public series?: Series;
  public legend?: Legend;
  public light?: Light;
  public postprocess?: PostProcess;
  public resource?: Resources;
  public env?: Environment;
  public Light = Light;
  public Resources = Resources;
  public Raycaster = Raycaster;
  public Series = Series;
  public Legend = Legend;
  public PostProcess = PostProcess;

  constructor(canvas?: HTMLCanvasElement, config: Partial<ConfigType> = {}) {
    config = Object.assign(CONFIG, config)
    const { id = '_scene', size = { type: 'window' }, camera = CONFIG.camera, renderer = CONFIG.renderer, tipsType, light, series, legend, postprocess, resource, loadingType, env, shadow } = config
    const canvass = document.getElementById(id);
    if (!canvass && !canvas) {
      throw new Error("ThreeAuto:Canvas has already been initialized.");
    }
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
    this.tips = new Tips(this, tipsType)
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
    this.time.on("tickAfter", () => {
      this.postprocess?.render();
    });
    if (light) {
      this.light = new Light(light, this);
    }
    if (series && series.length) {
      this.series = new Series(series, this);
    }
    if (legend) {
      if (!legend.data || !legend.data.length) {
        const seriesData = series?.map(item => item.data).filter(Boolean);
        if (seriesData && seriesData.length > 0) {
          legend.data = seriesData[0];
        }
      }
      this.legend = new Legend(legend, this);
    }
    if (postprocess) {
      this.postprocess = new PostProcess(postprocess, this);
    }
    if (resource && resource.length) {
      this.resource = new Resources(resource, loadingType);
    }
    if (env) {
      this.env = new Environment(this)
    }
    if (shadow?.show) {
      this.shadow = new Shadow(shadow, this)
    }
  }
  protected resize() {
    this.camera?.resize();
    this.renderer?.resize();
    this.tips.resize();
  }
  protected update() {
    this.camera.update();
    this.raycaster.update();
    this.renderer.update();
    this.tips.update();
    this.env?.update()

  }
  public dispose() {
    this.sizes.off("resize");
    this.sizes.release();
    this.time.off("tick");
    this.time.release();
    this.mousemove.off("mousemove");
    this.mousemove.dispose();
    this.tips.dispose();
    this.series?.dispose();
    this.legend?.dispose();
    this.light?.dispose();
    this.postprocess?.dispose();
    this.env?.dispose();
    this.shadow?.dispose();
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
  public onTickBefore(cb: Function) {
    this.time.on("tickBefore", cb);
  }
  public onTick(cb: Function) {
    this.time.on("tick", cb);
  }
  public onTickAfter(cb: Function) {
    this.time.on("tickAfter", cb);
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
  public createTips(root: HTMLElement) {
    return this.tips.createTips(root)
  }
}

export { ThreeAuto };
