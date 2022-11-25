import type {Sync1} from './types';

const createRound = (methodName: 'ceil' | 'floor' | 'round') => {
  const func: Sync1<number, number> = Math[methodName];
  return (num: number, precision = 0): number => {
    precision = Math.min(Number.parseInt(`${precision}`), 292);
    if (precision && Number.isFinite(num)) {
      let pair = `${num}e`.split('e');
      const value = func(+`${pair[0]}e${+pair[1] + precision}`);
      pair = `${value}e`.split('e');
      return +`${pair[0]}e${+pair[1] - precision}`;
    }
    return func(num);
  };
};

export const ceil = createRound('ceil');
export const floor = createRound('floor');
export const round = createRound('round');

// OTHER ===================================================================================================================================
export const getFormatNumber = ({locales, opts, stringify}: GetFormatNumberO) => {
  return (value: number): string => (stringify ? stringify(value) : new Intl.NumberFormat(locales, opts).format(value));
};

// TYPES ===================================================================================================================================
export interface GetFormatNumberO {
  locales?: string | string[];
  opts?: Intl.NumberFormatOptions;
  stringify?: Sync1<string, number>;
}
