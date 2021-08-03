<template>
  <button :class="[$style.root, $style[variant]]">
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
@use '../variables' as variables;

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

  &:hover {
    background-color: $dark-blue;
    color: variables.$white;
  }

  &:active,
  &:focus {
    background-color: $dark;
    color: variables.$white;
  }
}

.outlined {
  background-color: transparent;
  border: 1px solid $gray;

  &:hover {
    background-color: $dark-blue;
    border-color: $dark-blue;
    color: variables.$white;
  }

  &:active,
  &:focus {
    background-color: $dark;
    color: variables.$white;
  }
}
</style>
