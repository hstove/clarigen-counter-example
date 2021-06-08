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
  address: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
  contractFile: 'contracts/counter-coin.clar',
};
