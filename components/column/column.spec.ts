import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import Column from './column.component.vue'

describe('Column', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(Column)
    expect(baseElement).toMatchSnapshot()
  })
})
