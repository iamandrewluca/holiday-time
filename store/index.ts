import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { Activity } from '~/types/activity'

// TODO: vuex is not used in this demo
// TODO: used instead provide/inject because is better typed

type State = {
  wishlist: Activity[]
  cart: Activity[]
}

export const state = (): State => ({
  wishlist: [],
  cart: [],
})

export const mutations: MutationTree<State> = {}
export const actions: ActionTree<State, State> = {}

export const getters: GetterTree<State, State> = {
  cartCount: (state) => state.cart.length,
  wishlistCount: (state) => state.wishlist.length,
  totalCartPrice: ({ cart }) =>
    cart.reduce((acc, cur) => acc + cur.retail_price.value, 0),
}
