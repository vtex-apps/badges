import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import InputArea from '../Components/input'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Input Area', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render InputArea if name is name', async () => {
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <InputArea name="name" />
      </Context.Provider>
    )

    const input = getByTestId('input-name')

    expect(input).toContainHTML('input')
  })
  it('should render InputArea if name is text', async () => {
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <InputArea name="text" />
      </Context.Provider>
    )

    const input = getByTestId('input-text')

    expect(input).toContainHTML('input')
  })

  it('should change value if name = name', async () => {
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <InputArea name="name" />
      </Context.Provider>
    )

    const changeValue = { target: { value: 'changeValueInput' } }

    // The return of getbytestid was a label with input inside, the label has no onChange state
    const input = getByTestId('input-name').querySelector('input')

    fireEvent.change(input as HTMLInputElement, changeValue)

    expect(values.setName).toHaveBeenCalledWith('changeValueInput')
  })

  it('should change value if name = text', async () => {
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <InputArea name="text" />
      </Context.Provider>
    )

    const changeValue = { target: { value: 'changeValueInput' } }
    const input = getByTestId('input-text').querySelector('input')

    fireEvent.change(input as HTMLInputElement, changeValue)

    expect(values.setText).toHaveBeenCalledWith('changeValueInput')
  })
})
