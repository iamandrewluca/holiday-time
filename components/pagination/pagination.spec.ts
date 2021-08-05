import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import Pagination from './pagination.component.vue'

describe('Pagination', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(Pagination, { props: { page: 1 } })
    expect(baseElement).toMatchSnapshot()
  })
})
