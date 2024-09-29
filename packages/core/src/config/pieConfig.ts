import { SeriesConfig } from "../types";

export const PIE_CONFIG: SeriesConfig = {
    name: "three-auto-pie",
    type: 'pie',
    itemStyle: {},
    data: [
      { name: '小学', value: 100, color: '#fcc02a' },
      { name: '中学', value: 200, color: '#f16b91' },
      { name: '大学', value: 300, color: '#187bac' },
      { name: '不学', value: 500, color: '#eeeeee' },
    ],
    height: 20,
    radius: 30,
    gap: 0.5,
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
        'font-size': '6px',
        color: "#fff",
        bold: true,
        'font-weight': 400,
        'font-style': 'normal',
      },
    },
  }