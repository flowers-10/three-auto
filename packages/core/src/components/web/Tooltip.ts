import * as THREE from "three";
import BaseThree from "../../base/BaseThree";
import { ThreeInstance } from "../../base";
import { htmlRender } from "./htmlRender";

export class Tooltip extends BaseThree {
    uuid: string | null = null;
    previous: THREE.Object3D | null = null;
    options: any;
    tooltipElement: HTMLElement;
    group: THREE.Group;
    constructor(instance: ThreeInstance, group: THREE.Group, options: any) {
        super(instance);
        const {hideDelay} = options
        this.tooltipElement = htmlRender({
            tag: 'div', style: {
                '': 'none',
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                padding: '6px 12px',
                'border-radius': '8px',
                'font-size': '16px',
                color: "#000",
                'box-shadow': '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.05),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035)',
                bold: true,
                'font-weight': 400,
                'font-style': 'normal',
                'background-color': '#fff',
                'position': 'absolute',
                'top': '0px',
                transition: 'opacity ' + hideDelay / 1000 + 's',
                opacity: 0
            }
        }, document.body);
        this.group = group;
        this.options = options;
        this.update();
    }
    createTooltip(option: any, root: HTMLElement) {
        root.innerHTML = ''
        if (option.title) {
            htmlRender({
                tag: 'div', children: option.title, style: {
                    'font-size': '16px',
                    color: "#000",
                }
            }, root)
        }
        const list = []
        if (option.color) {
            list.push({
                tag: 'span', style: {
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    'background-color': option.color,
                    'border-radius': '50%',
                    'margin-right': '6px',
                }
            })
        }
        if (option.name) {
            list.push({ tag: 'span', children: option.name })
        }
        if (option.value) {
            list.push({
                tag: 'span', children: String(option.value), style: { 'font-weight': 'bold', 'margin-left': '30px' }
            })
        }
        htmlRender({
            tag: 'div', children: list, style: {
                padding: '6px 0',
                'font-size': '16px',
                color: "#000",
                display: 'flex',
                'align-items': 'center'
            }
        }, root)
    }

    update() {
        this._instance.onTick(() => {
            const intersects = this._raycaster.onRaycasting();
            this.tooltipElement.style.opacity = '0';

            this.group.children.forEach(item => {
                item.children.forEach(itemX => {
                    if (intersects && intersects[0].object.uuid === itemX.uuid) {
                        document.body.style.cursor = 'pointer';
                        this.tooltipElement.style.left = this.eventOffset.x + 20 + 'px'
                        this.tooltipElement.style.top = this.eventOffset.y + 20 + 'px'
                        this.tooltipElement.style.opacity = '1'
                        this.tooltipElement.style.border = '1px solid ' + item.userData.color

                        if (!this.uuid || this.uuid !== item.uuid) {
                            this.uuid = item.uuid
                            this.createTooltip(item.userData, this.tooltipElement)
                        }
                        this.previous = itemX
                    }
                })
            })
        })
    }

}