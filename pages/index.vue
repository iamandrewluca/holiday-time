<template>
  <Container>
    {{ $options.faker.lorem.paragraphs(20) }}
  </Container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '~/components/container/container.component.vue'

export default defineComponent({
  faker,
  components: { Container },
})
</script>
