export default class EventEmitter {
    private callbacks;
    constructor();
    on(_names: string | string[], callback: Function): this | false;
    off(_names: string | string[]): this | false;
    trigger(_name: string, _args: any): any;
    private resolveNames;
    private resolveName;
}
