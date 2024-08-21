interface CSSRule {
  selector: string;
  rules: Record<string, string>;
}
// Base Node
export interface NodeObject {
  tag: string;
  className?: string;
  style?: Record<string, string>;
  children?: (NodeObject | string)[] | string;
  cssRules?: Partial<CSSRule[]>;
}

export function addCSSRules(cssRules: Partial<CSSRule[]>): void {
  const styleElement = document.createElement("style");
  const styleText = cssRules
    .map((rule) => {
      if (rule)
        return `${rule.selector} { ${Object.entries(rule.rules)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(" ")} }`;
    })
    .join("\n");

  styleElement.textContent = styleText;
  document.head.appendChild(styleElement);
}

export function htmlRender(obj: NodeObject, root: HTMLElement): void {
  if (obj.cssRules) {
    addCSSRules(obj.cssRules);
  }

  const el = document.createElement(obj.tag);

  if (obj.className) {
    el.className = obj.className;
  }

  if (obj.style) {
    Object.entries(obj.style).forEach(([prop, value]) => {
      el.style[prop as any] = value;
    });
  }

  if (typeof obj.children === "string") {
    const text = document.createTextNode(obj.children);
    el.appendChild(text);
  } else if (Array.isArray(obj.children)) {
    obj.children.forEach((child) => {
      if (typeof child === "object" && child !== null) {
        htmlRender(child, el);
      } else if (typeof child === "string") {
        const text = document.createTextNode(child);
        el.appendChild(text);
      }
    });
  }

  root.appendChild(el);
}
