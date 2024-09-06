import { isObject } from "./general";

export function generateTypeGuard<T extends object>(
  type: T
): (obj: any) => obj is T {
  const requiredKeys = Object.keys(type);
  return (obj: any): obj is T => {
    if (!isObject(obj)) {
      return false;
    }
    const keys = Object.keys(obj);
    return requiredKeys.every((key) => keys.includes(key));
  };
}
