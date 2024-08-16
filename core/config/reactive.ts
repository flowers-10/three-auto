import { track, trigger } from "./effect"
import { isObject } from "../shared"

export const reactive = (raw:any) => {
    return new Proxy(raw,{
        get(target,key,receiver) {
            const res =  Reflect.get(target,key,receiver)
            if(isObject(res)) {
                return reactive(res)
            }
            track(target,key)
            return res

        },
        set(target,key:any,value,receiver) {
            console.log(`Set key:${key}`);
            
            Reflect.set(target,key,value,receiver)
            trigger(target,key)
            return true
        },

    })
}
