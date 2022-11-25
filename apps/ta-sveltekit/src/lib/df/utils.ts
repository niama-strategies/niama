import type {z} from 'zod';
import type {MergeObjs, Result, SchemaError, SuccessResult} from './types';

export const formatSchemaErrors = (errors: z.ZodIssue[]): SchemaError[] =>
  errors.map((error) => {
    const {path, message} = error;
    return {path: path.map(String), message};
  });

export const isListOfSuccess = <T>(result: Result<T>[]): result is SuccessResult<T>[] => result.every(({success}) => success === true);
export const mergeObjects = <T extends unknown[] = unknown[]>(objs: T) => Object.assign({}, ...objs) as MergeObjs<T>;
