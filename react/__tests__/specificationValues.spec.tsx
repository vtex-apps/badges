import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import GetSpecificationNameAndValue from '../utils/specificationValues'

describe('GetSpecificationNameAndValue Area', () => {
  it('should render the GetSpecificationNameAndValue area', async () => {
    const onChange = jest.fn()
    const value = { value: 'value', name: 'name' }

    const { container } = render(
      <GetSpecificationNameAndValue onChange={onChange} value={value} />
    )

    expect(container).toContainHTML('input')
  })

  it('should change', async () => {
    const onChange = jest.fn()
    const value = { value: 'value', name: 'name' }

    const { getByTestId } = render(
      <GetSpecificationNameAndValue onChange={onChange} value={value} />
    )

    const input = getByTestId('input-name').querySelector(
      'input'
    ) as HTMLInputElement

    fireEvent.change(input, {
      target: { name: 'changeName', value: 'changeValue' },
    })

    expect(input.value).toBe('changeValue')
    expect(input.name).toBe('changeName')
  })
})
