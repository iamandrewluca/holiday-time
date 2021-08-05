import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import ActivityCard from './activity-card.component.vue'

describe('ActivityCard', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(ActivityCard, {
      props: {
        title: 'Product title',
        description: 'Product description',
        image: 'https:/picsum.photos/seed/123/1920/1080',
        price: '$ 12.00',
      },
    })

    expect(baseElement).toMatchSnapshot()
  })
})
