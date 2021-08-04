<template>
  <Container>
    <Row>
      <Column
        v-for="item in items"
        :key="item.uuid"
        class="w-full sm:w-1/2 md:w-1/3 mb-10"
      >
        <ActivityCard
          :title="item.title"
          :description="item.description"
          :price="item.retail_price.formatted_value"
          :image="item.cover_image_url"
          :in-cart="isInCart(item)"
          :in-wishlist="isInWishlist(item)"
          @add-to-cart="toggleInCart(item)"
          @add-to-wishlist="toggleInWishlist(item)"
        />
      </Column>
    </Row>
    <div class="flex justify-center mb-6">
      <Pagination @next="shiftPage(+1)" @previous="shiftPage(-1)" />
    </div>
  </Container>
</template>

<script lang="ts">
import {
  defineComponent,
  readonly,
  Ref,
  ref,
  useContext,
  useFetch,
  useRoute,
  useRouter,
  watch,
} from '@nuxtjs/composition-api'
import Container from '~/components/container/container.component.vue'
import { getActivitiesUrl } from '~/utils/get-activities-url'
import Row from '~/components/row/row.component.vue'
import Column from '~/components/column/column.component.vue'
import ActivityCard from '~/components/activity-card/activity-card.component.vue'
import Pagination from '~/components/pagination/pagination.component.vue'
import { clamp } from '~/utils/clamp'
import { Activity } from '~/types/activity'
import { injectGlobalStore } from '~/composition/use-global-store'

export default defineComponent({
  components: { ActivityCard, Column, Row, Container, Pagination },
  setup() {
    const { page, shiftPage } = useRouterPage()
    const items = useActivities(page)
    const { isInWishlist, isInCart, toggleInWishlist, toggleInCart } =
      injectGlobalStore()

    return {
      items,
      shiftPage,
      isInWishlist,
      isInCart,
      toggleInWishlist,
      toggleInCart,
    }
  },
})

function useActivities(page: Ref<number>) {
  const { $axios } = useContext()
  const items = ref<Activity[]>([])
  const perPage = 6

  const { fetch } = useFetch(async () => {
    const url = getActivitiesUrl(page.value * perPage, perPage)
    const response = await $axios.get(url)
    items.value = response.data
  })

  watch(page, () => fetch())

  return items
}

function useRouterPage(defaultPage = 0) {
  const route = useRoute()
  const router = useRouter()
  const queryPage = Number.parseInt(route.value.query.page as string, 10)
  const page = ref(Number.isNaN(queryPage) ? defaultPage : queryPage)

  function shiftPage(shift: number) {
    page.value = clamp(page.value + shift, 0, Infinity)
  }

  watch(page, () => router.push({ query: { page: page.value.toString(10) } }))

  return {
    page: readonly(page),
    shiftPage,
  }
}
</script>
