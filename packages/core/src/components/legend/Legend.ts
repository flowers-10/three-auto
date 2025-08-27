import * as THREE from "three";
import BaseThree from "../../base/BaseThree";
import { ThreeInstance } from "../../base";
import { htmlRender } from "../web";
import { DataItem } from '../../types'

export interface LegendOptions {
    show?: boolean;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
    orient?: 'horizontal' | 'vertical';
    align?: 'auto' | 'left' | 'right';
    padding?: number | number[];
    itemGap?: number;
    itemWidth?: number;
    itemHeight?: number;
    itemStyle?: Record<string, any>;
    lineStyle?: Record<string, any>;
    textStyle?: Record<string, any>;
    formatter?: (params: any) => string;
    inactiveColor?: string;
    icon?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
    data?: (DataItem | undefined)[];
}

export class Legend extends BaseThree {
    options: LegendOptions;
    group: THREE.Group;
    legendElement: HTMLElement = document.createElement('div');
    selectedMap: Map<string, boolean> = new Map();

    constructor(options: LegendOptions, instance: ThreeInstance) {
        super(instance);
        this.options = this.mergeDefaultOptions(options);
        this.group = new THREE.Group();

        if (!this.options.data?.length) throw new Error('Invalid data for legend');
        // Initialize selection state
        this.options.data.forEach(item => {
            if (item && item.name) {
                this.selectedMap.set(item.name, item.selected !== false);
            }
        });
        this.createLegend();
    }

    mergeDefaultOptions(options: LegendOptions): LegendOptions {
        return {
            show: true,
            z: 2,
            left: 'auto',
            top: 'auto',
            right: 'auto',
            bottom: 'auto',
            width: 'auto',
            height: 'auto',
            orient: 'horizontal',
            align: 'auto',
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            itemStyle: {},
            lineStyle: {},
            textStyle: {
                'font-size': '12px',
                color: '#333',
                'font-weight': 'normal'
            },
            inactiveColor: '#ccc',
            icon: 'rect',
            ...options
        };
    }

    createLegend() {
        if (!this.options.show) {
            return;
        }

        // Create container
        const containerStyle: Record<string, any> = {
            position: 'absolute',
            'z-index': this.options.z,
            'user-select': 'none',
            display: 'flex',
            'flex-direction': this.options.orient === 'vertical' ? 'column' : 'row',
            'flex-wrap': this.options.orient === 'horizontal' ? 'wrap' : 'nowrap',
            margin: '0 auto'
        };

        // Handle position
        if (this.options.left !== 'auto') {
            containerStyle.left = typeof this.options.left === 'number' ? `${this.options.left}px` : this.options.left;
        }
        if (this.options.top !== 'auto') {
            containerStyle.top = typeof this.options.top === 'number' ? `${this.options.top}px` : this.options.top;
        }
        if (this.options.right !== 'auto') {
            containerStyle.right = typeof this.options.right === 'number' ? `${this.options.right}px` : this.options.right;
        }
        if (this.options.bottom !== 'auto') {
            containerStyle.bottom = typeof this.options.bottom === 'number' ? `${this.options.bottom}px` : this.options.bottom;
        }

        // Handle dimensions
        if (this.options.width !== 'auto') {
            containerStyle.width = typeof this.options.width === 'number' ? `${this.options.width}px` : this.options.width;
        }
        if (this.options.height !== 'auto') {
            containerStyle.height = typeof this.options.height === 'number' ? `${this.options.height}px` : this.options.height;
        }

        // Handle padding
        if (typeof this.options.padding === 'number') {
            containerStyle.padding = `${this.options.padding}px`;
        } else if (Array.isArray(this.options.padding)) {
            const [top, right, bottom, left] = this.options.padding.length === 4
                ? this.options.padding
                : [...this.options.padding, ...this.options.padding];
            containerStyle.padding = `${top}px ${right}px ${bottom}px ${left}px`;
        }

        // Create container element
        this.legendElement = htmlRender({
            tag: 'div',
            className: 'three-auto-legend',
            style: containerStyle
        }, this._canvas.parentElement || document.body);

        // Create legend items
        if (this.options.data) {
            const legendItems = this.options.data
                .filter((item): item is DataItem => item !== undefined && item.name !== undefined)
                .map((item, index) => this.createLegendItem(item, index))
                .filter((item): item is any => item !== null);

            // Add legend items to container
            legendItems.forEach(item => {
                if (item) {
                    htmlRender(item, this.legendElement);
                }
            });
        }
    }

    createLegendItem(item: DataItem, index: number): any {
        if (!item || !item.name) return null;

        const isSelected = this.selectedMap.get(item.name) !== false;
        const itemColor = isSelected ? (item.color || '#000') : this.options.inactiveColor || '#ccc';
        const iconType = item.icon || this.options.icon || 'rect';
        const align = this.options.align || 'auto';

        // Legend icon element
        const iconElement = {
            tag: 'span',
            style: {
                display: iconType === 'none' ? 'none' : 'inline-block',
                width: `${this.options.itemWidth || 25}px`,
                height: `${iconType === 'circle' ? (this.options.itemWidth || 25) : (this.options.itemHeight || 14)}px`,
                'background-color': itemColor,
                ...this.getIconStyle(iconType),
                'margin-right': align === 'right' ? '0' : '5px',
                'margin-left': align === 'right' ? '5px' : '0',
                ...(this.options.lineStyle || {})
            }
        };

        // Legend text element
        const textElement = {
            tag: 'span',
            children: this.formatLegendText(item, index),
            style: {
                ...(this.options.textStyle || {}),
                color: isSelected ? (this.options.textStyle?.color || '#333') : (this.options.inactiveColor || '#ccc')
            }
        };

        // Determine children order based on align
        let children = [];
        if (align === 'right') {
            children = [textElement, iconElement];
        } else {
            children = [iconElement, textElement];
        }

        // Legend item container
        const itemContainer = {
            tag: 'div',
            style: {
                display: 'flex',
                'align-items': 'center',
                'justify-content': align === 'auto' ? 'flex-start' : align === 'right' ? 'flex-end' : 'flex-start',
                cursor: 'pointer',
                margin: `0 ${this.options.itemGap || 10}px ${this.options.orient === 'vertical' ? (this.options.itemGap || 10) + 'px' : '0'} 0`,
                opacity: isSelected ? 1 : 0.5,
                ...(this.options.itemStyle || {})
            },
            children: children
        };

        // Add click event
        const self = this;
        const originalElement = htmlRender(itemContainer as any, this.legendElement);
        originalElement.addEventListener('click', function () {
            if (item.name) {
                self.toggleSelect(item.name);
            }
        });
        return {
            tag: 'div',
            children: itemContainer
        };
    }

    // 根据图标类型返回对应的样式
    getIconStyle(iconType?: string): Record<string, any> {
        switch (iconType) {
            case 'circle':
                return { 'border-radius': '50%' };
            case 'rect':
                return { 'border-radius': '0' };
            case 'roundRect':
                return { 'border-radius': '2px' };
            case 'triangle':
                return {
                    'clip-path': 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    'background-clip': 'padding-box'
                };
            case 'diamond':
                return {
                    'clip-path': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    'background-clip': 'padding-box'
                };
            case 'pin':
                return {
                    'clip-path': 'polygon(50% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    'background-clip': 'padding-box'
                };
            case 'arrow':
                return {
                    'clip-path': 'polygon(0% 0%, 100% 50%, 0% 100%)',
                    'background-clip': 'padding-box'
                };
            case 'none':
                return { 'display': 'none' };
            default:
                return { 'border-radius': '0' }; // 默认为矩形
        }
    }

    formatLegendText(item: DataItem, index: number): string {
        if (this.options.formatter) {
            return this.options.formatter({ data: this.options.data, seriesIndex: index, value: item.value, name: item.name, color: item.color, percent: item.percent });
        }
        return item.name || '';
    }

    toggleSelect(name: string): void {
        if (!name) return;

        const isSelected = this.selectedMap.get(name) !== false;
        this.selectedMap.set(name, !isSelected);
        // Update legend display
        this.updateLegend();

        // Update chart visibility
        this.updateChartVisibility();

        const legendChangeEvent = new CustomEvent('legend-change', {
            detail: {
                name,
                selected: !isSelected,
                selectedMap: Object.fromEntries(this.selectedMap)
            }
        });
        this._canvas.dispatchEvent(legendChangeEvent);
    }

    updateLegend(): void {
        if (this.legendElement) {
            this.legendElement.innerHTML = '';
            if (this.options.data) {
                const legendItems = this.options.data
                    .filter((item): item is DataItem => item !== undefined && item.name !== undefined)
                    .map((item, index) => this.createLegendItem(item, index))
                    .filter((item): item is any => item !== null);

                legendItems.forEach(item => {
                    if (item) {
                        htmlRender(item, this.legendElement);
                    }
                });
            }
        }
    }

    updateChartVisibility(): void {
        this.group.children.forEach(item => {
            if (item.userData && item.userData.name) {
                const isSelected = this.selectedMap.get(item.userData.name) !== false;
                item.visible = isSelected;
            }
        });
    }

    update(): void {
        // Reserved for future updates
    }

    dispose(): void {
        if (this.legendElement) {
            this.legendElement.remove();
        }
    }
}
