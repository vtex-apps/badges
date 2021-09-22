import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import BadgesArea from '../BadgesArea'

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }

describe('Badges Area', () => {
  it('should render the Badges Area', async () => {
    const { container } = render(<BadgesArea></BadgesArea>)

    expect(container).not.toBeNull()
  })

  it('should click on button Tab 1', async () => {
    const onClick = jest.fn()
    const { container } = render(<BadgesArea></BadgesArea>)

    const returnValue = container.getElementsByClassName('vtex-tab__button')

    const button = returnValue[0] as HTMLButtonElement

    button.onclick = onClick()

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should click on button Tab 2', async () => {
    const onClick = jest.fn()

    const { container } = render(<BadgesArea></BadgesArea>)

    const returnValue = container.getElementsByClassName('vtex-tab__button')

    const button = returnValue[1] as HTMLButtonElement

    button.onclick = onClick()

    fireEvent.click(returnValue[1])

    expect(onClick).toHaveBeenCalled()
  })
})
