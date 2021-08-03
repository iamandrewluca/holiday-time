import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import TheComponent from './container.component.vue'

export default <Meta>{
  title: 'Components / Container',
  component: TheComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Container: Story = () =>
  defineComponent({
    components: { TheComponent },
    faker,
    template: `<TheComponent>{{ $options.faker.lorem.paragraphs(10) }}</TheComponent>`,
  })
