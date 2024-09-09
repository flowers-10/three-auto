import { gsap } from "gsap";
import { htmlRender, NodeObject } from "../web";
import { LoadingType } from "../../types";
import { defaultLoading, loadingMap } from "../../config";

export function createLoading(
  type: LoadingType = "default",
  node: NodeObject = defaultLoading
) {
  const loadingNode = loadingMap.get(type) || node;
  htmlRender(loadingNode, document.body);
}

export function endLoading() {
  const loadingPageElement = document.querySelector(
    ".ta-loading"
  ) as HTMLElement | null;
  const loadingBarElement = document.querySelector(
    ".ta-loading__bar"
  ) as HTMLElement | null;
  if (loadingPageElement) {
    gsap.set(loadingPageElement.style, { opacity: 1 });
    gsap.to(loadingPageElement.style, {
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
      onComplete: () => loadingPageElement.remove(),
    });
  }
  if (loadingBarElement) {
    setTimeout(() => {
      loadingBarElement.style.transform = "scaleX(0)";
      loadingBarElement.style.transformOrigin = "100% 0";
      loadingBarElement.style.transition = "transform 0.8s ease-in-out";
    }, 600);
  }
}

export function progressLoading(
  type: LoadingType = "default",
  loaded: number,
  total: number
) {
  const loadingCounterElement = document.querySelector(
    ".ta-loading__counter"
  ) as HTMLElement | null;
  const progress = loaded / total;

  if (loadingCounterElement) {
    loadingCounterElement.textContent = (progress * 100).toFixed(2) + "%";
  }
  if (type === "default") {
    const loadingBarElement = document.querySelector(
      ".ta-loading__bar"
    ) as HTMLElement | null;
    if (loadingBarElement) {
      loadingBarElement.style.transform = `scaleX(${progress})`;
    }
  }
}
