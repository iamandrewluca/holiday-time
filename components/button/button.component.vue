<template>
  <button
    :class="[$style.root, $style[variant]]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { getPropFromArrayEnum } from '~/utils/get-prop-from-array-enum'

export default defineComponent({
  name: 'Button',
  props: {
    variant: getPropFromArrayEnum(
      ['contained', 'outlined'] as const,
      'contained'
    ),
  },
})
</script>

<style module lang="scss">
@import '../variables';

$dark: #333;
$dark-blue: #334;
$gray: #ccc;

.root {
  border-radius: 9999px;
  font-size: 0.8rem;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 0.3s;
}

.contained {
  background-color: $gray;
  border: 1px solid $gray;

  &:hover {
    background-color: $dark-blue;
    border-color: $dark-blue;
    color: $white;
  }

  &:active,
  &:focus {
    background-color: $dark;
    border-color: $dark;
    color: $white;
  }
}

.outlined {
  background-color: transparent;
  border: 1px solid $gray;

  &:hover {
    background-color: $dark-blue;
    border-color: $dark-blue;
    color: $white;
  }

  &:active,
  &:focus {
    background-color: $dark;
    border-color: $dark;
    color: $white;
  }
}
</style>
