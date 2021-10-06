import { render } from '@vtex/test-tools/react'
import React from 'react'

import Context from '../Context/context'
import AutoComplete from '../utils/autoComplete'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('AutoComplete Area', () => {
  it('should render the auto complete', async () => {
    const onChange = jest.fn()
    const value = { id: 'id' }
    const name = 'brandId'

    const { container } = render(
      <Context.Provider value={values}>
        <AutoComplete
          onChange={onChange()}
          name={name}
          value={value}
          label={'Marca'}
        />
      </Context.Provider>
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('should render the auto complete with nameProduct null', async () => {
    const onChange = jest.fn()
    const value = { id: 'id' }
    const name = 'productId'

    const { getAllByTestId } = render(
      <Context.Provider value={values}>
        <AutoComplete
          onChange={onChange()}
          name={name}
          value={value}
          label={'Produto'}
        />
      </Context.Provider>
    )

    expect(getAllByTestId('button-modal-close')[0]).toContainHTML('button')
  })
})
