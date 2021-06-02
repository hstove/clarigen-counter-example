import { proxy, BaseProvider, Contract } from '@clarigen/core';
import type { FtTraitContract } from './types';
import { FtTraitInterface } from './abi';
export type { FtTraitContract } from './types';

export const ftTraitContract = (provider: BaseProvider) => {
  const contract = proxy<FtTraitContract>(FtTraitInterface, provider);
  return contract;
};

export const ftTraitInfo: Contract<FtTraitContract> = {
  contract: ftTraitContract,
  address: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
  contractFile: 'contracts/ft-trait.clar',
};
