import type {Opt, Wrap} from './types';

export const banNull = <V>(value: V): BanNull<V> => (value ?? undefined) as BanNull<V>;
export const identity = <V>(value: V): V => value;

export const ifNotNil = <V, R>(transform: (v: NonNullable<V>) => R) => {
  return (value: V): Opt<R> => (isNotNil(value) ? transform(value) : undefined);
};

export const isEmpty = <T>(value: {[s: string]: T} | ArrayLike<T>): boolean => (Object.keys(value) || value).length === 0;
export const isNil = <V>(value: V): boolean => value === null || value === undefined;
export const isNotNil = <V>(value: V): value is NonNullable<V> => !isNil(value);
export const noop = () => {};

export const stub = <Res = undefined>({delay = 2, name = 'task', result}: StubO<Res> = {}) => {
  return async <Src extends unknown[] = [void]>(...src: Src): Promise<Res> => {
    console.log(`[Stub ${name}]: started with`, ...src);
    await wait(delay * 1000);
    console.log(`[Stub ${name}]: ended with`, result);
    return result as Res;
  };
};

export const unwrap = <V>(wrap: Wrap<V>): V => (wrap instanceof Function ? wrap() : wrap);
export const wait = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay));

// TYPES ===================================================================================================================================
export type StubO<Res> = {
  delay?: number;
  name?: string;
  result?: Res;
};
type BanNull<T> = T extends null ? undefined : T;
