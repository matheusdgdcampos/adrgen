import { describe, it, expect } from 'vitest';

import { generateDate } from '../lib/utils/generate-date';

describe('generateDate', () => {
  it('Should be able to generate date string', () => {
    const result = generateDate()
    expect(result).toBeTypeOf('string')
  })
})