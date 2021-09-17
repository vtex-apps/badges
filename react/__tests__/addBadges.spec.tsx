import { render } from '@vtex/test-tools/react'
import React from 'react'

import AddBages from '../AddBadges'
import Context from '../Context/context'
import { ButtonOptions } from '../utils/buttonOptions'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Add Badges Area', () => {
  it('should render the addBadges area', async () => {
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.image }

    const { container } = render(
      <Context.Provider value={{ ...values, ...conditions, ...button }}>
        <AddBages />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
  })

  it('should render the addBadges area with ImageEdit if button = image', async () => {
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.image }
    const showImage = { showImage: false }
    const fileResult = { file: { result: true } }

    const { container } = render(
      <Context.Provider
        value={{
          ...values,
          ...conditions,
          ...button,
          ...showImage,
          ...fileResult,
        }}
      >
        <AddBages />
      </Context.Provider>
    )

    expect(container).toContainHTML('input')
  })

  it('should render the addBadges area with InputArea if button = text', async () => {
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.text }

    const { getAllByTestId } = render(
      <Context.Provider
        value={{
          ...values,
          ...conditions,
          ...button,
        }}
      >
        <AddBages />
      </Context.Provider>
    )

    const buttonValue = getAllByTestId('input-text')

    expect(buttonValue[0]).not.toBe('')
  })

  it('should render the addBadges area with HtmlArea if button = html', async () => {
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.html }

    render(
      <Context.Provider
        value={{
          ...values,
          ...conditions,
          ...button,
        }}
      >
        <AddBages />
      </Context.Provider>
    )

    const textArea = document.getElementById('text-area')

    expect(textArea).toContainHTML('textarea')
  })
})
