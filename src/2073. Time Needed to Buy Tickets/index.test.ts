import { describe, expect, test } from 'vitest';
import { timeRequiredToBuy } from '.';

describe('2073. Time Needed to Buy Tickets', () => {
  test('Test case #1', () => {
    expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6);
  });

  test('Test case #2', () => {
    expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8);
  });
});
