import { htmlRender, NodeObject } from "../web";
import { LoadingType } from "../../types";
import { defaultLoading, circleLoading } from "../../config";

const map = new Map();
map.set("default", defaultLoading);
map.set("circle", circleLoading);
map.set("tradition", defaultLoading);

export function createLoading(
  type: LoadingType = "default",
  node: NodeObject = defaultLoading
) {
  if (map.has(type)) {
    node = map.get(type);
  }
  htmlRender(node, document.body);
}
