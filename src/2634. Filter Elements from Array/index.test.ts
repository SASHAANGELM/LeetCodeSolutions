import { describe, expect, test } from 'vitest';
import { filter } from '.';

describe('2634. Filter Elements from Array', () => {
  test('Test case #1', () => {
    const arr = [0, 10, 20, 30];
    const fn = (n: number) => n > 10;
    expect(filter(arr, fn)).toEqual([20, 30]);
  });

  test('Test case #2', () => {
    const arr = [1, 2, 3];
    const fn = (n: number, i: number) => i === 0;
    expect(filter(arr, fn)).toEqual([1]);
  });

  test('Test case #3', () => {
    const arr = [-2, -1, 0, 1, 2];
    const fn = (n: number) => n + 1;
    expect(filter(arr, fn)).toEqual([-2, 0, 1, 2]);
  });
});
