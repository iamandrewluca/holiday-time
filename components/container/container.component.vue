<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({ name: 'Container' })
</script>

<style module lang="scss">
@import '../variables';

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: $gutter;
  padding-right: $gutter;
  width: 100%;
}

@each $breakpoint in $breakpoints {
  @media (min-width: #{$breakpoint}) {
    .container {
      max-width: #{$breakpoint};
    }
  }
}
</style>
