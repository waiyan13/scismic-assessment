export type NestedKeys<T> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}.${NestedKeys<T[K]>}` | K
    : K;
}[keyof T & string];
