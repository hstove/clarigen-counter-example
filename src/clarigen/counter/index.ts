import { proxy, BaseProvider, Contract } from '@clarigen/core';
import type { CounterContract } from './types';
import { CounterInterface } from './abi';
export type { CounterContract } from './types';

export const counterContract = (provider: BaseProvider) => {
  const contract = proxy<CounterContract>(CounterInterface, provider);
  return contract;
};

export const counterInfo: Contract<CounterContract> = {
  contract: counterContract,
  address: 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE',
  contractFile: 'contracts/counter.clar',
};
