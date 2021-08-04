<template>
  <header class="header">
    <Container class="flex justify-between items-center">
      <nuxt-link
        :to="{ path: '/', query: { page: $route.query.page } }"
        class="header__logo"
      >
        🏖
      </nuxt-link>
      <div class="inline-flex space-x-3 items-center">
        <span
          v-if="cartCount !== 0"
          class="text-xs rounded-full bg-yellow-500 text-white py-1 px-2"
        >
          {{ price }}
        </span>
        <nuxt-link to="/cart" class="relative">
          <span
            v-if="cartCount !== 0"
            class="
              absolute
              bg-yellow-500
              text-white text-xs
              px-1
              -bottom-2
              -right-1
              rounded-full
            "
          >
            {{ cartCount }}
          </span>
          <Bag />
        </nuxt-link>
        <nuxt-link to="/wishlist" class="relative">
          <span
            v-if="wishlistCount !== 0"
            class="
              absolute
              bg-yellow-500
              text-white text-xs
              px-1
              -bottom-2
              -right-1
              rounded-full
            "
          >
            {{ wishlistCount }}
          </span>
          <Star />
        </nuxt-link>
      </div>
    </Container>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { PropType } from '@vue/composition-api'
import Container from '~/components/container/container.component.vue'
import Star from '~/components/shared/star.vue'
import Bag from '~/components/shared/bag.vue'

export default defineComponent({
  name: 'Header',
  components: { Bag, Star, Container },
  props: {
    price: {
      type: String as PropType<string>,
      required: true,
    },
    cartCount: {
      type: Number as PropType<number>,
      required: true,
    },
    wishlistCount: {
      type: Number as PropType<number>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
@use '../variables' as variables;

.header {
  background-color: variables.$white;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  // Hello BEM
  &__logo {
    font-size: 3rem;
  }
}
</style>
