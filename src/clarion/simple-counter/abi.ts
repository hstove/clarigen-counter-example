import { ClarityAbi } from '@clarion/core';

// prettier-ignore
export const SimpleCounterInterface: ClarityAbi = {
  "functions": [
    {
      "name": "decrement",
      "access": "public",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": "int128",
            "error": "none"
          }
        }
      }
    },
    {
      "name": "increment",
      "access": "public",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": "int128",
            "error": "none"
          }
        }
      }
    },
    {
      "name": "get-counter",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": "int128",
            "error": "none"
          }
        }
      }
    }
  ],
  "variables": [
    {
      "name": "counter",
      "type": "int128",
      "access": "variable"
    }
  ],
  "maps": [],
  "fungible_tokens": [],
  "non_fungible_tokens": []
};
