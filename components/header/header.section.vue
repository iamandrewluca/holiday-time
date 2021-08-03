<template>
  <header class="header">
    <Container>
      <span class="header__logo">🏖</span>
    </Container>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Container from '~/components/container/container.component.vue'

export default defineComponent({ components: { Container } })
</script>

<style scoped lang="scss">
@use '../variables' as variables;

.header {
  background-color: variables.$white;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  // Hello BEM
  &__logo {
    font-size: 3rem;
  }
}
</style>
