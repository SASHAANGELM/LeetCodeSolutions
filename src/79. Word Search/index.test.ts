import { describe, expect, test } from 'vitest';
import { exist } from '.';

describe('79. Word Search', () => {
  describe('exist', () => {
    test('Test case #1', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        ''
      );
      expect(result).toBe(false);
    });

    test('Test case #2', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'F'
      );
      expect(result).toBe(true);
    });

    test('Test case #3', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'I'
      );
      expect(result).toBe(false);
    });

    test('Test case #4', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'BASIC'
      );
      expect(result).toBe(false);
    });

    test('Test case #5', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCCED'
      );
      expect(result).toBe(true);
    });

    test('Test case #6', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'SEE'
      );
      expect(result).toBe(true);
    });

    test('Test case #7', () => {
      const result = exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCB'
      );
      expect(result).toBe(false);
    });

    test('Test case #8', () => {
      const result = exist(
        [
          ['a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a'],
        ],
        'aaaaaaaaaaaa'
      );
      expect(result).toBe(true);
    });

    test('Test case #9', () => {
      const result = exist(
        [
          ['C', 'A', 'A'],
          ['A', 'A', 'A'],
          ['B', 'C', 'D'],
        ],

        'AAB'
      );
      expect(result).toBe(true);
    });
  });
});
