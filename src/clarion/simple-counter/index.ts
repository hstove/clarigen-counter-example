import { proxy, BaseProvider, Contract } from '@clarion/core';
import type { SimpleCounterContract } from './types';
import { SimpleCounterInterface } from './abi';
export type { SimpleCounterContract } from './types';

export const simpleCounterContract = (provider: BaseProvider) => {
  const contract = proxy<SimpleCounterContract>(SimpleCounterInterface, provider);
  return contract;
};

export const simpleCounterInfo: Contract<SimpleCounterContract> = {
  contract: simpleCounterContract,
  address: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
  contractFile: 'contracts/simple-counter.clar',
};
