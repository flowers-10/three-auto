type Effect<T> = (fn: T) => void;
export declare const effect: Effect<Function>;
export declare function track(target: Object, key: string | symbol): void;
export declare function trigger(target: object, key: string | symbol): void;
export {};
