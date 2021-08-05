import { describe, it, expect } from '@jest/globals'
import { getActivitiesUrl } from '~/utils/get-activities-url'

describe('getActivitiesUrl', () => {
  it('should return a string url', () => {
    expect(getActivitiesUrl()).toBeDefined()
  })
})
