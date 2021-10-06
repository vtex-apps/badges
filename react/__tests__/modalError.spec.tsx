import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import ModalError from '../Components/modalError'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

const noop = () => {}

Object.defineProperty(window, 'scroll', { value: noop, writable: true })

describe('Modal Error Area', () => {
  it('should render the modal error', async () => {
    const { container } = render(
      <Context.Provider value={values}>
        <ModalError label="Marca" />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
  })

  it('button should close modal if click on it', async () => {
    const { getAllByTestId } = render(
      <Context.Provider value={values}>
        <ModalError label="Marca" />
      </Context.Provider>
    )

    const onClick = jest.fn()
    const button = getAllByTestId('button-modal-close')

    button[0].onclick = onClick

    fireEvent.click(button[0])

    expect(onClick).toHaveBeenCalled()
  })

  it('button should close modal if click on button ok', async () => {
    const { getAllByTestId } = render(
      <Context.Provider value={values}>
        <ModalError label="Marca" />
      </Context.Provider>
    )

    const onClick = jest.fn()
    const button = getAllByTestId('button-modal-ok')

    button[0].onclick = onClick

    fireEvent.click(button[0])

    expect(onClick).toHaveBeenCalled()
  })
})
