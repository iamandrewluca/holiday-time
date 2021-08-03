import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import Section from './footer.section.vue'

export default <Meta>{
  title: 'Sections / Footer',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Footer: Story = () =>
  defineComponent({
    components: { Section },
    template: `
      <div class='h-screen bg-gray-100 flex flex-col'>
        <Section class='mt-auto' />
      </div>
    `,
  })
