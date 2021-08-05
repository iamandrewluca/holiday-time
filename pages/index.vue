<template>
  <Container>
    <div
      v-if="fetchState.pending"
      class="text-4xl flex justify-center px-10 py-24"
    >
      Loading activities...
    </div>
    <Row v-else data-testid="activities-grid">
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
    <div v-if="!fetchState.pending" class="flex justify-center mb-6">
      <Pagination
        :page="page"
        @next="shiftPage(+1)"
        @previous="shiftPage(-1)"
      />
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
import { useGlobalStore } from '~/utils/use-global-store'

export default defineComponent({
  components: { ActivityCard, Column, Row, Container, Pagination },
  setup() {
    const { page, shiftPage } = useRouterPage()
    const { items, fetchState } = useActivities(page)
    const { isInWishlist, isInCart, toggleInWishlist, toggleInCart } =
      useGlobalStore()

    return {
      page,
      items,
      shiftPage,
      isInWishlist,
      isInCart,
      toggleInWishlist,
      toggleInCart,
      fetchState,
    }
  },
})

function useActivities(page: Ref<number>) {
  const { $axios } = useContext()
  const items = ref<Activity[]>([])
  const perPage = 6

  const { fetch, fetchState } = useFetch(async () => {
    const offset = (page.value - 1) * perPage
    const url = getActivitiesUrl(offset, perPage)
    const response = await $axios.get(url)
    items.value = response.data
  })

  watch(page, () => fetch())

  return { items, fetchState }
}

function useRouterPage(defaultPage = 1) {
  const route = useRoute()
  const router = useRouter()
  const queryPage = Number.parseInt(route.value.query.page as string, 10)
  const page = ref(Number.isNaN(queryPage) ? defaultPage : queryPage)

  function shiftPage(shift: number) {
    page.value = clamp(page.value + shift, 1, Infinity)
  }

  watch(page, () => router.push({ query: { page: page.value.toString(10) } }))

  return {
    page: readonly(page),
    shiftPage,
  }
}
</script>
