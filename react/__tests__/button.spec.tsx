import { fireEvent, render, screen } from '@vtex/test-tools/react'
import React from 'react'

import ButtonArea from '../Components/button'
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
  it('should render title of Button Group', async () => {
    const { container } = render(
      <Context.Provider value={values}>
        <ButtonArea />
      </Context.Provider>
    )

    expect(container.firstChild).toHaveTextContent('Tipo do Badge')
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
