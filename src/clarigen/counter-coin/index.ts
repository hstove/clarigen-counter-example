import { proxy, BaseProvider, Contract } from '@clarigen/core';
import type { CounterCoinContract } from './types';
import { CounterCoinInterface } from './abi';
export type { CounterCoinContract } from './types';

export const counterCoinContract = (provider: BaseProvider) => {
  const contract = proxy<CounterCoinContract>(CounterCoinInterface, provider);
  return contract;
};

export const counterCoinInfo: Contract<CounterCoinContract> = {
  contract: counterCoinContract,
  address: 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE',
  contractFile: 'contracts/counter-coin.clar',
};
