import { render } from '@vtex/test-tools/react'
import React from 'react'

import AlertArea from '../Components/alert'
import Context from '../Context/context'
import { ButtonOptions } from '../utils/buttonOptions'
import { ShowAlertOptions } from '../utils/showAlertOptions'

const values = {
  button: ButtonOptions.image,
  setButton: () => {},
  name: '',
  setName: () => {},
  html: '',
  setHtml: () => {},
  chooseFile: () => {},
  file: '',
  text: '',
  setText: () => {},
  conditions: { simpleStatements: [], operator: '' },
  setConditionsFunction: () => {},
  handleToggleOperator: () => {},
  textValidate: [],
  showAlert: ShowAlertOptions.alertError,
  handleCloseAlert: () => {},
  nameProducts: [{ label: '', value: '' }],
  nameSku: [{ label: '', value: '' }],
  nameBrands: [{ label: '', value: '' }],
  nameCollections: [{ label: '', value: '' }],
  nameCategory: [{ label: '', value: '' }],
  nameSpecification: [{ label: '', value: '' }],
  setConditions: () => {},
  validateIfAllFieldsIsComplete: () => false,
  valuesSearchBadges: [],
  listBadgesEdit: [],
  deleteBadges: () => {},
  modalDelete: false,
  setModalDelete: () => {},
  clickDelete: () => {},
  editBadges: () => {},
  clickEdit: () => {},
  setModalEdit: () => {},
  modalEdit: false,
  showImage: false,
  setShowImage: () => {},
  clearValue: () => {},
  save: () => {},
  paginations: {
    currentPage: 0,
    currentItemFrom: 0,
    currentItemTo: 0,
    tableLength: 0,
  },
  setPaginationFunction: () => {},
  sizeOfAllBadgesIndexed: 0,
}

describe('Alert Area', () => {
  it('should render sucess Alert if showAlert = 0', async () => {
    const showAlert = { showAlert: ShowAlertOptions.notShow }

    const { container } = render(
      <Context.Provider value={{ ...values, ...showAlert }}>
        <AlertArea />
      </Context.Provider>
    )

    expect(container.firstChild).toBeNull()
  })

  it('should render sucess Alert if showAlert = 1', async () => {
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
