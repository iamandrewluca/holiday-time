import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Component from './container.component.vue'

export default <Meta>{
  title: 'Components / Grid',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Container: Story = () =>
  defineComponent({
    components: { Component },
    faker,
    template: `<Component>{{ $options.faker.lorem.paragraphs(10) }}</Component>`,
  })
