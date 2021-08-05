<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <div class="top-0 sticky z-10 shadow-sm">
      <Header
        :cart-count="cart.length"
        :wishlist-count="wishlist.length"
        :price="totalCartPrice"
      />
    </div>
    <div class="flex-grow" :class="$style.body">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/header/header.section.vue'
import Footer from '~/components/footer/footer.section.vue'
import { getGlobalStore, provideGlobalStore } from '~/utils/use-global-store'

export default defineComponent({
  components: { Header, Footer },
  setup() {
    const store = getGlobalStore()
    provideGlobalStore(store)
    const { totalCartPrice, cart, wishlist } = store

    return { totalCartPrice, cart, wishlist }
  },
})
</script>

<style module lang="scss">
@import '../components/variables';

.body {
  padding-bottom: $gutter;
  padding-top: $gutter;
}
</style>
