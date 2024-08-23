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
  keyframes?: CSSKeyframesRule[];
}

interface CSSKeyframesRule {
  name: string;
  keyframes: string[];
}

export function addCSSRules(
  cssRules: Partial<CSSRule[]>,
  keyframes?: CSSKeyframesRule[]
): void {
  const styleElement = document.createElement("style");
  let styleText = "";

  // Generate the CSS text for the rules
  styleText += cssRules
    .filter((rule) => rule !== undefined) // Ensure rule is not undefined
    .map((rule) => {
      if (rule) {
        // Check if rule.rules is defined before calling Object.entries
        const rulesEntries = rule.rules ? Object.entries(rule.rules) : [];
        return `${rule.selector} { ${rulesEntries
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(" ")} } \n`;
      }
    })
    .filter(Boolean) // Remove any undefined or null values
    .join("\n");
  // Generate the CSS text for the keyframes
  if (keyframes && keyframes.length > 0) {
    styleText += keyframes
      .map(
        (keyframe) =>
          `@keyframes ${keyframe.name} { ${keyframe.keyframes.join("\n")} }\n`
      )
      .join("\n");
  }

  styleElement.textContent = styleText;
  document.head.appendChild(styleElement);
}

export function htmlRender(obj: NodeObject, root: HTMLElement): void {
  if (obj.cssRules) {
    addCSSRules(obj.cssRules, obj.keyframes);
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
