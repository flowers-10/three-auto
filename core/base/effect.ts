let activeEffect: ReactiveEffect;
const targetMap = new WeakMap();

class ReactiveEffect {
  private _fn;
  deps: any[] = [];
  constructor(fn: Function) {
    this._fn = fn;
  }

  run() {
    activeEffect = this;
    this._fn();
  }
}

type Effect<T> = (fn: T) => void;
export const effect: Effect<Function> = (fn) => {
  const _effect = new ReactiveEffect(fn);
  _effect.run();
};

export function track(target: Object, key: string | symbol) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  if(dep.has(activeEffect)) return
  dep.add(activeEffect);
  activeEffect.deps.push(dep);

}

export function trigger(target: object, key: string | symbol) {
  console.log('我被触发了',1111111,key);
  
  let depsMap = targetMap.get(target);
  let dep = depsMap.get(key);
  for (let effect of dep) {
    effect.run();
  }
}
