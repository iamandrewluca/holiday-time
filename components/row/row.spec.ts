import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import Row from './row.component.vue'

describe('Row', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(Row)
    expect(baseElement).toMatchSnapshot()
  })
})
