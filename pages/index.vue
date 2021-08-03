<template>
  <Container>
    <Row>
      <Column
        v-for="item in items"
        :key="item.id"
        class="w-full sm:w-1/2 md:w-1/3 mb-10"
      >
        <ActivityCard
          :title="item.title"
          :description="item.description"
          :price="item.retail_price.formatted_value"
          :image="item.cover_image_url"
        />
      </Column>
    </Row>
  </Container>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '~/components/container/container.component.vue'
import { getActivitiesUrl } from '~/utils/get-activities-url'
import Row from '~/components/row/row.component.vue'
import Column from '~/components/column/column.component.vue'
import ActivityCard from '~/components/activity-card/activity-card.component.vue'

export default defineComponent({
  faker,
  components: { ActivityCard, Column, Row, Container },
  setup() {
    const { $axios } = useContext()
    const items = ref([])

    useFetch(async () => {
      const response = await $axios.get(getActivitiesUrl(0, 6))
      items.value = response.data
    })

    return {
      items,
    }
  },
})
</script>
