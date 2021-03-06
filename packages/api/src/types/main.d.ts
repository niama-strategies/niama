import { AtLeastOne, Dict, Opt } from '@niama/core/types';

import { DocumentNode } from './externals';

// SEED ====================================================================================================================================

export type Seed<D extends object = {}> = () => D | Promise<D>;

// REPOSITORY ==============================================================================================================================

export interface Rp<Labels = Dict, Ops = Dict<DocumentNode>> {
  L: Labels;
  O: Ops;
}

// OPS =====================================================================================================================================

export interface OpAlias {
  id: string;
  args?: string[];
}

export interface OpO {
  alias?: OpAlias;
  fields?: F;
  local?: boolean;
  rest?: OpRest;
  selector: string;
  varTypes?: Dict;
}

export interface OpRest {
  bodyKey?: string;
  method: OpRestType;
  path: string;
  type: string;
}

export type OpRestType = 'DELETE' | 'GET' | 'POST' | 'PUT';
export type OpType = 'mutation' | 'query' | 'subscription';

// FIELDS ==================================================================================================================================

export type FieldCfg<Fi extends F = any, SFi extends SF = any, EF extends Opt<string> = any, ESF extends Opt<string> = any> = {
  EF: EF;
  ESF: ESF;
  F: Fi;
  SF: SFi;
};
export type Fields<C extends FieldCfg> = Record<'main' | C['EF'], C['F']> & Record<C['ESF'], C['SF']>;

export type SF = string[];
export type F = SF | AtLeastOne<{ _: SF } & Dict<any>>;

export type K = IdK | TypeK;
export type IdK = 'id';
export type TypeK = '__typename';

// OBJECTS =================================================================================================================================

export interface Vo {
  id: string;
}

export interface Po extends Vo {
  __typename: string;
}

// PARAMS ==================================================================================================================================

export interface AddSimpleDefaultFieldsP<Fi extends F> {
  defaults: SF;
  fields: Fi;
}

export interface AddDefaultFieldsP<Fi extends F> {
  defaults: Fi;
  fields: Fi;
}

export interface GetOpP extends GetTypedOpP {
  type: OpType;
}

export interface GetTypedOpP extends OpO {
  name?: string;
}
