type KeyType = string | number | symbol;
export type ExtendType<T, K extends KeyType, P> = T & { [Key in K]: P };

export type ExtendMultipleTypes<T, Keys extends any[], Props extends any[]> = Keys extends [
    infer FirstKey extends KeyType,
    ...infer RemainingKeys 
  ]
    ? ExtendType<ExtendMultipleTypes<T, RemainingKeys, Props>, FirstKey, Props[0]>
    : T;
