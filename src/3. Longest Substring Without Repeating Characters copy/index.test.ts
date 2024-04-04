import { describe, expect, test } from 'vitest';
import { lengthOfLongestSubstring } from '.';

describe('3. Longest Substring Without Repeating Characters', () => {
  test('Test case #1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('Test case #2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('Test case #3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('Test case #4', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  });

  test('Test case #5', () => {
    expect(lengthOfLongestSubstring('au')).toBe(2);
  });

  test('Test case #6', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
