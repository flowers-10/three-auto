import * as THREE from "three";
import { LoadingType } from "../../types/index";
import { createLoading, endLoading, progressLoading } from "./loadingScheduler";

export class CustomLoading {
  public loadingManager: THREE.LoadingManager;
  constructor(type: LoadingType) {
    this.createBar(type);
    this.loadingManager = new THREE.LoadingManager(
      // Loaded
      () => {
        this.loadedBar(type);
      },
      // Progress
      (_, loaded, total) => {
        this.progressBar(type,loaded, total);
      },
      // Error
      (e) => {
        console.error("Loading error:", e);
      }
    );
  }
  createBar(type: LoadingType) {
    this.dispose();
    createLoading(type);
  }
  loadedBar(type: LoadingType) {
    endLoading(type)
  }
  progressBar(type:LoadingType,loaded: number, total: number) {
   progressLoading(type,loaded,total)
  }
  dispose() {
    const element = document.querySelector(".loading-page");
    if (element) {
      element.remove();
    }
  }
}
