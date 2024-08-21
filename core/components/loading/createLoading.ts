import { htmlRender, NodeObject } from "../web";
import { LoadingType } from "../../types";

const any: NodeObject = {
  tag: "div",
  className: "loading-page",
  style: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    "background-color": "rgba(0, 0, 0, 0.7)",
    "pointer-events": "none",
  },
  cssRules: [],
  children: [
    {
      tag: "div",
      className: "loading-bar",
      style: {
        position: "absolute",
        top: "50%",
        width: "100%",
        height: "2px",
        "background-color": "#ffffff",
        transform: "scaleX(0)",
        "transform-origin": "top left",
        transition: "transform  0.8s",
      },
    },
  ],
};

const map = new Map();
map.set("default", any);
map.set("circle", any);
map.set("gradient", any);

export function createLoading(type: LoadingType = 'default', node: NodeObject) {
  if(!node) {
    node = map.get(type)
  }
  htmlRender(node, document.body);
}
