<template>
  <footer class="footer">
    <Container>
      <span>✨✨✨</span>
      <span class="footer__text"
        >Have fun in {{ new Date().getFullYear() }}</span
      >
      <span>✨✨✨</span>
    </Container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Container from '~/components/container/container.component.vue'

export default defineComponent({
  name: 'Footer',
  components: { Container },
})
</script>

<style scoped lang="scss">
@import '../variables';

.footer {
  background-color: $white;
  color: $goldy;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;

  &__text {
    text-decoration: underline;
  }
}
</style>
