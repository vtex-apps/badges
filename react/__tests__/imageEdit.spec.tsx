import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import ImageEdit from '../Components/imageEdit'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Image Edit Area', () => {
  it('should render the Image Area if showImage = false', async () => {
    const showImage = { showImage: false }

    const { container } = render(
      <Context.Provider value={{ ...values, ...showImage }}>
        <ImageEdit />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
    expect(container).toContainHTML('input')
  })

  it('button should change value to true of showImage if click on it', async () => {
    const showImage = { showImage: false }
    const fileResult = { file: { result: true } }

    const { getByTestId } = render(
      <Context.Provider value={{ ...values, ...showImage, ...fileResult }}>
        <ImageEdit />
      </Context.Provider>
    )

    const screenValue = getByTestId('button-show-image-false')

    fireEvent.click(screenValue)

    jest.spyOn(values, 'setShowImage').mockImplementation(value => !value)

    expect(values.setShowImage(false)).toBe(true)
  })

  it('should render the Image Area if showImage = true', async () => {
    const showImage = { showImage: true }

    const { container } = render(
      <Context.Provider value={{ ...values, ...showImage }}>
        <ImageEdit />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
    expect(container).toContainHTML('button')
  })

  it('button should change value to false of showImage if click on it', async () => {
    const showImage = { showImage: true }

    const { getByTestId } = render(
      <Context.Provider value={{ ...values, ...showImage }}>
        <ImageEdit />
      </Context.Provider>
    )

    const screenValue = getByTestId('button-show-image-true')

    fireEvent.click(screenValue)

    jest.spyOn(values, 'setShowImage').mockImplementation(value => !value)

    expect(values.setShowImage(true)).toBe(false)
  })
})
