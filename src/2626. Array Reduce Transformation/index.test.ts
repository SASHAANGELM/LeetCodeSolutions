import { describe, expect, test } from 'vitest';
import { reduce } from '.';

describe('2626. Array Reduce Transformation', () => {
  test('Test case #1', () => {
    const arr = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr;
    expect(reduce(arr, fn, 0)).toEqual(10);
  });

  test('Test case #2', () => {
    const arr = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr * curr;
    expect(reduce(arr, fn, 2)).toEqual(130);
  });

  test('Test case #3', () => {
    const arr = [];
    const fn = () => 0;
    expect(reduce(arr, fn, 25)).toEqual(25);
  });
});
