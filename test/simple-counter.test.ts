import { TestProvider } from "@clarigen/test";
import { Transaction } from "@clarigen/core";
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

async function getCounter() {
  const response = await counter.getCounter();
  if (!response.isOk()) throw new Error("Error returned from `get-counter`");
  return response.value;
}

async function submitTx(tx: Transaction<number, null>) {
  const receipt = await tx.submit({ sender: alice });
  const result = await receipt.getResult();
  if (result.isOk === false) throw new Error("Tx failed");
  return result.value;
}

describe("Counter contract", () => {
  beforeAll(async () => {
    await deploy();
  });

  test("initial counter is 0", async () => {
    const response = await getCounter();
    expect(response).toEqual(0);
  });

  test("increment counter", async () => {
    const tx = counter.increment();
    const result = await submitTx(tx);
    expect(result).toEqual(1);
    await expect(getCounter()).resolves.toEqual(1);
  });

  test("decrement counter", async () => {
    const result = await submitTx(counter.decrement());
    expect(result).toEqual(0);
    await expect(getCounter()).resolves.toEqual(0);
  });
});
