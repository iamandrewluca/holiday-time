<template>
  <Container>
    <h1 class="text-3xl mb-5">Your Cart</h1>
    <div
      v-if="cart.length === 0"
      class="rounded-xl bg-white mb-6 p-6 flex justify-between"
    >
      No items in Cart
    </div>
    <div
      v-for="item in cart"
      :key="item.uuid"
      class="
        rounded-xl
        bg-white
        mb-6
        overflow-hidden
        flex
        items-center
        space-x-6
        pr-6
      "
    >
      <img
        :src="item.cover_image_url"
        alt=""
        class="rounded-xl overflow-hidden w-16 h-16 object-cover flex-shrink-0"
      />
      <span class="truncate">{{ item.title }}</span>
      <span
        class="
          text-xs
          rounded-full
          bg-yellow-500
          text-white
          py-1
          px-2
          flex-shrink-0
        "
      >
        {{ item.retail_price.formatted_value }}
      </span>
      <button @click="toggleInCart(item)">
        <Trash />
      </button>
    </div>
    <div
      v-if="cart.length > 1"
      class="rounded-xl bg-white mb-6 p-6 flex justify-between"
    >
      <span>Total:</span>
      <span class="text-xs rounded-full bg-yellow-500 text-white py-1 px-2">
        {{ totalCartPrice }}
      </span>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Container from '~/components/container/container.component.vue'
import { injectGlobalStore } from '~/composition/use-global-store'
import Trash from '~/components/shared/trash.vue'

export default defineComponent({
  components: { Trash, Container },
  setup() {
    const { cart, totalCartPrice, toggleInCart } = injectGlobalStore()

    return { cart, totalCartPrice, toggleInCart }
  },
})
</script>
