import { describe, it, expect } from '@jest/globals'
import { clamp } from '~/utils/clamp'

describe('clamp', () => {
  it('should clamp a number between 2 values', () => {
    expect(clamp(5, 1, 10)).toBe(5)
    expect(clamp(0, 1, 10)).toBe(1)
    expect(clamp(11, 1, 10)).toBe(10)
  })
})
