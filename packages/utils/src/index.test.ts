import { describe, expect, it } from 'vitest';

import { formatGreeting, isNonEmptyString } from './index';

describe('utils', () => {
  it('formats a greeting for a given subject', () => {
    expect(formatGreeting('Developer')).toBe('Hello, Developer!');
  });

  it('falls back to a default when subject is empty', () => {
    expect(formatGreeting('   ')).toBe('Hello, there!');
  });

  it('validates non-empty strings', () => {
    expect(isNonEmptyString('ready')).toBe(true);
    expect(isNonEmptyString('   ')).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
  });
});
