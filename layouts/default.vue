<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="top-0 sticky">
      <Header />
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/header/header.section.vue'

export default defineComponent({
  components: { Header },
})
</script>
