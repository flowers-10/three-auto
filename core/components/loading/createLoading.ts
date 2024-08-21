import { htmlRender, NodeObject } from "../web";

const tree: NodeObject = {
  tag: "div",
  className: "container",
  style: { color: "blue",width: '100px',height:'100px',position:'absulte' },
  cssRules: [{ selector: ".container", rules: { "font-size": "16px" } }],
  children: [{ tag: "span", className: "text", children: "hello world" }],
};

export function createLoading(node:NodeObject = tree) {
  htmlRender(node,document.body)
}