import { inject, InjectionKey, provide } from '@nuxtjs/composition-api'
import { Store } from '~/utils/get-global-store'

const key: InjectionKey<Store> = Symbol('useGlobalStore')

export function provideGlobalStore(store: Store) {
  provide(key, store)
  return store
}

export function useGlobalStore() {
  const value = inject(key)
  if (value) return value
  throw new Error(
    'useGlobalStore must be used within a component that uses provideGlobalStore'
  )
}
