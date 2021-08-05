import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '../container/container.component.vue'
import TheComponent from './pagination.component.vue'

export default <Meta>{
  title: 'Components / Pagination',
  component: TheComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Pagination: Story = () =>
  defineComponent({
    components: { TheComponent, Container },
    faker,
    template: `
      <Container class='flex justify-center py-5'>
        <TheComponent :page='1' />
      </Container>
    `,
  })
