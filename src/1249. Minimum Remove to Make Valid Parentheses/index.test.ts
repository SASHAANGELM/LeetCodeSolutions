import { describe, expect, test } from 'vitest';
import { minRemoveToMakeValid } from '.';

describe('1249. Minimum Remove to Make Valid Parentheses', () => {
  test('Test case #1', () => {
    const result = minRemoveToMakeValid('lee(t(c)o)de)');
    result; //?
    const variants = ['lee(t(co)de)', 'lee(t(c)ode)', 'lee(t(c)o)de'];
    expect(variants.includes(result)).toBe(true);
  });

  test('Test case #2', () => {
    expect(minRemoveToMakeValid('a)b(c)d')).toBe('ab(c)d');
  });

  test('Test case #3', () => {
    expect(minRemoveToMakeValid('))((')).toBe('');
  });

  test('Test case #4', () => {
    expect(minRemoveToMakeValid(')))t((u)')).toBe('t(u)');
  });
});
