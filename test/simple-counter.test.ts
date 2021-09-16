import { TestProvider, txOk } from "@clarigen/test";
import { contracts, SimpleCounterContract } from "@contracts";

const alice = "ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA";

let counter: SimpleCounterContract;

async function deploy() {
  const deployed = await TestProvider.fromContracts(contracts);

  counter = deployed.simpleCounter.contract;
}

describe("Counter contract", () => {
  beforeAll(async () => {
    await deploy();
  });

  test("initial counter is 0", async () => {
    const response = await counter.getCounter();
    expect(response).toEqual(0n);
  });

  test("increment counter", async () => {
    const tx = counter.increment();
    const result = await txOk(tx, alice);
    expect(result.value).toEqual(1n);
    await expect(counter.getCounter()).resolves.toEqual(1n);
  });

  test("decrement counter", async () => {
    const result = await txOk(counter.decrement(), alice);
    expect(result.value).toEqual(0n);
    await expect(counter.getCounter()).resolves.toEqual(0n);
  });
});
