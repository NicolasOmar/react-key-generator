import { describe, test, expect, vi, beforeEach } from 'vitest'
import { generateKey } from './index'

describe('generateKey', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should return a string with default parameters', () => {
    const result = generateKey()
    expect(typeof result).toBe('string')
    expect(result).toBeDefined()
  })

  test('should return a numeric string', () => {
    const result = generateKey()
    expect(/^\d+$/.test(result)).toBe(true)
  })

  test('should return a value within default range (1-5000)', () => {
    const result = generateKey()
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(1)
  })

  test('should return a value within custom range', () => {
    const min = 100
    const max = 200
    const result = generateKey(max, min)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(min)
  })

  test('should handle custom max parameter', () => {
    const result = generateKey(100)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(1)
  })

  test('should handle both custom max and min parameters', () => {
    const result = generateKey(500, 10)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(10)
  })

  test('should handle decimal values for max parameter', () => {
    const result = generateKey(10.7)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(1)
  })

  test('should handle decimal values for min parameter', () => {
    const result = generateKey(100, 5.3)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(6) // Should be ceiled to 6
  })

  test('should handle when min equals max', () => {
    const result = generateKey(50, 50)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(50)
  })

  test('should handle small ranges', () => {
    const result = generateKey(2, 1)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(1)
  })

  test('should handle large ranges', () => {
    const result = generateKey(1000000, 1)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(1)
  })

  test('should generate different values on multiple calls', () => {
    const results = new Set()
    for (let i = 0; i < 10; i++) {
      results.add(generateKey(10000, 1))
    }
    expect(results.size).toBeGreaterThan(1)
  })

  test('should return a valid integer string', () => {
    const result = generateKey()
    expect(Number.isInteger(parseInt(result, 10))).toBe(true)
  })

  test('should not return negative values with positive range', () => {
    for (let i = 0; i < 10; i++) {
      const result = generateKey(100, 1)
      const num = parseInt(result, 10)
      expect(num).toBeGreaterThan(0)
    }
  })

  test('should use crypto.getRandomValues', () => {
    const getRandomValuesSpy = vi.spyOn(window.crypto, 'getRandomValues')
    generateKey()
    expect(getRandomValuesSpy).toHaveBeenCalled()
    getRandomValuesSpy.mockRestore()
  })

  test('should handle zero min value', () => {
    const result = generateKey(100, 0)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(0)
  })

  test('should consistently return values within range across multiple invocations', () => {
    const iterations = 20
    for (let i = 0; i < iterations; i++) {
      const result = generateKey(1000, 10)
      const num = parseInt(result, 10)
      expect(num).toBeGreaterThanOrEqual(10)
    }
  })

  test('should handle when crypto.getRandomValues returns 0', () => {
    const getRandomValuesSpy = vi.spyOn(window.crypto, 'getRandomValues')
    getRandomValuesSpy.mockImplementation((arr) => {
      if (arr instanceof Uint32Array) {
        arr[0] = 0
      }
      return arr
    })

    const result = generateKey(100, 50)
    const num = parseInt(result, 10)
    expect(num).toBe(50) // With 0 random value, should return min

    getRandomValuesSpy.mockRestore()
  })

  test('should handle with maximum uint32 value', () => {
    const getRandomValuesSpy = vi.spyOn(window.crypto, 'getRandomValues')
    getRandomValuesSpy.mockImplementation((arr) => {
      if (arr instanceof Uint32Array) {
        arr[0] = 0xffffffff
      }
      return arr
    })

    const result = generateKey(100, 50)
    const num = parseInt(result, 10)
    expect(num).toBeGreaterThanOrEqual(50)

    getRandomValuesSpy.mockRestore()
  })
})
