import { EventEmitter } from "./EventEmitter";
import { SizeConfigType } from "../types/ConfigType";

export class Sizes extends EventEmitter {
  public width: number;
  public height: number;
  public pixelRatio: number;
  public dom: HTMLElement | null = null;
  private resizeHandler: () => void;
  constructor(config: SizeConfigType) {
    super();
    this.width = 0;
    this.height = 0;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    if (config.type === "parent") {
      const childNode = config.dom || document.getElementById(config.id || '_scene');
      if (childNode && childNode.parentNode) {
        this.dom = childNode.parentElement
      }
    } else {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }

    this.resizeHandler = () => {
      if (this.dom) {
        this.width = this.dom.clientWidth || 200;
        this.height = this.dom.clientHeight || 200;
      } else {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }
      this.trigger("resize", null);
    };
    this.resizeHandler();
    this.dom?.addEventListener("resize", this.resizeHandler);
    window.addEventListener("resize", this.resizeHandler);
  }
  info(message = "Now size") {
    console.log(message, "width:", this.width, "height:", this.height);
  }
  release() {
    this.dom?.removeEventListener("resize", this.resizeHandler);
    window.removeEventListener("resize", this.resizeHandler);
  }
}
