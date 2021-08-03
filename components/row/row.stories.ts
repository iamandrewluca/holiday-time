import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '../container/container.component.vue'
import Column from '../column/column.component.vue'
import Component from './row.component.vue'

export default <Meta>{
  title: 'Components / Grid',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Row: Story = () =>
  defineComponent({
    components: { Component, Container, Column },
    faker,
    template: `
      <Container>
        <Component>
          <Column>
            {{ $options.faker.lorem.paragraphs(10) }}
          </Column>
        </Component>
      </Container>
    `,
  })
