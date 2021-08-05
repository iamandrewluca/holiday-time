import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import Footer from './footer.section.vue'

describe('Footer', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(Footer)
    expect(baseElement).toMatchSnapshot()
  })
})
