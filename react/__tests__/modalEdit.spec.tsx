import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import ModalEdit from '../Components/modalEdit'
import Context from '../Context/context'
import { ButtonOptions } from '../utils/buttonOptions'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

const noop = () => {}

Object.defineProperty(window, 'scroll', { value: noop, writable: true })

describe('Modal Edit Area', () => {
  it('should render the modal edit', async () => {
    const editModal = { modalEdit: true }
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }

    const { container } = render(
      <Context.Provider value={{ ...values, ...editModal, ...conditions }}>
        <ModalEdit />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
  })

  it('should render the modal edit with ImageEdit if button = image', async () => {
    const editModal = { modalEdit: true }
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.image }
    const showImage = { showImage: false }
    const fileResult = { file: { result: true } }

    const { getAllByTestId } = render(
      <Context.Provider
        value={{
          ...values,
          ...editModal,
          ...conditions,
          ...button,
          ...showImage,
          ...fileResult,
        }}
      >
        <ModalEdit />
      </Context.Provider>
    )

    const buttonValue = getAllByTestId('button-show-image-false')

    expect(buttonValue[0]).not.toBe('')
  })

  it('should render the modal edit with InputArea if button = text', async () => {
    const editModal = { modalEdit: true }
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.text }

    const { getAllByTestId } = render(
      <Context.Provider
        value={{
          ...values,
          ...editModal,
          ...conditions,
          ...button,
        }}
      >
        <ModalEdit />
      </Context.Provider>
    )

    const buttonValue = getAllByTestId('input-text')

    expect(buttonValue[0]).not.toBe('')
  })

  it('should render the modal edit with HtmlArea if button = html', async () => {
    const editModal = { modalEdit: true }
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }
    const button = { button: ButtonOptions.html }

    render(
      <Context.Provider
        value={{
          ...values,
          ...editModal,
          ...conditions,
          ...button,
        }}
      >
        <ModalEdit />
      </Context.Provider>
    )

    const textArea = document.getElementById('text-area')

    expect(textArea).toContainHTML('textarea')
  })

  it('button should close modal if click on it', async () => {
    const editModal = { modalEdit: true }
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }

    const { getAllByTestId } = render(
      <Context.Provider value={{ ...values, ...editModal, ...conditions }}>
        <ModalEdit />
      </Context.Provider>
    )

    const onClick = jest.fn()
    const button = getAllByTestId('button-modal-edit-close')

    button[0].onclick = onClick

    fireEvent.click(button[0])

    expect(onClick).toHaveBeenCalled()
  })

  it('button should edit modal if click on it', async () => {
    const editModal = { modalEdit: true }
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }

    const { getAllByTestId } = render(
      <Context.Provider value={{ ...values, ...editModal, ...conditions }}>
        <ModalEdit />
      </Context.Provider>
    )

    const onClick = jest.fn()
    const button = getAllByTestId('button-modal-edit')

    button[0].onclick = onClick

    fireEvent.click(button[0])

    expect(onClick).toHaveBeenCalled()
  })
})
