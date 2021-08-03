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
@use "../variables" as variables;

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: variables.$gutter;
  padding-right: variables.$gutter;
  width: 100%;
}

@each $breakpoint in variables.$breakpoints {
  @media (min-width: #{$breakpoint}) {
    .container {
      max-width: #{$breakpoint};
    }
  }
}
</style>
