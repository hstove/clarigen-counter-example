import { ClarityTypes, Transaction } from '@clarigen/core';

// prettier-ignore
export interface SimpleCounterContract {
  decrement: () => Transaction<number, null>;
  increment: () => Transaction<number, null>;
  getCounter: () => Promise<number>;
}
