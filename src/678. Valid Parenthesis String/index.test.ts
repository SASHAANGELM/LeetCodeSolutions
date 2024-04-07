import { describe, expect, test } from 'vitest';
import { checkValidString } from '.';

describe('678. Valid Parenthesis String', () => {
  test('Test case #1', () => {
    expect(checkValidString('()')).toBe(true);
  });

  test('Test case #2', () => {
    expect(checkValidString('(*)')).toBe(true);
  });

  test('Test case #3', () => {
    expect(checkValidString('(*))')).toBe(true);
  });

  test('Test case #4', () => {
    expect(checkValidString('(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())')).toBe(
      false
    );
  });
});
