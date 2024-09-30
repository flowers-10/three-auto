import { gsap } from "gsap";
import * as THREE from "three";
import { LoadingType } from "../../types/index";
import { DEFAULT_LOADING, LOADING_MAP } from "../../config";
import { htmlRender } from "../web";

export class CustomLoading {
  public loadingManager: THREE.LoadingManager;
  protected loadingDom: HTMLElement | null;
  protected loadingBarDom: HTMLElement | null;
  protected loadingCounterDom: HTMLElement | null;
  constructor(type: LoadingType) {
    this.createBar(type);
    this.loadingDom = document.querySelector(".ta-loading");
    this.loadingBarDom = document.querySelector(".ta-loading__bar");
    this.loadingCounterDom = document.querySelector(".ta-loading__counter");
    this.loadingManager = new THREE.LoadingManager(
      this.loadedBar.bind(this),
      (_, loaded, total) => this.progressBar(type, loaded, total),
      (e) => console.error("ThreeAuto.CustomLoading:", e)
    );
    // finally
    setTimeout(() => {
      this.loadedBar()
    }, 30000);
  }
  private createBar(type: LoadingType = "default") {
    this.dispose();
    const loadingNode = LOADING_MAP.get(type) || DEFAULT_LOADING;
    htmlRender(loadingNode, document.body);
  }
  private loadedBar() {
    if (this.loadingDom) {
      gsap.set(this.loadingDom.style, { opacity: 1 });
      gsap.to(this.loadingDom.style, {
        duration: 2,
        opacity: 0,
        ease: "power1.inOut",
        onComplete: () => this.loadingDom?.remove(),
      });
    }

    setTimeout(() => {
      if (this.loadingBarDom) {
        this.loadingBarDom.style.transform = "scaleX(0)";
        this.loadingBarDom.style.transformOrigin = "100% 0";
        this.loadingBarDom.style.transition = "transform 0.8s ease-in-out";
      }
    }, 600);

  }
  private progressBar(type: LoadingType = "default", loaded: number, total: number) {
    const progress = loaded / total;
    if (this.loadingCounterDom) {
      this.loadingCounterDom.textContent = (progress * 100).toFixed(2) + "%";
    }
    if (type === "default") {
      if (this.loadingBarDom) {
        this.loadingBarDom.style.transform = `scaleX(${progress})`;
      }
    }
  }
  private dispose() {
    if (this.loadingDom) this.loadingDom.remove();
  }
}
