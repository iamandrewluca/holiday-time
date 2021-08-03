import { Meta, Story } from '@storybook/vue'
import { defineComponent } from '@nuxtjs/composition-api'
import TheSection from './footer.section.vue'

export default <Meta>{
  title: 'Sections / Footer',
  component: TheSection,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Footer: Story = () =>
  defineComponent({
    components: { TheSection },
    template: `
      <div class='h-screen bg-gray-100 flex flex-col'>
        <TheSection class='mt-auto' />
      </div>
    `,
  })
