import { TestProvider, txErr, txOk } from "@clarigen/test";

import { CounterCoinContract, CounterContract, contracts, accounts } from '@contracts';

const deployer = accounts.deployer.address;
const alice = 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA';
const bob = 'ST1TWA18TSWGDAFZT377THRQQ451D1MSEM69C761';

let counter: CounterContract;
let token: CounterCoinContract;

beforeAll(async () => {
  const deployed = await TestProvider.fromContracts(contracts);

  counter = deployed.counter.contract;
  token = deployed.counterCoin.contract;
});

test('Starts at zero', async () => {
  const current = await counter.getCounter();
  expect(current).toEqual(0n);
});

test('can increment', async () => {
  await txOk(counter.increment(), alice);
  expect(await counter.getCounter()).toEqual(1n);
});

test('balance is updated', async () => {
  const balance = (await token.getBalance(alice))._unsafeUnwrap();
  expect(balance).toEqual(BigInt(1e8))
});

test('can decrement', async () => {
  const oldBalance = (await token.getBalance(alice))._unsafeUnwrap();
  await txOk(counter.decrement(), alice);
  expect(await counter.getCounter()).toEqual(0n);
  const newBalance = (await token.getBalance(alice))._unsafeUnwrap();
  expect(newBalance - oldBalance).toEqual(BigInt(1e8));
});

test('alice can transfer', async () => {
  const result = await txOk(token.transfer(100, alice, bob, null), alice);
  expect(result.assets.tokens[alice][`${deployer}.counter-coin::counter-token`]).toEqual('100')
});

test('transfer with memo', async () => {
  const result = await txOk(token.transfer(100, alice, bob, Buffer.from('hello', 'hex')), alice);
  expect(result.isOk).toBeTruthy();
});

test('bob cannot transfer more than he has', async () => {
  const result = await txErr(token.transfer(250, bob, alice, null), bob);
  expect(result.value).toEqual(1n);
});

test('cannot transfer when sender is not tx-sender', async () => {
  const result = await txErr(token.transfer(250, alice, bob, null), bob);
  expect(result.value).toEqual(4n);
});
