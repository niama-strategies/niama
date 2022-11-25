import type {Get} from 'type-fest';

import type {Dict, Rec} from './types';

export const fill = <V>(value: V) => {
  return <K extends string = string>(...keys: K[]): Rec<K, V> => Object.fromEntries(keys.map((key) => [key, value])) as Rec<K, V>;
};

export const get = <O extends Dict, P extends string>(obj: O, path: P): Get<O, P> => {
  let result = obj;
  for (const frag of path.match(/([^.[\]])+/g) ?? []) result = result?.[frag];
  return result as Get<O, P>;
};

//TODO: Improve type
export const mapKeys = <O extends Dict, K extends string>(obj: O, cb: (v: O[keyof O], k: keyof O, obj: O) => K): MapKeys<O, K> =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [cb(v, k, obj), v])) as MapKeys<O, K>;

//TODO: Improve type
export const mapValues = <O extends Dict, V>(obj: O, cb: (v: O[keyof O], k: keyof O, obj: O) => V): MapValues<O, V> =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cb(v, k, obj)])) as MapValues<O, V>;

export const omit = <O extends Dict, K extends keyof O>(obj: O, ...keys: K[]): Omit<O, K> =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !(keys as string[]).includes(k))) as Omit<O, K>;

export const pick = <O extends Dict, K extends keyof O>(obj: O, ...keys: K[]): Pick<O, K> =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => (keys as string[]).includes(k))) as Pick<O, K>;

// TYPES ===================================================================================================================================
type MapKeys<O extends Dict, K extends string> = {[I in keyof O as K]: O[I]};
type MapValues<O extends Dict, V> = {[K in keyof O]: V};
