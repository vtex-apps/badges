import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'

import ConditionsArea from '../Components/conditions'
import Context from '../Context/context'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Conditions Area', () => {
  it('should render sucess Alert if showAlert = 0', async () => {
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }

    const { container } = render(
      <Context.Provider value={{ ...values, ...conditions }}>
        <ConditionsArea />
      </Context.Provider>
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('should change values of Condition Area', async () => {
    const conditions = { conditions: { simpleStatements: [], operator: 'all' } }

    const { container } = render(
      <Context.Provider value={{ ...values, ...conditions }}>
        <ConditionsArea />
      </Context.Provider>
    )

    const newConditions = {
      conditions: {
        simpleStatements: [
          {
            object: {
              id: '9',
              name: null,
              value: null,
            },
            subject: 'selectedItemId',
            verb: '=',
          },
        ],
        operator: 'any',
      },
    }

    const handleChange = jest.fn()

    container.onchange = handleChange

    fireEvent.change(container, newConditions)

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
