import { htmlRender, NodeObject } from "./htmlRender";

const obj: NodeObject = {
  tag: "div",
  className: "container",
  style: { color: "blue" },
  cssRules: [{ selector: ".container", rules: { "font-size": "16px" } }],
  children: [{ tag: "span", className: "text", children: "hello world" }],
};

