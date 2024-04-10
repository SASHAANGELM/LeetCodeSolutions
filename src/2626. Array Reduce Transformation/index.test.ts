import { describe, expect, test } from 'vitest';
import { reduce } from '.';

describe('2626. Array Reduce Transformation', () => {
  test('Test case #1', () => {
    const arr = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr;
    expect(reduce(arr, fn, 0)).toBe(10);
  });

  test('Test case #2', () => {
    const arr = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr * curr;
    expect(reduce(arr, fn, 100)).toBe(130);
  });

  test('Test case #3', () => {
    const arr: number[] = [];
    const fn = () => 0;
    expect(reduce(arr, fn, 25)).toBe(25);
  });
});
