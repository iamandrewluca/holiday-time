<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <div class="top-0 sticky">
      <Header />
    </div>
    <div class="flex-grow" :class="$style.body">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/header/header.section.vue'
import Footer from '~/components/footer/footer.section.vue'

export default defineComponent({
  components: { Header, Footer },
})
</script>

<style module lang="scss">
@use '../components/variables' as variables;

.body {
  padding-bottom: variables.$gutter;
  padding-top: variables.$gutter;
}
</style>
