import { describe, expect, test } from 'vitest';
import { countStudents } from '.';

describe('1700. Number of Students Unable to Eat Lunch', () => {
  test('Test case #1', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
  });

  test('Test case #2', () => {
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
  });
});
