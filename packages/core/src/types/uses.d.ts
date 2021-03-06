/**
 * @packageDocumentation
 * @module @niama/core/types
 */

import { Ref } from './externals';

export interface UseInputR<Input> {
  initial: Input;
  input: Ref<Input>;
  reset: () => void;
}
