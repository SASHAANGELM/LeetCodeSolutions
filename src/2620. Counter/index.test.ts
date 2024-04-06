import { describe, expect, test } from 'vitest';
import { createCounter } from '.';

describe('2620. Counter', () => {
  test('Test case #1', () => {
    const counter = createCounter(10);
    const result = [counter(), counter(), counter()];
    expect(result).toEqual([10, 11, 12]);
  });

  test('Test case #2', () => {
    const counter = createCounter(-2);
    const result = [counter(), counter(), counter()];
    expect(result).toEqual([-2, -1, 0]);
  });
});
