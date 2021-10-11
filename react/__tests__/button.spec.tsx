import { fireEvent, render, screen } from '@vtex/test-tools/react'
import React from 'react'

import ButtonArea from '../Components/button'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Button Area', () => {
  it('should render title of Button Group', async () => {
    const { container } = render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('should render button when testdId = button-image', async () => {
    render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    const screenValue = await screen.findByTestId('button-image')

    expect(screenValue).toContainHTML('button')
  })

  it('should click button when testdId = button-image', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    const button = getByTestId('button-image')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should render button when testdId = button-text', async () => {
    render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    const screenValue = await screen.findByTestId('button-text')

    expect(screenValue).toContainHTML('button')
  })

  it('should click button when testdId = button-text', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    const button = getByTestId('button-text')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should render button when testdId = button-html', async () => {
    render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    const screenValue = await screen.findByTestId('button-html')

    expect(screenValue).toContainHTML('button')
  })

  it('should click button when testdId = button-html', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    const button = getByTestId('button-html')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
