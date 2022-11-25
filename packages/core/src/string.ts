import type {CamelCase, KebabCase, SnakeCase, Split} from 'type-fest';

import {APOS, ASCII_WORD, COMBO_MARK, DEBURRED_LETTERS, HAS_UNICODE_WORD, LATIN, UNICODE_WORD} from './string.const';

// FIRST ===================================================================================================================================
export const lowerFirst = <S extends string>(str: S): Uncapitalize<S> => (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<S>;
export const upperFirst = <S extends string>(str: S): Capitalize<S> => (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<S>;

// CASING ==================================================================================================================================
export const camelCase = <S extends string>(str: S): CamelCase<S> =>
  safeWords(str).reduce((r, v, k) => r + (k ? capitalize(v.toLowerCase()) : v.toLowerCase()), '') as CamelCase<S>;

export const capitalize = <S extends string>(str: S): Capitalize<Lowercase<S>> => upperFirst(str.toLowerCase()) as Capitalize<Lowercase<S>>;
export const constantCase = <S extends string>(str: S): Uppercase<SnakeCase<S>> => snakeCase(str).toUpperCase() as Uppercase<SnakeCase<S>>;

export const kebabCase = <S extends string>(str: S): KebabCase<S> =>
  safeWords(str).reduce((r, v, k) => r + (k ? '-' : '') + v.toLowerCase(), '') as KebabCase<S>;

export const snakeCase = <S extends string>(str: S): SnakeCase<S> =>
  safeWords(str).reduce((r, v, k) => r + (k ? '_' : '') + v.toLowerCase(), '') as SnakeCase<S>;

// WORDS ===================================================================================================================================
export const words = <S extends string>(str: S): Split<S, ' '> =>
  (str.match(HAS_UNICODE_WORD.test(str) ? UNICODE_WORD : ASCII_WORD) ?? []) as Split<S, ' '>;

const deburr = <S extends string>(str: S): string =>
  str.replace(LATIN, (k) => DEBURRED_LETTERS[k as keyof typeof DEBURRED_LETTERS]).replace(COMBO_MARK, '');

const safeWords = <S extends string>(str: S): string[] => words(deburr(str).replace(APOS, ''));

// OTHER ===================================================================================================================================
export const pluralize = <S extends string>(str: S): Pluralize<S> =>
  (str.endsWith('y') ? `${str.slice(0, Math.max(0, str.length - 1))}ies` : `${str}s`) as Pluralize<S>;

// TYPES ===================================================================================================================================
export type Case = 'camel' | 'kebab' | 'snake';
type Pluralize<S extends string> = S extends `${infer T}y` ? `${T}ies` : `${S}s`;
