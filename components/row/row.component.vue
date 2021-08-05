<template>
  <div :class="$style.row">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({ name: 'Row' })
</script>

<style module lang="scss">
@import '../variables';

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: $gutter * -1;
  margin-right: $gutter * -1;
}
</style>
