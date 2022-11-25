import type {Split} from 'type-fest';
import type {z} from 'zod';

// COMMON ==================================================================================================================================
export type Maybe<T> = T | null;
export type Opt<T> = T | undefined;
export type May<T> = T | Error;
export type Type<T> = new (...args: any) => T;
export type Wrap<T> = T | Sync0<T>;
export type AsyncWrap<T> = Wrap<T> | Async0<T>;

export type Rec<Key extends string | number | symbol, Value, Extra = undefined> = [Extra] extends [string | number | symbol]
  ? Record<Key | Extra, Value>
  : Record<Key, Value>;

export type Dict<Value = any> = Rec<string, Value>;
export type I18n<Keys extends string = string> = Rec<Keys, string>;

// FUNCTIONS ===============================================================================================================================
export type Sync<Res = void, Src extends unknown[] = [void]> = (...s: Src) => Res;
export type Async<Res = void, Src extends unknown[] = [void]> = (...s: Src) => Promise<Res>;
export type Action<Res = void, Src extends unknown[] = [void]> = Sync<Res, Src> | Async<Res, Src>;

export type Sync0<Res = void> = () => Res;
export type Async0<Res = void> = () => Promise<Res>;
export type Action0<Res = void> = Sync0<Res> | Async0<Res>;

export type Sync1<Res = void, Src = void> = (s: Src) => Res;
export type Async1<Res = void, Src = void> = (s: Src) => Promise<Res>;
export type Action1<Res = void, Src = void> = Sync1<Res, Src> | Async1<Res, Src>;

export type UniSync<T = void> = Sync1<T, T>;
export type UniAsync<T = void> = Async1<T, T>;
export type UniAction<T = void> = UniSync<T> | UniAsync<T>;

export type SyncTask<Res = void, Src extends unknown[] = [void]> = (...s: Src) => May<Res>;
export type Task<Res = void, Src extends unknown[] = [void]> = (...s: Src) => Promise<May<Res>>;
export type SyncTask0<Res = void> = () => May<Res>;
export type Task0<Res = void> = () => Promise<May<Res>>;
export type SyncTask1<Res = void, Src = void> = (s: Src) => May<Res>;
export type Task1<Res = void, Src = void> = (s: Src) => Promise<May<Res>>;

// OBJECTS =================================================================================================================================
export type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K>}> = Partial<T> & U[keyof U];
export type GetError<Exception extends string = string> = Sync<Error, [exception: Exception, scope?: Dict<string>]>;
export type Map<T, To = unknown> = {[index in keyof T]-?: NonNullable<To>};
export type MutableDeep<T> = {-readonly [P in keyof T]: MutableDeep<T[P]>};

// UNION TO TUPLE ==========================================================================================================================
export type UnionToIntersection<U> = (U extends never ? never : (arg: U) => never) extends (arg: infer I) => void ? I : never;

type UnionToTupleInternal<T, A extends unknown[]> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (_: never) => infer W
  ? UnionToTupleInternal<Exclude<T, W>, [W, ...A]>
  : A;
export type UnionToTuple<T> = UnionToTupleInternal<T, []>;

// ENTRIES =================================================================================================================================
type ArrayEntries<T> = {-readonly [K in keyof T]: [K, T[K]]};
type StringEntries<S extends string> = S extends `${infer R}` ? ArrayEntries<Split<R, ''>> : [string, string][];
type ObjectEntries<T> = UnionToTuple<{[K in keyof T]: [K, T[K]]}[keyof T]>;
type StrictEntries<T> = T extends [string, any][] ? T : [string, any][];

export type Entries<O> = O extends string
  ? StringEntries<O>
  : O extends {[s: string]: unknown}
  ? StrictEntries<ObjectEntries<O>>
  : O extends ArrayLike<unknown>
  ? ArrayEntries<O>[number][0] extends number
    ? [string, ArrayEntries<O>[number][1]][]
    : StrictEntries<ArrayEntries<O>>
  : [string, any][];

type FromMutableEntries<T> = T extends [infer Key, any][]
  ? {[K in Extract<Key, string>]: Extract<T[number], [K, any]>[1]}
  : {[key in string]: any};

export type FromEntries<T> = FromMutableEntries<MutableDeep<T>>;

// TUPLE OF ================================================================================================================================
type BuildPowersOf2LengthArrays<N extends number, R extends never[][]> = R[0][N] extends never
  ? R
  : BuildPowersOf2LengthArrays<N, [[...R[0], ...R[0]], ...R]>;

type ConcatLargestUntilDone<N extends number, R extends never[][], B extends never[]> = B['length'] extends N
  ? B
  : [...R[0], ...B][N] extends never
  ? ConcatLargestUntilDone<N, R extends [R[0], ...infer U] ? (U extends never[][] ? U : never) : never, B>
  : ConcatLargestUntilDone<N, R extends [R[0], ...infer U] ? (U extends never[][] ? U : never) : never, [...R[0], ...B]>;

type Replace<R extends any[], T> = {[K in keyof R]: T};

export type TupleOf<T, N extends number> = number extends N
  ? T[]
  : {
      [K in N]: BuildPowersOf2LengthArrays<K, [[never]]> extends infer U
        ? U extends never[][]
          ? Replace<ConcatLargestUntilDone<K, U, []>, T>
          : never
        : never;
    }[N];

// ADD =====================================================================================================================================
export type Add<L1 extends number, L2 extends number> = Extract<[...TupleOf<unknown, L1>, ...TupleOf<unknown, L2>]['length'], number>;

// RANGE ===================================================================================================================================
type EnumerateInternal<A extends unknown[], N extends number> = N extends A['length'] ? A : EnumerateInternal<[...A, A['length']], N>;
export type Enumerate<N extends number> = EnumerateInternal<[], N>;
export type RangeUnion<L extends number, F extends number> = Exclude<keyof Enumerate<Add<L, F>>, keyof Enumerate<F>>;
export type StringRange<L extends number, F extends number> = UnionToTuple<RangeUnion<L, F>>;
export type Range<L extends number, F extends number> = StringToNum<StringRange<L, F>>;

// NUM =====================================================================================================================================
type NumInternal<A extends unknown[], S extends string> = S extends `${A['length']}` ? A['length'] : NumInternal<[...A, 0], S>;
export type Num<T> = T extends string ? NumInternal<[], T> : never;
type StringToNum<T> = {[I in keyof T]: Num<T[I]>};

// UTILS ===================================================================================================================================
export type PrefixValues<Prefix extends string, T> = {[I in keyof T]: T[I] extends string ? `${Prefix}${T[I]}` : string};

// ZOD =====================================================================================================================================
export type ZType<O, I> = z.ZodType<O, z.ZodTypeDef, I>