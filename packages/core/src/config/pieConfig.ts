import { SeriesConfig } from "../types";

export const PIE_CONFIG: SeriesConfig =  {
  type: 'pie',
  name: 'three-auto-pie',
  itemStyle: {},
  data: [],
  opacity: 0.5,
  selectedOffset: 10,
  height: 20,
  heightMode: 'flat',
  radius: 30,
  gap: 0.5,
  eventName: 'click',
  label: {
    show: true,
    distance: 3,
    scale: 1,
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    textStyle: {
      padding: '6px',
      'font-size': '16px',
      color: "#000",
      bold: true,
      'font-weight': 400,
      'font-style': 'normal',
    },
  },
  tooltip: {
    className: 'three-auto-tooltip',
    background: 'rgba(255,255,255,1)',
    show: true,
    borderWidth: 1,
    padding: '15px 20px',
    hideDelay: 100,
    textStyle: {
      'font-size': '18px',
      color: "#000000",
      'font-weight': 400,
      'font-style': 'normal',
    },
  }
}