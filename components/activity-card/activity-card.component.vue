<template>
  <div class="activity-card">
    <AspectRatio :w="1" :h="1">
      <button
        class="activity-card__star"
        :class="{ 'activity-card__star--active': inWishlist }"
        @click="$emit('add-to-wishlist')"
      >
        <Star />
      </button>
      <img :src="image" class="activity-card__image" alt="" />
      <span class="activity-card__price">{{ price }}</span>
    </AspectRatio>
    <h3 class="activity-card__title">{{ title }}</h3>
    <p class="activity-card__description">{{ description }}</p>
    <Button
      class="w-full"
      :variant="inCart ? 'contained' : 'outlined'"
      @click="$emit('add-to-cart')"
    >
      <template v-if="inCart">In Cart</template>
      <template v-else>Add to Cart</template>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { PropType } from '@vue/composition-api'
import Button from '~/components/button/button.component.vue'
import AspectRatio from '~/components/aspect-ratio/aspect-ratio.component.vue'
import Star from '~/components/shared/star.vue'

export default defineComponent({
  name: 'ActivityCard',
  components: { Button, AspectRatio, Star },
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    image: {
      type: String as PropType<string>,
      required: true,
    },
    price: {
      type: String as PropType<string>,
      required: true,
    },
    inCart: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
    inWishlist: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
  },
})
</script>

<style scoped lang="scss">
@use '../variables' as variables;

.activity-card {
  background-color: variables.$white;
  border-radius: 30px;
  box-shadow: 0 0 20px -10px #cba;
  padding: 20px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 25px 0 #cba;
  }

  &__image {
    border-radius: 20px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &__title {
    margin-top: 5px;
    overflow: hidden;
    padding: 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__description {
    margin-bottom: 10px;
    overflow: hidden;
    padding: 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__price {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    bottom: 10px;
    color: variables.$white;
    font-size: 0.7rem;
    left: 10px;
    padding: 5px 10px;
    position: absolute;
  }

  &__star {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    color: variables.$white;
    cursor: pointer;
    padding: 5px;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }

  &__star--active {
    color: #fcd34d;
  }
}
</style>
