export declare const extend: {
    <T extends {}, U>(target: T, source: U): T & U;
    <T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
};
export declare const EMPTY_OBJ: {};
export declare function isObject(val: any): boolean;
export declare const hasChanged: (val: any, newVal: any) => boolean;
export declare const hasOwn: (val: any, key: string) => boolean;
