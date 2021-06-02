import { ClarityTypes, Transaction } from '@clarigen/core';

export interface SimpleCounterContract {
  decrement: () => Transaction<number, null>;
  increment: () => Transaction<number, null>;
  getCounter: () => Promise<ClarityTypes.Response<number, null>>;
}
