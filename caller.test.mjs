import assert from 'node:assert/strict';
import { test } from 'node:test';
import { welcome } from './caller.mjs';

test('welcome', () => {
  assert.equal(welcome('b'), 'hello b!');
});
