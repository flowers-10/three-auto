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
        const { hideDelay, className = 'three-auto-tooltip', background = 'rgba(255,255,255,1)', borderWidth = 1, borderStyle = 'solid', padding = '6px 12px', textStyle = {
            'font-size': '18px',
            color: "#000000",
            'font-weight': 400,
            'font-style': 'normal',
        }, } = options

        this.tooltipElement = htmlRender({
            tag: 'div', className, style: {
                'z-index': 9999,
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                'border-radius': '8px',
                'box-shadow': '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.05),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035)',
                'background': background,
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                borderWidth: borderWidth + 'px',
                padding,
                borderStyle,
                transition: 'opacity ' + hideDelay / 1000 + 's',
                visibility: 'hidden',
                ...textStyle
            }
        }, (this._canvas.parentElement || document.body));
        this.group = group;
        this.options = options;
        this.update();
    }
    createTooltip(option: any, root: HTMLElement) {
        root.innerHTML = ''
        if (option.title) {
            htmlRender({
                tag: 'div', children: option.title
            }, root)
        }
        const list = []
        if (option.color) {
            list.push({
                tag: 'span', style: {
                    display: 'inline-block',
                    width: this.options.textStyle['font-size'],
                    height: this.options.textStyle['font-size'],
                    'background-color': option.color,
                    'border-radius': '50%',
                    'margin-right': '6px',
                }
            })
        }
        if (option.name) {
            list.push({ tag: 'span', children: option.name })
        }

        list.push({
            tag: 'span', children: String(option.value || 0), style: { 'margin-left': '30px' }
        })

        htmlRender({
            tag: 'div', children: list, style: {
                padding: '6px 0',
                display: 'flex',
                'align-items': 'center'
            }
        }, root)
        if (option.xName) {
            htmlRender({
                tag: 'div', children: [{ tag: 'span', children: '- x:' }, {
                    tag: 'span', children: option.xName, style: { 'margin-left': '30px' }
                }], style: {
                    padding: '6px 0',
                    display: 'flex',
                    'align-items': 'center'
                }
            }, root)
        }
        if (option.yName) {
            htmlRender({
                tag: 'div', children: [{ tag: 'span', children: '- y:' }, {
                    tag: 'span', children: option.yName, style: { 'margin-left': '30px' }
                }], style: {
                    padding: '6px 0',
                    display: 'flex',
                    'align-items': 'center'
                }
            }, root)
        }
    }
    /**
     * 计算并调整tooltip位置，避免超出屏幕
     * @param x 鼠标X坐标
     * @param y 鼠标Y坐标
     * @returns 调整后的坐标对象
     */
    adjustTooltipPosition(x: number, y: number): { x: number, y: number } {
        const viewportWidth = this._canvas.clientWidth || window.innerWidth || document.documentElement.clientWidth;
        const viewportHeight = this._canvas.clientHeight || window.innerHeight || document.documentElement.clientHeight;

        const tooltipRect = this.tooltipElement.getBoundingClientRect();
        const tooltipWidth = tooltipRect.width;
        const tooltipHeight = tooltipRect.height;

        let posX = x + (this.options.offsetX || 20);
        let posY = y + (this.options.offsetY || 20);

        if (posX + tooltipWidth > viewportWidth) {
            posX = x - tooltipWidth - (this.options.offsetX || 20);
        }

        if (posY + tooltipHeight > viewportHeight) {
            posY = y - tooltipHeight - (this.options.offsetY || 20);
        }

        posX = Math.max(0, posX);
        posY = Math.max(0, posY);

        return { x: posX, y: posY };
    }

    update() {
        this._instance.onTick(() => {
            const intersects = this._raycaster.onRaycasting();
            this.tooltipElement.style.visibility = 'hidden';

            this.group?.children?.forEach(item => {
                if (intersects && intersects[0].object.uuid === item.uuid) {
                    document.body.style.cursor = 'pointer';

                    const mouseX = this.mousemove.eventOffset.x;
                    const mouseY = this.mousemove.eventOffset.y;

                    const position = this.adjustTooltipPosition(mouseX, mouseY);

                    this.tooltipElement.style.left = position.x + 'px';
                    this.tooltipElement.style.top = position.y + 'px';
                    this.tooltipElement.style.visibility = 'visible';
                    this.tooltipElement.style.borderColor = item.userData.color;

                    if (!this.uuid || this.uuid !== item.uuid) {
                        this.uuid = item.uuid;
                        this.createTooltip(item.userData, this.tooltipElement);
                    }
                    this.previous = item;
                }

                item.children.forEach(itemX => {
                    if (intersects && intersects[0].object.uuid === itemX.uuid) {
                        document.body.style.cursor = 'pointer';

                        const mouseX = this.mousemove.eventOffset.x;
                        const mouseY = this.mousemove.eventOffset.y;

                        const position = this.adjustTooltipPosition(mouseX, mouseY);

                        this.tooltipElement.style.left = position.x + 'px';
                        this.tooltipElement.style.top = position.y + 'px';
                        this.tooltipElement.style.visibility = 'visible';
                        this.tooltipElement.style.borderColor = item.userData.color;

                        if (!this.uuid || this.uuid !== item.uuid) {
                            this.uuid = item.uuid;
                            this.createTooltip(item.userData, this.tooltipElement);
                        }
                        this.previous = itemX;
                    }
                });
            });
        });
    }
    dispose(): void {
        this.tooltipElement.remove()
    }
}
