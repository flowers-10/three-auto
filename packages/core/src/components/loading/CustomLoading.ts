import * as THREE from "three";
import { LoadingType } from "../../types/index";
import { createLoading, endLoading, progressLoading } from "./loadingScheduler";

export class CustomLoading {
  public loadingManager: THREE.LoadingManager;
  constructor(type: LoadingType) {
    this.createBar(type);
    this.loadingManager = new THREE.LoadingManager(
      this.loadedBar.bind(this),
      (_, loaded, total) => this.progressBar(type, loaded, total),
      (e) => console.error("Loading error:", e)
    );
  }

  private createBar(type: LoadingType) {
    this.dispose();
    createLoading(type);
  }

  private loadedBar() {
    endLoading();
  }

  private progressBar(type: LoadingType, loaded: number, total: number) {
    progressLoading(type, loaded, total);
  }

  private dispose() {
    const element = document.querySelector(".ta-loading");
    if (element) element.remove();
  }
}
