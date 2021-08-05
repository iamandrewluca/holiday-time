import { computed, ComputedRef, Ref, ref } from '@nuxtjs/composition-api'
import { Activity } from '~/types/activity'

export type Store = {
  wishlist: Ref<Activity[]>
  cart: Ref<Activity[]>
  totalCartPrice: ComputedRef<string>
  toggleInCart: (activity: Activity) => void
  toggleInWishlist: (activity: Activity) => void
  isInCart: (activity: Activity) => boolean
  isInWishlist: (activity: Activity) => boolean
}

export function getGlobalStore(): Store {
  const cart = ref<Activity[]>([])
  const wishlist = ref<Activity[]>([])

  const totalCartPrice = computed<string>(() => {
    const total = cart.value.reduce((acc, cur) => {
      return acc + cur.retail_price.value
    }, 0)

    const currencies = cart.value.map((i) => i.retail_price.currency)

    if (new Set(currencies).size !== 1) {
      return total.toFixed(2)
    }

    const formatter = new Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: currencies[0],
    })

    return formatter.format(total)
  })

  const filterBag = (bag: Activity[], activity: Activity) =>
    bag.filter((a) => a.uuid !== activity.uuid)

  const isInBag = (bag: Activity[], activity: Activity) => {
    const found = bag.find((a) => a.uuid === activity.uuid)
    return found !== undefined
  }

  const toggleInBag = (bag: Activity[], activity: Activity) =>
    isInBag(bag, activity) ? filterBag(bag, activity) : [...bag, activity]

  function toggleInCart(activity: Activity) {
    cart.value = toggleInBag(cart.value, activity)
  }

  function toggleInWishlist(activity: Activity) {
    wishlist.value = toggleInBag(wishlist.value, activity)
  }

  const isInCart = (activity: Activity) => isInBag(cart.value, activity)
  const isInWishlist = (activity: Activity) => isInBag(wishlist.value, activity)

  return {
    cart,
    wishlist,
    totalCartPrice,
    toggleInCart,
    toggleInWishlist,
    isInCart,
    isInWishlist,
  }
}
