import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/vue'
import AspectRatio from './aspect-ratio.component.vue'

describe('AspectRatio', () => {
  it('should render and match snapshot', () => {
    const { baseElement } = render(AspectRatio, {
      props: { h: 1, w: 1 },
    })
    expect(baseElement).toMatchSnapshot()
  })
})
