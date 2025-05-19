import { SeriesConfig } from "../types";

export const PIE_CONFIG: SeriesConfig =   {
  type: 'pie',
  name: 'three-auto-pie',
  shadow: false,
  data: [],
  itemStyle: {},
  transparent: true,
  opacity: 0.5,
  height: 1,
  heightMode: 'height',
  radius: [8, 10],
  gap: 0.1,
  eventName: 'mousemove',
  animation: true,
  animationDuration: 350,
  animationEasing: 'power1.inOut',
  animationDelay: 0,
  animationDurationUpdate: 3000,
  emphasis:{
    selectedMode: 'offset',
    disabled:false,
    scaleSize: 4,
  },
  label: {
    show: true,
    distance: 0,
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