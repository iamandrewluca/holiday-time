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
@use "../variables" as variables;

.column {
  max-width: 100%;
  padding-left: variables.$gutter;
  padding-right: variables.$gutter;
}
</style>
