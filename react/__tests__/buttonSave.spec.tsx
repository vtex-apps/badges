import { fireEvent, render, screen } from '@vtex/test-tools/react'
import React from 'react'

import ButtonSaveArea from '../Components/buttonSave'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Button Save Area', () => {
  it('should render the save button', async () => {
    render(
      <Context.Provider value={values}>
        <ButtonSaveArea />
      </Context.Provider>
    )

    const screenValue = await screen.findByTestId('button-save')

    expect(screenValue).toContainHTML('button')
  })

  it('should test onClick button', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <ButtonSaveArea />
      </Context.Provider>
    )

    const button = getByTestId('button-save')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
