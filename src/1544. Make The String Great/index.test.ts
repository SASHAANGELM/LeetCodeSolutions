import { describe, expect, test } from 'vitest';
import { isTwoLetterGood, makeGood } from '.';

describe('3. Longest Substring Without Repeating Characters', () => {
  describe('makeGood', () => {
    test('Test case #1', () => {
      expect(makeGood('leEeetcode')).toBe('leetcode');
    });

    test('Test case #2', () => {
      expect(makeGood('abBAcC')).toBe('');
    });

    test('Test case #3', () => {
      expect(makeGood('s')).toBe('s');
    });
  });

  describe('isTwoLetterGood', () => {
    test('#1', () => {
      expect(isTwoLetterGood('', '')).toBe(true);
    });

    test('#2', () => {
      expect(isTwoLetterGood('a', 'aa')).toBe(true);
    });

    test('#3', () => {
      expect(isTwoLetterGood('a', 'a')).toBe(true);
    });

    test('#4', () => {
      expect(isTwoLetterGood('a', 'A')).toBe(false);
    });

    test('#5', () => {
      expect(isTwoLetterGood('A', 'a')).toBe(false);
    });

    test('#6', () => {
      expect(isTwoLetterGood('A', 'A')).toBe(true);
    });

    test('#7', () => {
      expect(isTwoLetterGood('a', 'b')).toBe(true);
    });

    test('#8', () => {
      expect(isTwoLetterGood('A', 'b')).toBe(true);
    });
  });
});
