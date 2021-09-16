import { ClarityTypes, Transaction } from '@clarigen/core';

// prettier-ignore
export interface SimpleCounterContract {
  decrement: () => Transaction<bigint, null>;
  increment: () => Transaction<bigint, null>;
  getCounter: () => Promise<bigint>;
}
