import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as lib from './lib.mjs';

test('greet', () => {
  assert.equal(lib.greet('a'), 'hello a');
});
