import { render } from '@vtex/test-tools/react'
import React from 'react'

import Context from '../Context/context'
import AutoComplete from '../utils/autoComplete'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('AutComplete Area', () => {
  it('should render the auto complete', async () => {
    const onChange = jest.fn()
    const value = { id: 'id' }
    const name = 'brandId'

    const { container } = render(
      <Context.Provider value={values}>
        <AutoComplete onChange={onChange()} name={name} value={value} />
      </Context.Provider>
    )

    expect(container.firstChild).not.toBeNull()
  })
})
