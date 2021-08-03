import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '../container/container.component.vue'
import Row from '../row/row.component.vue'
import TheComponent from './column.component.vue'

export default <Meta>{
  title: 'Components / Column',
  component: TheComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Column: Story = () =>
  defineComponent({
    components: { TheComponent, Container, Row },
    faker,
    template: `
      <Container>
        <Row>
          <TheComponent class='w-1/2 bg-red-200'>
            {{ $options.faker.lorem.paragraphs(5) }}
          </TheComponent>
          <TheComponent class='w-1/2 bg-blue-200'>
            {{ $options.faker.lorem.paragraphs(5) }}
          </TheComponent>
          <TheComponent class='bg-yellow-200'>
            {{ $options.faker.lorem.paragraphs(5) }}
          </TheComponent>
        </Row>
      </Container>
    `,
  })
