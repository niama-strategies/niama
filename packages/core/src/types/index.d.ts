import type {Entries, FromEntries} from './main';

export * from './main';

declare global {
  interface ObjectConstructor {
    entries<O>(obj: O): Entries<O>;
    fromEntries<E>(entries: E): FromEntries<E>;
  }
}
