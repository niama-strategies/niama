export type ErrorWithMessage = {
  message: string;
};

export type SuccessResult<T = void> = {
  success: true;
  data: T;
  errors: [];
  inputErrors: [];
  environmentErrors: [];
};

export type ErrorResult = {
  success: false;
  errors: ErrorWithMessage[];
  inputErrors: SchemaError[];
  environmentErrors: SchemaError[];
};

export type SchemaError = {
  path: string[];
  message: string;
};

export type ErrorData = Omit<ErrorResult, 'success'>;

export type Result<T = void> = SuccessResult<T> | ErrorResult;

export type DomainFunction<Output = unknown> = {
  (input: unknown, environment?: unknown): Promise<Result<Output>>;
};

export type UnpackResult<F extends DomainFunction> = Awaited<ReturnType<F>>;
export type UnpackSuccess<F extends DomainFunction> = Extract<UnpackResult<F>, {success: true}>;
export type UnpackData<F extends DomainFunction> = UnpackSuccess<F>['data'];

export type MergeObjs<Objs extends unknown[]> = Objs extends [infer First, ...infer Rest] ? First & MergeObjs<Rest> : {};

export namespace List {
  type PopList<T extends unknown[]> = T extends [...infer R, unknown] ? R : T;
  type PopItem<T extends unknown[]> = T extends [...unknown[], infer A] ? A : unknown;
  type IntMapItem<L extends unknown[], M extends Mapper> = M & {
    Value: PopItem<L>;
    Index: PopList<L>['length'];
  };
  type IntMapList<MapToType extends Mapper, ListItems extends unknown[], Collected extends unknown[] = []> = ListItems['length'] extends 0
    ? Collected
    : IntMapList<MapToType, PopList<ListItems>, [IntMapItem<ListItems, MapToType>['Return'], ...Collected]>;

  export type Mapper<I = unknown, O = unknown> = {
    Index: number;
    Value: I;
    Return: O;
  };
  export type Map<M extends Mapper, L extends unknown[]> = IntMapList<M, L, []>;
}

export interface ListToResultData extends List.Mapper<DomainFunction> {
  Return: UnpackData<this['Value']>;
}

export type Last<T extends readonly unknown[]> = T extends [...infer _I, infer L] ? L : never;
