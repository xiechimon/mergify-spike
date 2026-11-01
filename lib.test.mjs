import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as lib from './lib.mjs';

test('salute', () => {
  assert.equal(lib.salute('a'), 'hello a');
});
