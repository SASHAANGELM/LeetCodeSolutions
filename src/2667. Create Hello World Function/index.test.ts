import { describe, expect, test } from 'vitest';
import { createHelloWorld } from '.';

describe('2667. Create Hello World Function', () => {
  test('Test case #1', () => {
    expect(createHelloWorld()()).toBe('Hello World');
  });

  test('Test case #2', () => {
    expect(createHelloWorld()([{}, null, 42])).toBe('Hello World');
  });
});
