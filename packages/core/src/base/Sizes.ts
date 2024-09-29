import { EventEmitter } from "./EventEmitter";
import { SizeConfigType } from "../types/ConfigType";

export class Sizes extends EventEmitter {
  public width: number;
  public height: number;
  public pixelRatio: number;
  private resizeHandler: () => void;
  constructor(config: SizeConfigType) {
    super();
    this.width = 0;
    this.height = 0;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.resizeHandler = () => {
      if (config.type === "parent") {
        const dom = document.getElementById(config.id || '_scene');
        if (dom) {
          this.width = dom.clientWidth;
          this.height = dom.clientHeight;
        } else {
          this.release();
          console.error(
            "ThreeAuto.Sizes: Could not find parent element ID, please check the configuration"
          );
        }
      } else {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }
      this.trigger("resize", null);
    };
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }
  info(message = "Now size") {
    console.log(message, "width:", this.width, "height:", this.height);
  }
  release() {
    window.removeEventListener("resize", this.resizeHandler);
  }
}
