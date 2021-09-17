import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'
import ValidationArea from '../Components/validations'

describe('Validation Area', () => {
  it('should render the validation area', async () => {
    const { container } = render(
      <Context.Provider value={{ ...values }}>
        <ValidationArea />
      </Context.Provider>
    )

    expect(container).not.toBeNull()
  })

  it('should contain', async () => {
    const errors = { textValidate: ['error'] }

    const { getByText } = render(
      <Context.Provider value={{ ...values, ...errors }}>
        <ValidationArea />
      </Context.Provider>
    )

    const validation = getByText('error')

    expect(validation).not.toBeNull()
  })
})
