import { gsap } from "gsap";
import { htmlRender, NodeObject } from "../web";
import { LoadingType } from "../../types";
import { defaultLoading, loadingMap } from "../../config";

export function createLoading(
  type: LoadingType = "default",
  node: NodeObject = defaultLoading
) {
  if (loadingMap.has(type)) {
    node = loadingMap.get(type);
  }
  htmlRender(node, document.body);
}

export function endLoading() {
  const loadingBarElement = document.querySelector(
    "._loading_bar_"
  ) as HTMLElement | null;
  const element = document.querySelector(
    "._loading_page_"
  ) as HTMLElement | null;
  if (element && element.style) {
    gsap.set(element.style, { opacity: 1 });
    gsap.to(element.style, {
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
    });
    setTimeout(() => {
      const element = document.querySelector("._loading_page_");
      if (element) {
        element.remove();
      }
    }, 2000);
    if (loadingBarElement && loadingBarElement.style) {
      window.setTimeout(() => {
        loadingBarElement.style.transform = "scaleX(0)";
        loadingBarElement.style.transformOrigin = "100% 0";
        loadingBarElement.style.transition = "transform 0.8s ease-in-out";
      }, 100);
    }
  }
}

export function progressLoading(
  type: LoadingType = "default",
  loaded: number,
  total: number
) {
  const loadingCounterElement = document.querySelector(
    "._loading_counter_"
  ) as HTMLElement | null;

  const progress = loaded / total;

  if (loadingCounterElement) {
    loadingCounterElement.textContent = (progress * 100).toFixed(2) + "%";
  }
  switch (type) {
    case "circle":
      break;
    default:
      const loadingBarElement = document.querySelector(
        "._loading_bar_"
      ) as HTMLElement | null;
      if (!loadingBarElement) return;
      loadingBarElement.style.transform = `scaleX(${progress})`;
      break;
  }
}
