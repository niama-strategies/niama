import {snakeJoin} from './array';
import type {Dict} from './types';

export const fromLocalStorage = ({keys, prefix}: FromLocalStorageO = {}) =>
  Object.fromEntries(
    Object.entries(localStorage)
      .filter(([k]) => (!prefix && !keys) || (prefix && k.startsWith(`${prefix}_`)) || (keys && keys.includes(k)))
      .map(([k, v]) => [prefix ? k.replace(`${prefix}_`, '') : k, parse(v)])
  );

export const toLocalStorage = (dto: Dict, {prefix = '', preserve = []}: ToLocalStorageO = {}) => {
  for (const key of Object.keys(dto)) {
    const storageKey = preserve.includes(key) ? key : snakeJoin([prefix, key]);
    if (dto[key] === undefined) localStorage.removeItem(storageKey);
    else localStorage.setItem(storageKey, JSON.stringify(dto[key]));
  }
};

export const parse = <P>(v: unknown): P => {
  try {
    return JSON.parse(v as string);
  } catch {
    return v as P;
  }
};

// TYPES ===================================================================================================================================
export type FromLocalStorageO = {
  keys?: string[];
  prefix?: string;
};

export type ToLocalStorageO = {
  prefix?: string;
  preserve?: string[];
};
