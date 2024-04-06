import { describe, expect, test } from 'vitest';
import { createCounter } from '.';

describe('2665. Counter II', () => {
  test('Test case #1', () => {
    const counter = createCounter(5);
    const result = [counter.increment(), counter.reset(), counter.decrement()];
    expect(result).toEqual([6, 5, 4]);
  });

  test('Test case #2', () => {
    const counter = createCounter(0);
    const result = [counter.increment(), counter.increment(), counter.decrement(), counter.reset(), counter.reset()];
    expect(result).toEqual([1, 2, 1, 0, 0]);
  });
});
