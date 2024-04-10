import { describe, expect, test } from 'vitest';
import { deckRevealedIncreasing } from '.';

describe('950. Reveal Cards In Increasing Order', () => {
  test('Test case #1', () => {
    expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])).toEqual([2, 13, 3, 11, 5, 17, 7]);
  });

  test('Test case #2', () => {
    expect(deckRevealedIncreasing([1, 1000])).toEqual([1, 1000]);
  });
});
