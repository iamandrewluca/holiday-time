import { describe, expect, it } from '@jest/globals'
import { getGlobalStore } from '~/utils/get-global-store'
import { Activity } from '~/types/activity'

describe('getGlobalStore', () => {
  it('should behave', () => {
    const store = getGlobalStore()

    expect(store.totalCartPrice.value).toBe('0.00')

    const sample: Activity = {
      uuid: '123',
      description: '',
      title: '',
      cover_image_url: '',
      retail_price: {
        value: 10,
        formatted_value: '',
        currency: 'USD',
      },
    }

    store.toggleInCart(sample)
    expect(store.isInCart(sample)).toBe(true)

    store.toggleInCart(sample)
    expect(store.isInCart(sample)).toBe(false)

    store.toggleInWishlist(sample)
    expect(store.isInWishlist(sample)).toBe(true)

    store.toggleInWishlist(sample)
    expect(store.isInWishlist(sample)).toBe(false)

    store.toggleInCart(sample)
    expect(store.totalCartPrice.value).toBe('$10.00')
  })
})
