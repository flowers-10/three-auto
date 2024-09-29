import { NodeObject } from "../components";

export const DEFAULT_LOADING: NodeObject = {
  tag: "div",
  className: "ta-loading",
  style: {
    "z-index": 9999,
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    "background-color": "rgba(0, 0, 0, 0.7)",
  },
  cssRules: [],
  children: [
    {
      tag: "div",
      className: "ta-loading__bar",
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
    {
      tag: "div",
      className: "ta-loading__counter",
      style: {
        "font-size": "60px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,0)",
        color: "#ffffff",
      },
      children: "0%",
    },
  ],
};

const sum = 32;
export const CIRCLE_LOADING: NodeObject = {
  tag: "div",
  className: "ta-loading",
  style: {
    "z-index": 9999,
    position: "absolute",
    top: "0",
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    "background-color": "#111111",
  },
  cssRules: Array.from({ length: sum }, (_, index) => ({
    selector: `._circle_:nth-child(${index + 1})`,
    rules: {
      transform: `rotate(${(360 / sum) * (index + 1)
        }deg) translate3d(120px, 0, 0)`,
      "animation-delay": `${index * (3 / sum)}s`,
    },
  })),
  keyframes: [
    {
      name: "ta-loading__spin",
      keyframes: [
        "from { opacity:0 }",
        "to { opacity:0.6; transform: translate3d(-4px, -4px, 670px) }",
      ],
    },
  ],
  children: [
    {
      tag: "div",
      className: "ta-loading__bar",
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        perspective: "500px",
        "background-color": "#111",
        "pointer-events": "none",
      },
      children: Array.from({ length: sum }, () => ({
        tag: "i",
        className: "_circle_",
        style: {
          display: "block",
          position: "absolute",
          width: "8px",
          height: "8px",
          "border-radius": "8px",
          opacity: "0",
          background: "rgba(255, 255, 255, 0.5)",
          "box-shadow": "0px 0px 10px rgba(255, 255, 255, 0.4)",
          "animation-name": "ta-loading__spin",
          "animation-duration": "3s",
          "animation-iteration-count": "infinite",
          "animation-timing-function": "ease-in-out",
        },
      })),
    },
    {
      tag: "div",
      className: "ta-loading__counter",
      style: {
        "font-size": "60px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: "#ffffff",
      },
      children: "0%",
    },
  ],
};

const LOADING = "LOADING";
const factor = [1, 2, 5, 10];
export const FADE_LOADING: NodeObject = {
  tag: "div",
  className: "ta-loading",
  style: {
    "z-index": 9999,
    position: "absolute",
    top: "0",
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    "background-color": "#000",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  cssRules: [
    ...Array.from({ length: 7 }, (_, index) => ({
      selector: `.ta-loading__str > span:nth-of-type(${index + 1})`,
      rules: {
        animation: "_letter_fade_ 3s ease-in-out infinite",
        "animation-delay": `${(index + 1) * 0.3}s`,
      },
    })),
    ...Array.from({ length: 4 }, (_, index) => ({
      selector: `.ta-loading__bar span:nth-child(${index + 1})`,
      rules: {
        filter: `blur(${factor[index] * 5}px);`,
      },
    })),
  ],
  keyframes: [
    {
      name: "_letter_fade_",
      keyframes: [
        "0% {opacity: 1;}",
        "50% {opacity: 0;}",
        "100% {opacity: 1;}",
      ],
    },
    {
      name: "ta-loading__fade",
      keyframes: [
        "from {transform: rotate(0);}",
        "to {transform: rotate(360deg);}",
      ],
    },
  ],
  children: [
    {
      tag: "div",
      className: "ta-loading__bar",
      style: {
        position: "relative",
        width: "200px",
        height: "200px",
        "border-radius": "50%",
        background: "linear-gradient(#14ffe9, #ffeb3b, #ff00e0)",
        animation: "ta-loading__fade 0.5s linear infinite",
      },
      children: [...Array.from({ length: 4 }, () => ({
        tag: "span",
        style: {
          position: "absolute",
          width: "200px",
          height: "200px",
          "border-radius": "50%",
          background: "linear-gradient(#14ffe9, #ffeb3b, #ff00e0)",
        },
      })),
      {
        tag: 'div',
        style: {
          position: "absolute",
          top: "10px",
          left: "10px",
          right: "10px",
          bottom: "10px",
          "border-radius": "50%",
          "background-color": "#000",
          "z-index": "1",
        }
      }
      ]
    },
    {
      tag: "div",
      className: "ta-loading__str",
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#35c4f0",
        "z-index": "10",
        "letter-spacing": "2px",
        "font-size": "25px",
      },
      children: Array.from({ length: 7 }, (_, k) => ({
        tag: "span",
        children: LOADING[k],
        style: {
          opacity: "1",
        },
      })),
    },
  ],
};

export const LOADING_MAP = new Map();
LOADING_MAP.set("default", DEFAULT_LOADING);
LOADING_MAP.set("circle", CIRCLE_LOADING);
LOADING_MAP.set("fade", FADE_LOADING);
