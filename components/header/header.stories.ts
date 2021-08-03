import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import TheSection from './header.section.vue'

export default <Meta>{
  title: 'Sections / Header',
  component: TheSection,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Header: Story = () =>
  defineComponent({
    components: { TheSection },
    template: `
      <div class='h-screen bg-gray-100'>
        <TheSection />
      </div>
    `,
  })
