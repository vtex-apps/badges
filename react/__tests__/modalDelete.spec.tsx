import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import ModalDelete from '../Components/modalDelete'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

const noop = () => {}

Object.defineProperty(window, 'scroll', { value: noop, writable: true })

describe('Modal Delete Area', () => {
  it('should render the modal delete', async () => {
    const deleteModal = { modalDelete: true }

    const { container } = render(
      <Context.Provider value={{ ...values, ...deleteModal }}>
        <ModalDelete />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
  })

  it('button should close modal if click on it', async () => {
    const deleteModal = { modalDelete: true }
    const { getAllByTestId } = render(
      <Context.Provider value={{ ...values, ...deleteModal }}>
        <ModalDelete />
      </Context.Provider>
    )

    const onClick = jest.fn()
    const button = getAllByTestId('button-modal-close')

    button[0].onclick = onClick

    fireEvent.click(button[0])

    expect(onClick).toHaveBeenCalled()
  })

  it('button should delete modal if click on it', async () => {
    const deleteModal = { modalDelete: true }
    const { getAllByTestId } = render(
      <Context.Provider value={{ ...values, ...deleteModal }}>
        <ModalDelete />
      </Context.Provider>
    )

    const onClick = jest.fn()
    const button = getAllByTestId('button-modal-delete')

    button[0].onclick = onClick

    fireEvent.click(button[0])

    expect(onClick).toHaveBeenCalled()
  })
})
