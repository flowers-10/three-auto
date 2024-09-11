export const extend = Object.assign

export const EMPTY_OBJ = {}

export function isObject(val:any):boolean {
  return val !== null && typeof val === 'object'
}

export const hasChanged = (val:any, newVal:any) => {
  return !Object.is(val, newVal)
}

export const hasOwn = (val:any, key:string) => Object.prototype.hasOwnProperty.call(val, key)

export const mergeDeep = (target: any, source: any): any => {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = target[key] || {};
      mergeDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
