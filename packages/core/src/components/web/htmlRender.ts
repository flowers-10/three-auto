interface CSSRule {
  selector: string;
  rules: Record<string, string>;
}
// Base Node
export interface NodeObject {
  tag: string;
  className?: string;
  style?: Record<string, string | number | boolean>;
  children?: (NodeObject | string)[] | string | number;
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

export function htmlRender(obj: NodeObject, root: HTMLElement = document.body): HTMLElement {
  if (obj.cssRules) {
    addCSSRules(obj.cssRules, obj.keyframes);
  }

  const el = document.createElement(obj.tag);

  if (obj.className) {
    el.className = obj.className;
  }

  if (obj.style) {
    Object.entries(obj.style).forEach(([prop, value]) => {
      el.style[prop as any] = String(value);
    });
  }

  if (typeof obj.children === "string" || typeof obj.children === "number") {
    const childrenStr = String(obj.children);
    // 检查字符串是否包含HTML标签
    if (typeof childrenStr === "string" && /<[a-z][\s\S]*>/i.test(childrenStr)) {
      // 安全检查：过滤掉可能的危险标签和属性
      const safeHtml = sanitizeHtml(childrenStr);
      el.innerHTML = safeHtml;
    } else {
      const text = document.createTextNode(childrenStr);
      el.appendChild(text);
    }
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
  return el
}

// 添加HTML安全过滤函数
function sanitizeHtml(html: string): string {
  // 创建一个临时元素
  const tempEl = document.createElement('div');
  tempEl.innerHTML = html;
  
  // 移除危险标签和属性
  const dangerousTags = ['script', 'iframe', 'object', 'embed', 'form'];
  const dangerousAttrs = ['onerror', 'onload', 'onclick', 'onmouseover', 'javascript:'];
  
  // 移除危险标签
  dangerousTags.forEach(tag => {
    const elements = tempEl.getElementsByTagName(tag);
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode?.removeChild(elements[i]);
    }
  });
  
  // 移除危险属性
  const allElements = tempEl.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    for (let j = 0; j < element.attributes.length; j++) {
      const attr = element.attributes[j];
      const attrName = attr.name.toLowerCase();
      const attrValue = attr.value.toLowerCase();
      
      // 检查属性名和值是否包含危险内容
      const isDangerous = dangerousAttrs.some(dangerous => 
        attrName.includes(dangerous) || attrValue.includes(dangerous)
      );
      
      if (isDangerous || attrName.startsWith('on')) {
        element.removeAttribute(attr.name);
        j--; 
      }
    }
  }
  
  return tempEl.innerHTML;
}
