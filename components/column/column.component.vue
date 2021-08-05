<template>
  <div :class="$style.column">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({ name: 'Column' })
</script>

<style module lang="scss">
@import '../variables';

.column {
  max-width: 100%;
  padding-left: $gutter;
  padding-right: $gutter;
}
</style>
