import { describe, expect, test } from 'vitest';
import { trap } from '.';

describe('42. Trapping Rain Water', () => {
  test('Test case #1', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('Test case #2', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });
});
