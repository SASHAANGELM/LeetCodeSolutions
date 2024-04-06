import { describe, expect, test } from 'vitest';
import { map } from '.';

describe('2635. Apply Transform Over Each Element in Array', () => {
  test('Test case #1', () => {
    const arr = [1, 2, 3];
    const fn = (n: number) => n + 1;
    expect(map(arr, fn)).toEqual([2, 3, 4]);
  });

  test('Test case #2', () => {
    const arr = [1, 2, 3];
    const fn = (n: number, i: number) => n + i;
    expect(map(arr, fn)).toEqual([1, 3, 5]);
  });

  test('Test case #3', () => {
    const arr = [10, 20, 30];
    const fn = () => 42;
    expect(map(arr, fn)).toEqual([42, 42, 42]);
  });
});
