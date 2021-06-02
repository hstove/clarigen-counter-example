import { ClarityTypes, Transaction } from '@clarigen/core';

export interface CounterContract {

  decrement: () => Transaction<number, number>;
  increment: () => Transaction<number, number>;
  getCounter: () => Promise<ClarityTypes.Response<number, null>>;
}
