import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '../container/container.component.vue'
import Column from '../column/column.component.vue'
import TheComponent from './row.component.vue'

export default <Meta>{
  title: 'Components / Row',
  component: TheComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Row: Story = () =>
  defineComponent({
    components: { TheComponent, Container, Column },
    faker,
    template: `
      <Container>
        <TheComponent>
          <Column>
            {{ $options.faker.lorem.paragraphs(10) }}
          </Column>
        </TheComponent>
      </Container>
    `,
  })
