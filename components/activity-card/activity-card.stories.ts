import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import TheComponent from './activity-card.component.vue'
import Container from '~/components/container/container.component.vue'
import Row from '~/components/row/row.component.vue'
import Column from '~/components/column/column.component.vue'

export default <Meta>{
  title: 'Components / Activity Card',
  component: TheComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export const ActivityCard: Story = () =>
  defineComponent({
    components: { TheComponent, Container, Row, Column },
    faker,
    setup() {
      return {
        log: () => window.alert('Added to cart'),
      }
    },
    template: `
      <div class="bg-gray-100 min-h-screen p-5">
        <Container>
          <Row>
            <Column v-for="i in 6" :key="i" class="w-full sm:w-1/2 md:w-1/3 mb-10">
              <TheComponent
                :title='$options.faker.lorem.paragraph()'
                :description='$options.faker.lorem.paragraph()'
                image='https:/picsum.photos/seed/123/1920/1080'
                price='$ 50.00'
                :in-cart='i % 2 === 0'
                :in-wishlist='i % 2 === 1'
                @add-to-cart='log'
              />
            </Column>
          </Row>
        </Container>
      </div>
    `,
  })
