import { ItemStyle } from "../types";

export const ITEM_STYLE_CONFIG: ItemStyle = {
    depth: 1,
    bevelEnabled: false,
    bevelSegments: 1,
    bevelSize: 0,
    bevelThickness: 0,
    color: '',
    extrudeFaces: {
        material: 'MeshNormalMaterial',
        color: "#ccc",
        opacity: 1,
        metalness: 1,
        roughness: 1,
    },
    crossSection: {
        material: 'MeshNormalMaterial',
        opacity: 0.8,
        color: "#000",
    },
    lineStyle: {
        show: true,
        color: "#A0E5FF",
        width: 2,
    },
    label: {
        show: true,
        distance: 1.3,
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        textStyle: {
            padding: '8px',
            'font-size': '20px',
            color: "#fff",
            bold: true,
            'font-weight': 400,
            'font-style': 'normal',
        },
    },
}

export const MAP_CONFIG = {
    name: "three-auto-map",
    id: 0,
    type: "map",
    json: null,
    animation: true,
    animationDuration: 1000,
    animationEasing: 'power1.inOut',
    animationDelay: 0,
    eventName: 'click',
    itemStyle: ITEM_STYLE_CONFIG,
}