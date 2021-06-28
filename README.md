# Clarigen demo - counter contract

This repo is an example usage of [clarigen](https://github.com/obylabs/clarigen), a developer tool for interacting with Clarity smart contracts.

There are two examples provided:

- `simple-counter`: a simple contract that tracks a global `counter` variable. Users can make transactions to increment and decrement this value
- `counter-coin`: An extension of `simple-counter` that mints a fungible token every time a user changes the counter variable

## `simple-counter`

One contract with public and read-only methods

**Contract**: [`./contracts/simple-counter.clar`](./contracts/simple-counter.clar)
**Tests**: [`./tests/simple-counter.test.ts`](./tests/simple-counter.test.ts)

## `counter-coin`

Three separate contracts, which compose of the fungible token trait, the token contract, and the counter contract that interacts with the token.

**Contracts**:

- [`./contracts/ft-trait.clar`](./contracts/ft-trait.clar)
- [`./contracts/counter-coin.clar`](./contracts/counter-coin.clar)
- [`./contracts/counter.clar`](./contracts/counter.clar)

## Development

You can clone this repo to get a feel for using Clarigen and Clarity.

Install dependencies with `yarn`

Whenever you update a Clarity contract, run `yarn clarigen`, which will automatically generate type files in `./src/clarigen`. You can also run `yarn clarigen --watch` to automatically generate types whenever you save a `.clar` file.

Run tests with `yarn test` or `yarn test --watch`
