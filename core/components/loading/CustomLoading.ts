import * as THREE from "three";
import { gsap } from "gsap";
import { LoadingType } from "../../types/index";
import { createLoading } from "./loadingScheduler";

export class CustomLoading {
  public loadingManager: THREE.LoadingManager;
  constructor(type: LoadingType) {
    this.createBar(type);
    this.loadingManager = new THREE.LoadingManager(
      // Loaded
      () => {
        this.loadedBar();
      },
      // Progress
      (_, loaded, total) => {
        this.progressBar(loaded, total);
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
  loadedBar() {
    // todo ... schedule
    const loadingBarElement = document.querySelector(
      ".loading-bar"
    ) as HTMLDivElement;
    const element = document.querySelector(".loading-page") as HTMLDivElement;
    if (element) {
      gsap.set(element.style, { opacity: 1 });
      gsap.to(element.style, {
        duration: 2,
        opacity: 0,
        ease: "power1.inOut",
      });
      window.setTimeout(() => {
        loadingBarElement.style.transform = "scaleX(0)";
        loadingBarElement.style.transformOrigin = "100% 0";
        loadingBarElement.style.transition = "transform 0.8s ease-in-out";
      }, 100);
    }
  }
  progressBar(loaded: number, total: number) {
     // todo ... schedule
    const loadingBarElement = document.querySelector(
      ".loading-bar"
    ) as HTMLDivElement;
    const progressRatio = loaded / total;
    loadingBarElement.style.transform = `scaleX(${progressRatio})`;
  }
  dispose() {
    const element = document.querySelector(".loading-page");
    if (element) {
      element.remove();
    }
  }
}
