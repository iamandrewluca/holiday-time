import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import Button from './button.component.vue'

describe('Button', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(Button)
    expect(baseElement).toMatchSnapshot()
  })
})
