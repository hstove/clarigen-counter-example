import { TestProvider } from "@clarigen/test";

import { counterInfo, CounterContract } from '@contracts/counter';
import { ftTraitInfo } from "@contracts/ft-trait";
import { CounterCoinContract, counterCoinInfo } from "@contracts/counter-coin";

const alice = 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA';
const bob = 'ST1TWA18TSWGDAFZT377THRQQ451D1MSEM69C761';

let counter: CounterContract;
let token: CounterCoinContract;

async function getCounter() {
  const response = await counter.getCounter();
  if (!response.isOk()) throw new Error("Error returned from `get-counter`");
  return response.value;
}

beforeAll(async () => {
  const contracts = await TestProvider.fromContracts({
    trait: ftTraitInfo,
    token: counterCoinInfo,
    counter: counterInfo,
  });

  counter = contracts.counter.contract;
  token = contracts.token.contract;
});

test('Starts at zero', async () => {
  const current = await getCounter();
  expect(current).toEqual(0);
});

test('can increment', async () => {
  const tx = counter.increment();
  const receipt = await tx.submit({ sender: alice });
  const result = await receipt.getResult();
  if (!result.isOk) {
    throw new Error('Invalid tx')
  }
  expect(await getCounter()).toEqual(1);
});

test('balance is updated', async () => {
  const balance = (await token.getBalance(alice))._unsafeUnwrap();
  expect(balance).toEqual(1e8)
});

test('can decrement', async () => {
  const oldBalance = (await token.getBalance(alice))._unsafeUnwrap();
  const receipt = await counter.decrement().submit({ sender: alice });
  const result = await receipt.getResult();
  if (!result.isOk) throw new Error('Invalid');
  expect(await getCounter()).toEqual(0);
  const newBalance = (await token.getBalance(alice))._unsafeUnwrap();
  expect(newBalance - oldBalance).toEqual(1e8);
});

test('alice can transfer', async () => {
  const tx = token.transfer(100, alice, bob, null);
  const result = await (await tx.submit({ sender: alice })).getResult();
  if (!result.isOk) throw new Error('Invalid')
  expect(result.assets.tokens[alice][`${alice}.counter-coin::counter-token`]).toEqual('100')
});

test('transfer with memo', async () => {
  const tx = token.transfer(100, alice, bob, Buffer.from('hello', 'hex'));
  const result = await (await tx.submit({ sender: alice })).getResult();
  expect(result.isOk).toBeTruthy();
});
