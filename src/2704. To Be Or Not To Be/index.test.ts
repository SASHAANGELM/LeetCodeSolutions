import { describe, expect, test } from 'vitest';
import { expect as myExpect } from '.';

describe('2704. To Be Or Not To Be', () => {
  test('Test case #1', () => {
    expect(myExpect(5).toBe(5)).toBe(true);
  });

  test('Test case #2', () => {
    expect(() => {
      return myExpect(5).toBe(null);
    }).throw('Not Equal');
  });

  test('Test case #3', () => {
    expect(myExpect(5).notToBe(null)).toBe(true);
  });
});
