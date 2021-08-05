import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import Container from './container.component.vue'

describe('Container', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(Container)
    expect(baseElement).toMatchSnapshot()
  })
})
