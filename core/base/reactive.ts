import { track, trigger } from "../base/effect"
import { isObject } from "../shared"

export const reactive = (raw:Object) => {
    return new Proxy(raw,{
        get(target,key,receiver) {
            const res =  Reflect.get(target,key,receiver)
            if(isObject(res)) {
                return reactive(res)
            }
            track(target,key)
            return res

        },
        set(target,key,value,receiver) {
            const res = Reflect.set(target,key,value,receiver)
            trigger(target,key)
            return res
        },

    })
}
