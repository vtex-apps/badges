import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import ModalEdit from '../Components/modalEdit'
import Context from '../Context/context'
import EditBadges from '../EditBadges'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('Edit Badges Area', () => {
  it('should render the editBadges area', async () => {
    const { container } = render(
      <Context.Provider value={{ ...values }}>
        <EditBadges />
      </Context.Provider>
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('should render and click on previous page button', async () => {
    const { container } = render(
      <Context.Provider value={{ ...values }}>
        <EditBadges />
      </Context.Provider>
    )

    const button = container.querySelectorAll('button')

    fireEvent.click(button[1])
    expect(container.firstChild).not.toBeNull()
  })

  it('should render and click on next page button', async () => {
    const { container } = render(
      <Context.Provider value={{ ...values }}>
        <EditBadges />
      </Context.Provider>
    )

    const button = container.querySelectorAll('button')

    fireEvent.click(button[2])
    expect(container.firstChild).not.toBeNull()
  })

  it('should change how much values apeers on edit table', async () => {
    const { container, getAllByText } = render(
      <Context.Provider value={{ ...values }}>
        <EditBadges />
      </Context.Provider>
    )

    const select = container.querySelectorAll('select')

    const changeSelectValue = { target: { value: '10' } }

    fireEvent.change(select[0], changeSelectValue)

    const valueSelect = getAllByText('10')

    expect(valueSelect).toHaveLength(2)
  })

  it('should render the modalDelete area', async () => {
    const modalDelete = { modalDelete: true }
    const { getByTestId } = render(
      <Context.Provider value={{ ...values, ...modalDelete }}>
        <EditBadges />
      </Context.Provider>
    )

    expect(getByTestId('button-modal-close')).toContainHTML('button')
  })

  it('should render the modalEdit area', async () => {
    const modalEdit = { modalEdit: true }
    const { getByTestId } = render(
      <Context.Provider value={{ ...values, ...modalEdit }}>
        <EditBadges />
      </Context.Provider>
    )

    expect(getByTestId('button-modal-edit-close')).toContainHTML('button')
  })
})
