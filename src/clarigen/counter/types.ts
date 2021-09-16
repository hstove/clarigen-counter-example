import { ClarityTypes, Transaction } from '@clarigen/core';

// prettier-ignore
export interface CounterContract {

  decrement: () => Transaction<bigint, bigint>;
  increment: () => Transaction<bigint, bigint>;
  getCounter: () => Promise<bigint>;
}
