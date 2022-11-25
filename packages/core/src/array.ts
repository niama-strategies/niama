import type {FixedLengthArray, Join} from 'type-fest';

import {upperFirst} from './string';
import type {PrefixValues, Range, StringRange, UnionToTuple} from './types';
import {isEmpty} from './utils';

export const camelMix = <Pre extends readonly string[], Suf extends readonly string[]>(pre: Pre, suf: Suf): CamelMix<Pre, Suf> =>
  pre.flatMap((p) => suf.map((s) => `${p}${upperFirst(s)}`)) as CamelMix<Pre, Suf>;

export const chunk = <V>(arr: V[], size: number): V[][] =>
  Array.from({length: Math.ceil(arr.length / size)}, (_: V, i: number) => arr.slice(i * size, i * size + size));

export const fillBinary = <L extends number>(length: L, start = -1, initial: 0 | 1 = 0): FixedLengthArray<0 | 1, L> =>
  Array.from({length}, (_v, k) => (k > start ? initial : initial === 1 ? 0 : 1)) as unknown as FixedLengthArray<0 | 1, L>;

export const fillInc = <V extends string, L extends number, F extends number = 0>(val: V, length: L, from: F = 0 as F): FillInc<V, L, F> =>
  Array.from({length}, (_v, k) => `${val}${k + from}`) as unknown as FillInc<V, L, F>;

export const findLastIndex = <V extends Arr>(arr: V, predicate: (value: V[number], index: number, arr: V) => boolean): number => {
  let index = arr.length;
  while (index-- > 0) if (predicate(arr[index], index, arr)) return index;
  return -1;
};

export const hasIntersection = <Arr1 extends Arr, Arr2 extends Arr>(arr1: Arr1, arr2: Arr2): boolean =>
  arr1.length > arr2.length ? arr2.some((v) => arr1.includes(v)) : arr1.some((v) => arr2.includes(v));

export const kebabMix = <Pre extends readonly string[], Suf extends readonly string[]>(pre: Pre, suf: Suf): KebabMix<Pre, Suf> =>
  pre.flatMap((p) => suf.map((s) => `${p}-${s}`)) as KebabMix<Pre, Suf>;

export const range = <L extends number, F extends number = 0>(length: L, from: F = 0 as F): Range<L, F> =>
  Array.from({length}, (_v, k) => k + from) as unknown as Range<L, F>;

export const snakeJoin = <A extends Arr<string>>(strs: A): SnakeJoin<A> => strs.filter((str) => !isEmpty(str)).join('_') as SnakeJoin<A>;

export const snakeMix = <Pre extends readonly string[], Suf extends readonly string[]>(pre: Pre, suf: Suf): SnakeMix<Pre, Suf> =>
  pre.flatMap((p) => suf.map((s) => `${p}_${s}`)) as SnakeMix<Pre, Suf>;

// TYPES ===================================================================================================================================
type Arr<E = unknown> = readonly E[];
type CamelMix<Pre extends Arr<string>, Suf extends Arr<string>> = UnionToTuple<`${Pre[number]}${Capitalize<Suf[number]>}`>;
type FillInc<V extends string, L extends number, F extends number> = PrefixValues<V, StringRange<L, F>>;
type KebabMix<Pre extends Arr<string>, Suf extends Arr<string>> = UnionToTuple<`${Pre[number]}-${Suf[number]}`>;
type SnakeMix<Pre extends Arr<string>, Suf extends Arr<string>> = UnionToTuple<`${Pre[number]}_${Suf[number]}`>;
type SnakeJoin<Strs extends Arr<string>> = Join<Extract<UnionToTuple<Exclude<Strs[number], ''>>, string[]>, '_'>;
