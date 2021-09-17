import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'
import HtmlArea from '../Components/textarea'

describe('Text Area', () => {
  it('should render the text area', async () => {
    const { container } = render(
      <Context.Provider value={{ ...values }}>
        <HtmlArea />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
  })

  it('should render change text area', async () => {
    render(
      <Context.Provider value={{ ...values }}>
        <HtmlArea />
      </Context.Provider>
    )

    const textArea = document.getElementById('text-area')

    const changeValue = { target: { value: 'htmlChange' } }

    fireEvent.change(textArea as HTMLInputElement, changeValue)

    expect(values.setHtml).toHaveBeenCalledWith('htmlChange')
  })
})
