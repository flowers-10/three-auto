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
      this.dom = document.getElementById(config.id || '_scene');
    } else {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }

    this.resizeHandler = () => {
      if (this.dom) {
        this.width = this.dom.clientWidth;
        this.height = this.dom.clientHeight;
      } else {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }
      this.trigger("resize", null);
    };
    this.resizeHandler();
    if (this.dom) {
      this.dom.addEventListener("resize", this.resizeHandler);
    } else {
      window.addEventListener("resize", this.resizeHandler);
    }
  }
  info(message = "Now size") {
    console.log(message, "width:", this.width, "height:", this.height);
  }
  release() {
    if (this.dom) {
      this.dom.removeEventListener("resize", this.resizeHandler);
    } else {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }
}
