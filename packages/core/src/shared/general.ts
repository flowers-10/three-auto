export const extend = Object.assign

export const EMPTY_OBJ = {}

export function isObject(val:any):boolean {
  return val !== null && typeof val === 'object'
}

export const hasChanged = (val:any, newVal:any) => {
  return !Object.is(val, newVal)
}

export const hasOwn = (val:any, key:string) => Object.prototype.hasOwnProperty.call(val, key)

export function mergeConfig(target: any, source: any): any {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (typeof targetValue === 'object' && targetValue !== null && typeof sourceValue === 'object' && sourceValue !== null) {
        target[key] = mergeConfig(targetValue, sourceValue);
      } else {
        if (sourceValue !== undefined) {
          target[key] = sourceValue;
        }
      }
    }
  }
  return target;
}
