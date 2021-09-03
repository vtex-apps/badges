import { fireEvent, render, screen } from '@vtex/test-tools/react'
import React, { Children } from 'react'

import ButtonSaveArea from '../Components/buttonSave'
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
  it('should render the save button', async () => {
    render(
      <Context.Provider value={values}>
        <ButtonSaveArea />
      </Context.Provider>
    )

    const screenValue = await screen.findByTestId('button-save')

    expect(screenValue).toContainHTML('button')
  })

  it('should test onClick button', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Context.Provider value={values}>
        <ButtonSaveArea />
      </Context.Provider>
    )

    const button = getByTestId('button-save')

    button.onclick = onClick

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
