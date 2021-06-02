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
  address: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
  contractFile: 'contracts/counter.clar',
};
