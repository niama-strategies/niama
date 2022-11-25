import type {Async1, Dict, ZType} from '@niama/core';
import type {RequestEvent} from '@sveltejs/kit';
import {z} from 'zod';

// ACTIONS =================================================================================================================================
export const actionResultFor = <Success, Sanitized, Normalized>(
  method: Async1<Success, Sanitized>,
  opts: ActionFromO<Sanitized, Normalized> = {}
) => {
  const {debug = false} = opts;
  return async <P extends Dict<string>>({request}: RequestEvent<P>): Promise<ActionResult<Success, Sanitized, Normalized>> => {
    const formData = await request.formData();
    const sanitized = sanitizeFor(opts)(formData);
    if (sanitized.type !== 'success') return sanitized;
    try {
      const data = await method(sanitized.data);
      if (debug) console.debug('success:', data);
      return {...sanitized, data};
    } catch (error) {
      if (debug) console.debug('fail:', error);
      return {type: 'fail', data: error, values: sanitized.values};
    }
  };
};

export const sanitizeFor = <Sanitized, Normalized>(opts: ActionFromO<Sanitized, Normalized> = {}) => {
  const {debug = false, normalizer = z.any(), sanitizer = z.any()} = opts;
  return (formData: FormData): ActionResult<Sanitized, Sanitized, Normalized> => {
    const unsafeValues = Object.fromEntries(formData);
    if (debug) console.debug('unsafe values:', unsafeValues);

    const normalized = normalizer.safeParse(unsafeValues);
    if (!normalized.success) return {type: 'unnormalized', data: normalized.error.flatten()};
    const values = normalized.data;
    if (debug) console.debug('normalized values:', values);

    const sanitized = sanitizer.safeParse(values);
    if (!sanitized.success) return {type: 'unsanitized', data: sanitized.error.flatten(), values};
    if (debug) console.debug('sanitized values:', sanitized.data);

    return {type: 'success', data: sanitized.data, values};
  };
};

// TYPES ===================================================================================================================================
type ActionFromO<Sanitized = Dict<string>, Normalized = Dict<string>> = {
  debug?: boolean;
  normalizer?: ZType<Normalized, Dict<string>>;
  sanitizer?: ZType<Sanitized, Normalized>;
};

export type ActionResult<Success, Sanitized, Normalized> =
  | {type: 'unnormalized'; data: z.inferFlattenedErrors<ZType<Normalized, Dict<string>>>}
  | {type: 'unsanitized'; data: z.inferFlattenedErrors<ZType<Sanitized, Normalized>>; values: Normalized}
  | {type: 'fail'; data: unknown; values: Normalized}
  | {type: 'success'; data: Success; values: Normalized};
