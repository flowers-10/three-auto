export interface LabelFilter {
  // Define the structure of a single filter object if needed
  // For example:
  // key: string;
  // value: string | number | boolean;
}

export interface LabelFilterList extends Array<LabelFilter> {}

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
  depth: number;
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
  filterList: LabelFilterList;
  filterStyle: LabelFilterStyle;
}

export interface ExtrudeFacesSettings {
  depth: number;
  bevelEnabled: boolean;
  bevelSegments: number;
  bevelSize: number;
  bevelThickness: number;
}

export interface ExtrudeFaces {
  color: string;
  transparent: boolean;
  metalness: number;
  roughness: number;
  extrudeSettings: ExtrudeFacesSettings;
}

export interface CrossSection {
  transparent: boolean;
  color: string;
}

export interface LineStyle {
  show: boolean;
  depth: number;
  color: string;
  linewidth: number;
}

export type ChartType = 'map' | 'line' | 'bar' | 'pie';

export interface SeriesConfig {
  show?: boolean;
  name?: string;
  id?: number | string;
  type?: ChartType;
  shader?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  code?: number | string;
  json?: any; // Replace 'any'
  lineStyle?: LineStyle;
  label?: LabelStyle;
  extrudeFaces?: ExtrudeFaces;
  crossSection?: CrossSection;
}
