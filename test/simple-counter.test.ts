import { TestProvider, txOk } from "@clarigen/test";
import {
  simpleCounterInfo,
  SimpleCounterContract,
} from "@contracts/simple-counter";

const alice = "ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA";

let counter: SimpleCounterContract;

async function deploy() {
  const contracts = await TestProvider.fromContracts({
    counter: simpleCounterInfo,
  });

  counter = contracts.counter.contract;
}

describe("Counter contract", () => {
  beforeAll(async () => {
    await deploy();
  });

  test("initial counter is 0", async () => {
    const response = await counter.getCounter();
    expect(response).toEqual(0);
  });

  test("increment counter", async () => {
    const tx = counter.increment();
    const result = await txOk(tx, alice);
    expect(result.value).toEqual(1);
    await expect(counter.getCounter()).resolves.toEqual(1);
  });

  test("decrement counter", async () => {
    const result = await txOk(counter.decrement(), alice);
    expect(result.value).toEqual(0);
    await expect(counter.getCounter()).resolves.toEqual(0);
  });
});
