import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import Section from './header.section.vue'

export default <Meta>{
  title: 'Sections / Header',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Header: Story = () =>
  defineComponent({
    components: { Section },
    template: `
      <div class='h-screen bg-gray-100'>
        <Section />
      </div>
    `,
  })
