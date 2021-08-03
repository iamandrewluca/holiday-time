<template>
  <div
    :class="$style.root"
    :style="`padding-bottom: calc(${h} / ${w} * 100%);`"
  >
    <div :class="$style.inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'AspectRatio',
  props: {
    h: {
      type: Number as PropType<number>,
      required: true,
    },
    w: {
      type: Number as PropType<number>,
      required: true,
    },
  },
})
</script>

<style module lang="scss">
.root {
  position: relative;
}

.inner {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
