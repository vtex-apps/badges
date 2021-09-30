import { render } from '@vtex/test-tools/react'
import React from 'react'

import AlertArea from '../Components/alert'
import Context from '../Context/context'
import { ShowAlertOptions } from '../utils/showAlertOptions'
// eslint-disable-next-line jest/no-mocks-import
import { values } from '../__mocks__/values'

describe('Alert Area', () => {
  it('should render success Alert if showAlert = 0', async () => {
    const showAlert = { showAlert: ShowAlertOptions.notShow }

    const { container } = render(
      <Context.Provider value={{ ...values, ...showAlert }}>
        <AlertArea />
      </Context.Provider>
    )

    expect(container.firstChild).toBeNull()
  })

  it('should render success Alert if showAlert = 1', async () => {
    const showAlert = { showAlert: ShowAlertOptions.alertSave }

    const { container } = render(
      <Context.Provider value={{ ...values, ...showAlert }}>
        <AlertArea />
      </Context.Provider>
    )

    expect(container?.firstChild).toHaveClass('bg-success--faded')
  })

  it('should render error Alert if showAlert = 2', async () => {
    const showAlert = { showAlert: ShowAlertOptions.alertError }

    const { container } = render(
      <Context.Provider value={{ ...values, ...showAlert }}>
        <AlertArea />
      </Context.Provider>
    )

    expect(container?.firstChild).toHaveClass('bg-danger--faded')
  })
})
