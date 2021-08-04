import {
  computed,
  ComputedRef,
  inject,
  InjectionKey,
  provide,
  Ref,
  ref,
} from '@nuxtjs/composition-api'
import { Activity } from '~/types/activity'

type Store = {
  wishlist: Ref<Activity[]>
  cart: Ref<Activity[]>
  totalCartPrice: ComputedRef<number>
  toggleInCart: (activity: Activity) => void
  toggleInWishlist: (activity: Activity) => void
  isInCart: (activity: Activity) => boolean
  isInWishlist: (activity: Activity) => boolean
}

const key: InjectionKey<Store> = Symbol('useGlobalStore')

function provideGlobalStore(store: Store) {
  provide(key, store)
}

export function injectGlobalStore() {
  const value = inject(key)
  if (value) return value
  throw new Error(
    'injectGlobalStore must be used within a component that uses useGlobalStore'
  )
}

export function useGlobalStore(): Store {
  const cart = ref<Activity[]>([])
  const wishlist = ref<Activity[]>([])

  const totalCartPrice = computed(() =>
    cart.value.reduce((acc, cur) => acc + cur.retail_price.value, 0)
  )

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

  const returnValue: Store = {
    cart,
    wishlist,
    totalCartPrice,
    toggleInCart,
    toggleInWishlist,
    isInCart,
    isInWishlist,
  }

  provideGlobalStore(returnValue)

  return returnValue
}
