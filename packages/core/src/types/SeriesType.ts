export interface LabelFilter {
  // Define the structure of a single filter object if needed
  // For example:
  // key: string;
  // value: string | number | boolean;
}

export interface LabelFilterList extends Array<LabelFilter> { }

export interface LabelFilterStyle {
  arrangement: "vertical" | "horizontal";
  fontSize: number;
  color: string;
  bold: boolean;
  lineHeight: number;
  fontFamily: string;
}

export interface LabelStyle {
  show: boolean;
  distance: number;
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  textStyle: {
    arrangement: "horizontal" | "vertical";
    fontSize: number;
    color: string;
    bold: boolean;
    lineHeight: number;
    fontFamily: string;
  };
  formatter?: (params: Object | any[]) => string | void
}

export interface ExtrudeFaces {
  color: string;
  opacity: number;
  metalness: number;
  roughness: number;

}

export interface CrossSection {
  opacity: number;
  color: string;
}

export interface LineStyle {
  show: boolean;
  depth: number;
  color: string;
  width: number;
}

export interface ItemStyle {
  extrudeFaces: ExtrudeFaces
  crossSection: CrossSection;
  lineStyle: LineStyle;
  depth: number;
  bevelEnabled: boolean;
  bevelSegments: number;
  bevelSize: number;
  bevelThickness: number;
}

export type ChartType = 'map' | 'line' | 'bar' | 'pie';

export interface SeriesConfig {
  show?: boolean;
  name?: string;
  id?: number | string;
  type?: ChartType;
  castShadow?: boolean;
  receiveShadow?: boolean;
  code?: number | string;
  json?: any; // Replace 'any'
  label?: LabelStyle;
  itemStyle?: ItemStyle;
}
