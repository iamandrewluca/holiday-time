import {
  computed,
  ComputedRef,
  inject,
  InjectionKey,
  onMounted,
  provide,
  Ref,
  ref,
} from '@nuxtjs/composition-api'
import { Activity } from '~/types/activity'

type Store = {
  wishlist: Ref<Activity[]>
  cart: Ref<Activity[]>
  totalCartPrice: ComputedRef<string>
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

  onMounted(() => {
    cart.value = JSON.parse(localStorage.getItem('cart') ?? '[]')
    wishlist.value = JSON.parse(localStorage.getItem('wishlist') ?? '[]')
  })

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
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  function toggleInWishlist(activity: Activity) {
    wishlist.value = toggleInBag(wishlist.value, activity)
    localStorage.setItem('wishlist', JSON.stringify(wishlist.value))
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
