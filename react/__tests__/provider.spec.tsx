import { fireEvent, render } from '@vtex/test-tools/react'
import React from 'react'
import { MockedProvider, wait } from '@apollo/react-testing'
// eslint-disable-next-line jest/no-mocks-import
import * as reactapollo from 'react-apollo'

import Provider from '../Provider/provider'
// eslint-disable-next-line jest/no-mocks-import
import {
  mocks,
  mocksSaveMasterdataWithImage,
  mocksWithNullReturn,
} from '../__mocks__/mockUseQuery'
import Context from '../Context/context'
import { ButtonOptions } from '../utils/buttonOptions'

describe('Provider', () => {
  it('should render provider', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider />
      </MockedProvider>
    )

    await wait(0)

    expect(container).not.toBeNull()
  })

  it('should test function handleCloseAlert', async () => {
    const TestComponent = () => {
      const { handleCloseAlert, showAlert } = React.useContext(Context)

      return (
        <>
          <div data-testid="showAlert">{showAlert}</div>
          <button onClick={handleCloseAlert} data-testid="buttonShowAlert">
            SetShowAlert
          </button>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    const showAlertValue = getByTestId('showAlert').textContent

    getByTestId('buttonShowAlert').click()

    expect(showAlertValue).toBe('0')
  })

  it('should test function chooseFile', async () => {
    const TestComponent = () => {
      const { chooseFile, file } = React.useContext(Context)

      return (
        <>
          <div data-testid="fileResult">{file.result}</div>
          <button
            onClick={() => chooseFile('files')}
            data-testid="buttonChooseFile"
          >
            ChooseFile
          </button>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonChooseFile'))

    const filesResult = getByTestId('fileResult').textContent

    expect(filesResult).toBe('files')
  })

  it('should test function setConditionsFunction', async () => {
    const TestComponent = () => {
      const { setConditionsFunction, conditions } = React.useContext(Context)
      const objectValue = ['value']

      return (
        <>
          <div data-testid="conditions">{conditions.simpleStatements}</div>
          <button
            onClick={() => setConditionsFunction(objectValue)}
            data-testid="buttonSetConditionsFunction"
          >
            setConditionsFunction
          </button>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonSetConditionsFunction'))

    const conditionsValues = getByTestId('conditions').textContent

    expect(conditionsValues).toBe('value')
  })

  it('should test function handleToggleOperator', async () => {
    const TestComponent = () => {
      const { handleToggleOperator, conditions } = React.useContext(Context)

      return (
        <>
          <div data-testid="conditions">{conditions.operator}</div>

          <button
            data-testid="buttonHandleToggleOperator"
            onClick={() => handleToggleOperator('any')}
          >
            handleToggleOperator
          </button>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonHandleToggleOperator'))
    const conditionsValues = getByTestId('conditions').textContent

    expect(conditionsValues).toBe('any')
  })

  it('should test function setPaginationFunction', async () => {
    const TestComponent = () => {
      const { setPaginationFunction, paginations } = React.useContext(Context)

      return (
        <>
          <div data-testid="paginations">{paginations.currentPage}</div>

          <button
            data-testid="pagination"
            onClick={() =>
              setPaginationFunction({
                currentPage: 2,
                currentItemFrom: 5,
                currentItemTo: 10,
                tableLength: 5,
              })
            }
          ></button>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('pagination'))

    const paginationsValues = getByTestId('paginations').textContent

    expect(paginationsValues).toBe('2')
  })

  it('should test function validateIfAllFieldsIsComplete', async () => {
    const TestComponent = () => {
      const { save, textValidate } = React.useContext(Context)

      return (
        <>
          <div data-testid="validateText">{textValidate}</div>
          <button data-testid="buttonSave" onClick={save}>
            save
          </button>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonSave'))
    const validateText = getByTestId('validateText').textContent

    expect(validateText).not.toBeNull()
  })

  it('should test function save and saving', async () => {
    jest.mock('react-apollo')
    jest
      .spyOn(reactapollo, 'useLazyQuery')
      .mockImplementation()
      .mockReturnValue([
        jest.fn(),
        {
          data: {
            searchMasterdata: {
              data: [],

              pagination: {
                page: 1,
                pageSize: 5,
                total: 2,
              },
            },
          },
          refetch: jest.fn(),
        },
      ] as any)

    const TestComponent = () => {
      const { save, setName, setHtml, setButton, setConditions, showAlert } =
        React.useContext(Context)

      return (
        <>
          <div data-testid="showAlert">{showAlert}</div>
          <button data-testid="buttonName" onClick={() => setName('name')} />
          <button data-testid="buttonHtml" onClick={() => setHtml('html')} />
          <button
            data-testid="buttonButton"
            onClick={() => setButton(ButtonOptions.html)}
          />
          <button
            data-testid="buttonConditions"
            onClick={() =>
              setConditions({
                simpleStatements: [
                  {
                    object: {
                      name: '3',
                      value: '4',
                    },
                    subject: 'specificationProperties',
                    verb: '=',
                  },
                ],
                operator: 'all',
              })
            }
          />
          <button data-testid="buttonSave" onClick={save} />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonName'))
    fireEvent.click(getByTestId('buttonHtml'))
    fireEvent.click(getByTestId('buttonButton'))
    fireEvent.click(getByTestId('buttonConditions'))
    fireEvent.click(getByTestId('buttonSave'))

    await wait(0)
    const showAlertValue = getByTestId('showAlert').textContent

    expect(showAlertValue).toBe('1')
  })

  it('should test function save and saving with no valid return', async () => {
    jest.mock('react-apollo')
    jest
      .spyOn(reactapollo, 'useLazyQuery')
      .mockImplementation()
      .mockReturnValue([
        jest.fn(),
        {
          data: {
            searchMasterdata: {
              data: [],

              pagination: {
                page: 1,
                pageSize: 5,
                total: 2,
              },
            },
          },
          refetch: jest.fn(),
        },
      ] as any)

    const TestComponent = () => {
      const { save, setName, setButton, setConditions, showAlert, setHtml } =
        React.useContext(Context)

      return (
        <>
          <div data-testid="showAlert">{showAlert}</div>

          <button data-testid="buttonName" onClick={() => setName('name')} />
          <button
            data-testid="buttonButton"
            onClick={() => setButton(ButtonOptions.html)}
          />
          <button onClick={() => setHtml('html')} data-testid="buttonHtml" />
          <button
            data-testid="buttonConditions"
            onClick={() =>
              setConditions({
                simpleStatements: [
                  {
                    object: {
                      name: '3',
                      value: '4',
                    },
                    subject: 'specificationProperties',
                    verb: '=',
                  },
                ],
                operator: 'all',
              })
            }
          />
          <button data-testid="buttonSave" onClick={save} />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocksWithNullReturn} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonName'))
    fireEvent.click(getByTestId('buttonButton'))
    fireEvent.click(getByTestId('buttonHtml'))
    fireEvent.click(getByTestId('buttonConditions'))
    fireEvent.click(getByTestId('buttonSave'))

    await wait(0)
    const showAlertValue = getByTestId('showAlert').textContent

    expect(showAlertValue).toBe('2')
  })

  it('should test function save and saving with send image', async () => {
    jest.mock('react-apollo')
    jest
      .spyOn(reactapollo, 'useLazyQuery')
      .mockImplementation()
      .mockReturnValue([
        jest.fn(),
        {
          data: {
            searchMasterdata: {
              data: [],

              pagination: {
                page: 1,
                pageSize: 5,
                total: 2,
              },
            },
          },
          refetch: jest.fn(),
        },
      ] as any)

    const TestComponent = () => {
      const { save, setName, setButton, setConditions, showAlert, chooseFile } =
        React.useContext(Context)

      return (
        <>
          <div data-testid="showAlert">{showAlert}</div>

          <button data-testid="buttonName" onClick={() => setName('name')} />
          <button
            data-testid="buttonButton"
            onClick={() => setButton(ButtonOptions.image)}
          />
          <button
            onClick={() => chooseFile('files')}
            data-testid="buttonChooseFile"
          />
          <button
            data-testid="buttonConditions"
            onClick={() =>
              setConditions({
                simpleStatements: [
                  {
                    object: {
                      name: '3',
                      value: '4',
                    },
                    subject: 'specificationProperties',
                    verb: '=',
                  },
                ],
                operator: 'all',
              })
            }
          />
          <button data-testid="buttonSave" onClick={save} />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocksSaveMasterdataWithImage} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonName'))
    fireEvent.click(getByTestId('buttonButton'))
    fireEvent.click(getByTestId('buttonChooseFile'))
    fireEvent.click(getByTestId('buttonConditions'))
    fireEvent.click(getByTestId('buttonSave'))

    await wait(0)
    const showAlertValue = getByTestId('showAlert').textContent

    expect(showAlertValue).toBe('0')
  })

  it('should test function clickDelete', async () => {
    const TestComponent = () => {
      const { clickDelete, deleteId } = React.useContext(Context)

      return (
        <>
          <div data-testid="deleteId">{deleteId}</div>
          <button
            data-testid="buttonDelete"
            onClick={() => clickDelete('64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonDelete'))

    const deleteIdValue = getByTestId('deleteId').textContent

    expect(deleteIdValue).toBe('64d9f6e4-01b3-11ec-82ac-1236248951d9')
  })

  it('should test function deleteBadges', async () => {
    const TestComponent = () => {
      const { clickDelete, deleteBadges, deleteId } = React.useContext(Context)

      return (
        <>
          <div data-testid="deleteId">{deleteId}</div>
          <button
            data-testid="buttonDelete"
            onClick={() => clickDelete('64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
          <button
            data-testid="buttonDeleteBadges"
            onClick={() => deleteBadges()}
          />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonDelete'))

    fireEvent.click(getByTestId('buttonDeleteBadges'))
    const deleteIdValue = getByTestId('deleteId').textContent

    await wait(0)

    expect(deleteIdValue).toBe('64d9f6e4-01b3-11ec-82ac-1236248951d9')
  })

  it('should test function deleteBadges with a null return', async () => {
    const TestComponent = () => {
      const { clickDelete, deleteBadges, deleteId } = React.useContext(Context)

      return (
        <>
          <div data-testid="deleteId">{deleteId}</div>
          <button
            data-testid="buttonDelete"
            onClick={() => clickDelete('64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
          <button
            data-testid="buttonDeleteBadges"
            onClick={() => deleteBadges()}
          />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocksWithNullReturn} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonDelete'))

    fireEvent.click(getByTestId('buttonDeleteBadges'))
    const deleteIdValue = getByTestId('deleteId').textContent

    await wait(0)

    expect(deleteIdValue).toBe('64d9f6e4-01b3-11ec-82ac-1236248951d9')
  })

  it('should test function deleteBadges with return false', async () => {
    const TestComponent = () => {
      const { clickDelete, deleteBadges, deleteId } = React.useContext(Context)

      return (
        <>
          <div data-testid="deleteId">{deleteId}</div>
          <button
            data-testid="buttonDelete"
            onClick={() => clickDelete('64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
          <button
            data-testid="buttonDeleteBadges"
            onClick={() => deleteBadges()}
          />
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocksWithNullReturn} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonDelete'))

    fireEvent.click(getByTestId('buttonDeleteBadges'))
    const deleteIdValue = getByTestId('deleteId').textContent

    await wait(0)

    expect(deleteIdValue).toBe('64d9f6e4-01b3-11ec-82ac-1236248951d9')
  })

  it('should test function clickEdit', async () => {
    jest.mock('react-apollo')
    jest
      .spyOn(reactapollo, 'useLazyQuery')
      .mockImplementation()
      .mockReturnValue([
        jest.fn(),
        {
          data: {
            searchMasterdata: {
              data: [
                {
                  id: 'a417196b-002c-11ec-82ac-022399e4f447',
                  type: 'text',
                  content: 'Aroma',
                  name: 'Aromas',
                  simpleStatements: [
                    {
                      object: {
                        value: 'Jasmine',
                        name: 'Aromas',
                        id: null,
                      },
                      subject: 'specificationProperties',
                      verb: '=',
                    },
                  ],
                  operator: 'all',
                },
                {
                  id: 'ead31cff-01ab-11ec-82ac-163fe7aa8841',
                  type: 'image',
                  content:
                    'https://sandboxbrdev.vtexassets.com/assets/vtex.file-manager-graphql/images/44ecabda-f47d-443d-b6fc-8fcddebb1741___2f41371fb35565e29095608a9ec69566.jpeg',
                  name: 'Teste Show Alert ',
                  simpleStatements: [
                    {
                      object: {
                        value: 'null',
                        name: 'null',
                        id: '9',
                      },
                      subject: 'selectedItemId',
                      verb: '=',
                    },
                    {
                      object: {
                        value: 'null',
                        name: 'null',
                        id: '2000001',
                      },
                      subject: 'brandId',
                      verb: '=',
                    },
                  ],
                  operator: 'all',
                },
                {
                  id: '596d01e3-004b-11ec-82ac-0eda35106b0f',
                  type: 'html',
                  content: '<div> Show Alert 5 </div>',
                  name: 'Teste Show Alert Html ',
                  simpleStatements: [
                    {
                      object: {
                        value: 'null',
                        name: 'null',
                        id: '9',
                      },
                      subject: 'selectedItemId',
                      verb: '=',
                    },
                  ],
                  operator: 'all',
                },
              ],

              pagination: {
                page: 1,
                pageSize: 5,
                total: 2,
              },
            },
          },
          refetch: jest.fn(),
        },
      ] as any)

    const TestComponent = () => {
      const { clickEdit, setPaginationFunction, editId } =
        React.useContext(Context)

      return (
        <>
          <button
            data-testid="buttonEdit0"
            onClick={() => clickEdit(0, '64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
          <button
            data-testid="buttonEdit1"
            onClick={() => clickEdit(1, 'ead31cff-01ab-11ec-82ac-163fe7aa8841')}
          />
          <button
            data-testid="buttonEdit2"
            onClick={() => clickEdit(2, '596d01e3-004b-11ec-82ac-0eda35106b0f')}
          />
          <button
            data-testid="pagination"
            onClick={() =>
              setPaginationFunction({
                currentPage: 1,
                currentItemFrom: 1,
                currentItemTo: 5,
                tableLength: 5,
              })
            }
          ></button>
          <div data-testid="id">{editId}</div>
        </>
      )
    }

    const { getByTestId } = render(
      <Provider>
        <TestComponent />
      </Provider>
    )

    fireEvent.click(getByTestId('pagination'))
    fireEvent.click(getByTestId('buttonEdit0'))
    fireEvent.click(getByTestId('buttonEdit1'))
    fireEvent.click(getByTestId('buttonEdit2'))

    await wait(0)

    expect(getByTestId('id').textContent).toBe(
      '596d01e3-004b-11ec-82ac-0eda35106b0f'
    )
  })

  it('should test function editBadges', async () => {
    const TestComponent = () => {
      const {
        setEditId,
        editBadges,
        setPaginationFunction,
        setButton,
        setConditions,
        setName,
        setHtml,
        editId,
      } = React.useContext(Context)

      return (
        <>
          <button
            data-testid="buttonEdit"
            onClick={() => setEditId('64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
          <button data-testid="buttonEditBadges" onClick={() => editBadges()} />
          <button
            data-testid="pagination"
            onClick={() =>
              setPaginationFunction({
                currentPage: 1,
                currentItemFrom: 1,
                currentItemTo: 5,
                tableLength: 5,
              })
            }
          ></button>
          <button data-testid="buttonName" onClick={() => setName('name')} />
          <button data-testid="buttonHtml" onClick={() => setHtml('html')} />
          <button
            data-testid="buttonButton"
            onClick={() => setButton(ButtonOptions.html)}
          />
          <button
            data-testid="buttonConditions"
            onClick={() =>
              setConditions({
                simpleStatements: [
                  {
                    object: {
                      name: '3',
                      value: '4',
                    },
                    subject: 'specificationProperties',
                    verb: '=',
                  },
                ],
                operator: 'all',
              })
            }
          />
          <div data-testid="id">{editId}</div>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonName'))
    fireEvent.click(getByTestId('buttonHtml'))
    fireEvent.click(getByTestId('buttonButton'))
    fireEvent.click(getByTestId('buttonConditions'))

    fireEvent.click(getByTestId('buttonEdit'))
    fireEvent.click(getByTestId('buttonEditBadges'))

    await wait(0)

    expect(getByTestId('id').textContent).toBe('')
  })

  it('should test function editBadges with a null return', async () => {
    const TestComponent = () => {
      const {
        setEditId,
        editBadges,
        setPaginationFunction,
        setButton,
        setConditions,
        setName,
        setHtml,
        editId,
      } = React.useContext(Context)

      return (
        <>
          <button
            data-testid="buttonEdit"
            onClick={() => setEditId('64d9f6e4-01b3-11ec-82ac-1236248951d9')}
          />
          <button data-testid="buttonEditBadges" onClick={() => editBadges()} />
          <button
            data-testid="pagination"
            onClick={() =>
              setPaginationFunction({
                currentPage: 1,
                currentItemFrom: 1,
                currentItemTo: 5,
                tableLength: 5,
              })
            }
          ></button>
          <button data-testid="buttonName" onClick={() => setName('name')} />
          <button data-testid="buttonHtml" onClick={() => setHtml('html')} />
          <button
            data-testid="buttonButton"
            onClick={() => setButton(ButtonOptions.html)}
          />
          <button
            data-testid="buttonConditions"
            onClick={() =>
              setConditions({
                simpleStatements: [
                  {
                    object: {
                      name: '3',
                      value: '4',
                    },
                    subject: 'specificationProperties',
                    verb: '=',
                  },
                ],
                operator: 'all',
              })
            }
          />
          <div data-testid="id">{editId}</div>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocksWithNullReturn} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonName'))
    fireEvent.click(getByTestId('buttonHtml'))
    fireEvent.click(getByTestId('buttonButton'))
    fireEvent.click(getByTestId('buttonConditions'))

    fireEvent.click(getByTestId('buttonEdit'))
    fireEvent.click(getByTestId('buttonEditBadges'))

    await wait(0)

    expect(getByTestId('id').textContent).toBe(
      '64d9f6e4-01b3-11ec-82ac-1236248951d9'
    )
  })

  it('should test function clearValue', async () => {
    const TestComponent = () => {
      const { clearValue, name } = React.useContext(Context)

      return (
        <>
          <button data-testid="buttonClear" onClick={clearValue} />
          <div data-testid="name">{name}</div>
        </>
      )
    }

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider>
          <TestComponent />
        </Provider>
      </MockedProvider>
    )

    fireEvent.click(getByTestId('buttonClear'))

    expect(getByTestId('name').textContent).toBe('')
  })
})
