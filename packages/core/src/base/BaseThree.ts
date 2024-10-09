import { ThreeInstance } from "./ThreeInstance";
interface BaseThreeInterface {
  resize(): void;
  update(): void;
  dispose(): void;
}

export default class BaseThree implements BaseThreeInterface {
  protected sizes;
  protected scene;
  protected canvas;
  protected camera;
  protected _camera;
  protected _canvas: HTMLCanvasElement;
  protected time;
  protected mouse;
  protected mousemove;
  protected renderer;
  protected _raycaster;

  constructor(protected _instance: ThreeInstance) {
    this.sizes = _instance.sizes;
    this.scene = _instance.scene;
    this.camera = _instance.camera;
    this._camera = _instance.camera?.instance || null;
    this.time = _instance.time;
    this.mouse = _instance.mousemove?.mouse;
    this.mousemove = _instance.mousemove;
    this.canvas = _instance._canvas;
    this.renderer = _instance.renderer;
    this._canvas = _instance._canvas;
    this._raycaster = _instance.raycaster;
  }
  resize(): void { }
  update(): void { }
  dispose(): void { }
  dispatchEvent() { }
}
