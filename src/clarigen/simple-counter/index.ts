import { proxy, BaseProvider, Contract } from '@clarigen/core';
import type { SimpleCounterContract } from './types';
import { SimpleCounterInterface } from './abi';
export type { SimpleCounterContract } from './types';

export const simpleCounterContract = (provider: BaseProvider) => {
  const contract = proxy<SimpleCounterContract>(SimpleCounterInterface, provider);
  return contract;
};

export const simpleCounterInfo: Contract<SimpleCounterContract> = {
  contract: simpleCounterContract,
  address: 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE',
  contractFile: 'contracts/simple-counter.clar',
};
