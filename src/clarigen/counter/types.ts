import { ClarityTypes, Transaction } from '@clarigen/core';

// prettier-ignore
export interface CounterContract {

  decrement: () => Transaction<number, number>;
  increment: () => Transaction<number, number>;
  getCounter: () => Promise<number>;
}
