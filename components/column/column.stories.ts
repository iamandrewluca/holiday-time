import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import faker from 'faker'
import Container from '../container/container.component.vue'
import Row from '../row/row.component.vue'
import Component from './column.component.vue'

export default <Meta>{
  title: 'Grid',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Column: Story = () =>
  defineComponent({
    components: { Component, Container, Row },
    faker,
    template: `
      <Container>
        <Row>
          <Component class='w-1/2 bg-red-200'>
            {{ $options.faker.lorem.paragraphs(5) }}
          </Component>
          <Component class='w-1/2 bg-blue-200'>
            {{ $options.faker.lorem.paragraphs(5) }}
          </Component>
          <Component class='bg-yellow-200'>
            {{ $options.faker.lorem.paragraphs(5) }}
          </Component>
        </Row>
      </Container>
    `,
  })
