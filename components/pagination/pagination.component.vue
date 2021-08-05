<template>
  <div class="inline-flex justify-even space-x-3">
    <button
      class="bg-yellow-300 text-yellow-900 rounded-lg py-2 px-5"
      @click="$emit('previous')"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
        ></path>
      </svg>
    </button>
    <span class="bg-yellow-300 text-yellow-900 rounded-lg py-2 px-5">
      {{ page }}
    </span>
    <button
      class="bg-yellow-300 text-yellow-900 rounded-lg py-2 px-5"
      @click="$emit('next')"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Number as PropType<number>,
      required: true,
    },
  },
})
</script>
