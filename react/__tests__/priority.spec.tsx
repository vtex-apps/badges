import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import PriorityArea from '../Components/priority'
import Context from '../Context/context'
import { PriorityOptions } from '../utils/priorityOptions'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Priority Area', () => {
  it('should render an priority area', async () => {
    const priority = { priority: PriorityOptions.one }

    const { container } = render(
      <Context.Provider value={{ ...values, ...priority }}>
        <PriorityArea />
      </Context.Provider>
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('should click button when testdId = button-one', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <PriorityArea />
      </Context.Provider>
    )

    const button = getByTestId('button-one')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should click button when testdId = button-two', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <PriorityArea />
      </Context.Provider>
    )

    const button = getByTestId('button-two')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should click button when testdId = button-three', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <PriorityArea />
      </Context.Provider>
    )

    const button = getByTestId('button-three')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should click button when testdId = button-four', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <PriorityArea />
      </Context.Provider>
    )

    const button = getByTestId('button-four')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should click button when testdId = button-five', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <PriorityArea />
      </Context.Provider>
    )

    const button = getByTestId('button-five')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
