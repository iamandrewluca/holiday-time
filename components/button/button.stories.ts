import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import TheComponent from './button.component.vue'
import Container from '~/components/container/container.component.vue'
import Row from '~/components/row/row.component.vue'
import Column from '~/components/column/column.component.vue'

export default <Meta>{
  title: 'Components / Button',
  component: TheComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Button: Story = () =>
  defineComponent({
    components: { TheComponent, Container, Row, Column },
    faker,
    template: `
      <div class="p-5">
        <Container>
          <Row>
            <Column v-for="i in 6" :key="i" class="w-full sm:w-1/2 md:w-1/3 mb-10">
              <TheComponent
                :variant="i % 2 === 0 ? 'contained' : 'outlined'"
                class='w-full'>
                Button {{ i }}
              </TheComponent>
            </Column>
          </Row>
        </Container>
      </div>
    `,
  })
