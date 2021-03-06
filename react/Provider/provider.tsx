/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import React, { useEffect, useMemo, useState, useContext } from 'react'
import { useIntl } from 'react-intl'
import { useLazyQuery, useMutation, useQuery } from 'react-apollo'
import { ToastContext } from 'vtex.styleguide'

import uploadFile from '../queries/uploadFile.gql'
import saveMasterdata from '../queries/saveMasterdata.gql'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'
import getCollectionsNames from '../queries/getCollectionsNames.gql'
import getCategoryName from '../queries/getCategoryName.gql'
import getSpecificationName from '../queries/getSpecificationName.gql'
import searchMasterdata from '../queries/searchMasterdata.gql'
import deleteMasterdata from '../queries/deleteMasterdata.gql'
import updateMasterdata from '../queries/updateMasterdata.gql'
import settingsSchema from '../queries/settingsSchema.gql'
import Context from '../Context/context'
import { provider, buttonOptionsMessages } from '../utils/definedMessages'
import { ShowAlertOptions } from '../utils/showAlertOptions'
import { ButtonOptions } from '../utils/buttonOptions'
import { PriorityOptions } from '../utils/priorityOptions'

const Provider: FC = props => {
  const intl = useIntl()
  const { showToast } = useContext(ToastContext)
  const [button, setButton] = useState(ButtonOptions.image)
  const [name, setName] = useState('')
  const [html, setHtml] = useState('')
  const [file, setFile] = useState({ files: null, result: null })
  const [text, setText] = useState('')
  const [priority, setPriority] = useState(PriorityOptions.one)
  const [conditions, setConditions] = useState({
    simpleStatements: [],
    operator: 'all',
  })

  const [paginations, setPagination] = useState<Pagination>({
    currentPage: 1,
    currentItemFrom: 1,
    currentItemTo: 5,
    tableLength: 5,
  })

  const [sizeOfAllBadgesIndexed, setSizeOfAllBadgesIndexed] = useState(0)
  const [showAlert, setShowAlert] = useState(ShowAlertOptions.notShow)
  const [textValidate, setTextValidate] = useState([''])
  const [modalDelete, setModalDelete] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalError, setModalError] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [buttonHtml, setButtonHtml] = useState(false)

  const [deleteId, setDeleteId] = useState<string>()
  const [editId, setEditId] = useState<string>()
  const [searchMasterdataLazy, { data, refetch }] =
    useLazyQuery<BadgesData>(searchMasterdata)

  const [deleteMasterdataMutation] = useMutation(deleteMasterdata)
  const [saveMasterdataMutation] = useMutation(saveMasterdata)
  const [editMasterdataMutation] = useMutation(updateMasterdata)
  const [saveMutation] = useMutation(uploadFile)

  const { data: dataProductsNames } = useQuery(getProductsName)
  const { data: dataSkuNames } = useQuery(getSkusNames)
  const { data: dataBrandsNames } = useQuery(getBrandsNames)
  const { data: dataCollectionsNames } = useQuery(getCollectionsNames)
  const { data: dataCategoryNames } = useQuery(getCategoryName)
  const { data: dataSpecificationNames } = useQuery(getSpecificationName)
  const { data: dataSettingsSchema } = useQuery(settingsSchema)

  const imageButtonOption: ButtonOption = {
    type: 'image',
    validate: (content?: any) =>
      content === null || content === undefined
        ? intl.formatMessage(buttonOptionsMessages.errorImage)
        : '',
  }

  const textButtonOption: ButtonOption = {
    type: 'text',
    validate: (content?: string) =>
      !content ? intl.formatMessage(buttonOptionsMessages.errorText) : '',
  }

  const htmlButtonOption: ButtonOption = {
    type: 'html',
    validate: (content?: string) =>
      !content
        ? intl.formatMessage(buttonOptionsMessages.errorHtml)
        : content.includes('<script')
        ? intl.formatMessage(buttonOptionsMessages.errorScript)
        : '',
  }

  const nameProducts = useMemo(() => {
    if (dataProductsNames === undefined) return

    const namesAndIds: Array<{ label: string; value: string }> = []

    dataProductsNames?.getProductsNames?.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataProductsNames])

  const nameSku = useMemo(() => {
    if (dataSkuNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataSkuNames?.getSkuNames?.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataSkuNames])

  const nameBrands = useMemo(() => {
    if (dataBrandsNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataBrandsNames?.getBrandsNames?.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataBrandsNames])

  const nameCollections = useMemo(() => {
    if (dataCollectionsNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataCollectionsNames?.getCollectionsNames?.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataCollectionsNames])

  const nameCategory = useMemo(() => {
    if (dataCategoryNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataCategoryNames?.getCategoryName?.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataCategoryNames])

  const nameSpecification = useMemo(() => {
    if (dataSpecificationNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataSpecificationNames?.getSpecificationName?.forEach(
      (element: { name: string }) => {
        namesAndIds.push({ label: element.name, value: element.name })
      }
    )

    return namesAndIds
  }, [dataSpecificationNames])

  const valuesSearchBadges = useMemo(() => {
    if (data !== undefined) {
      setSizeOfAllBadgesIndexed(data?.searchMasterdata?.pagination.total)

      return data?.searchMasterdata?.data
    }

    return []
  }, [data])

  useEffect(() => {
    const value = dataSettingsSchema?.appSettings?.message

    if (value) {
      if (value.includes('false')) {
        setButtonHtml(false)
      } else {
        setButtonHtml(true)
      }
    }
  }, [dataSettingsSchema])

  useMemo(async () => {
    searchMasterdataLazy({
      variables: {
        page: paginations.currentPage,
        pageSize: paginations.tableLength,
        where: '',
      },
    })
  }, [paginations])

  const listBadgesEdit = useMemo(() => {
    return valuesSearchBadges.map(
      (element: BadgesDataValues, indexOf: number) => {
        return {
          id: element.id,
          name: element.name,
          type: element.type,
          priority: element.priority,
          index: indexOf,
        }
      }
    )
  }, [valuesSearchBadges])

  const buttonOptions: {
    [key in ButtonOptions]: any
  } = useMemo(() => {
    return {
      image: { ...imageButtonOption, value: file.result },
      text: { ...textButtonOption, value: text },
      html: { ...htmlButtonOption, value: html },
    }
  }, [file, text, html])

  const handleCloseAlert = () => {
    setShowAlert(ShowAlertOptions.notShow)
  }

  function chooseFile(files: any) {
    setFile({ ...file, ...{ result: files } })
  }

  function setConditionsFunction(statements: []) {
    setConditions({ ...conditions, ...{ simpleStatements: statements } })
  }

  function handleToggleOperator(operador: string) {
    setConditions({ ...conditions, ...{ operator: operador } })
  }

  function setPaginationFunction(pagination: []) {
    setPagination({ ...paginations, ...pagination })
  }

  async function getUrl() {
    if (file.result !== null) {
      const url = await saveMutation({
        variables: { file: file.result?.[0] },
      })

      if (url != null) return url.data.uploadFile.fileUrl
    } else {
      return null
    }
  }

  function validateIfAllFieldsIsComplete() {
    const validation = []

    if (!name) {
      validation.push(intl.formatMessage(provider.errorName))
    }

    if (priority < 0 || priority > 5) {
      validation.push(intl.formatMessage(provider.errorPriority))
    }

    const selectedOption = buttonOptions[button]

    const validationResult = selectedOption.validate(selectedOption.value)

    if (validationResult) validation.push(validationResult)

    if (conditions.simpleStatements.length === 0) {
      validation.push(intl.formatMessage(provider.errorSimpleStatement))
    }

    if (validation.length === 0) return true

    setTextValidate(validation)

    return false
  }

  async function save() {
    setShowAlert(ShowAlertOptions.notShow)
    setTextValidate([''])
    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      setTextValidate([''])
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.operator = conditions.operator
      valueSave.simpleStatements = conditions.simpleStatements
      valueSave.priority = priority

      const selectedOption = buttonOptions[button]

      if (selectedOption.type === ButtonOptions.image) {
        valueSave.content = await getUrl()
      } else {
        valueSave.content = selectedOption.value
      }

      valueSave.type = selectedOption.type

      const returnSaving = await saving(valueSave)

      refetch()

      return returnSaving
    }
  }

  async function saving(valueSave: SaveValues) {
    const id = await saveMasterdataMutation({
      variables: { saveData: valueSave },
    })

    if (id.data.saveMasterdata.Id != null) {
      setShowAlert(ShowAlertOptions.alertSave)

      return true
    }

    setShowAlert(ShowAlertOptions.alertError)

    return false
  }

  async function clickDelete(id: string) {
    setModalDelete(true)
    setDeleteId(id)
  }

  async function deleteBadges() {
    setModalDelete(false)

    const returnDelete = await deleteMasterdataMutation({
      variables: { id: deleteId },
    })

    if (returnDelete.data.deleteMasterdata) {
      showToast(intl.formatMessage(provider.sucessDelete))
      refetch()
      setDeleteId('')
    } else {
      showToast(intl.formatMessage(provider.errorDelete))
    }
  }

  async function clickEdit(index: number, id: string) {
    setTextValidate([''])
    setModalEdit(true)
    setShowAlert(ShowAlertOptions.notShow)

    const statementList: any = valuesSearchBadges[index].simpleStatements.map(
      (elementStatement: {
        subject: string
        verb: string
        object: { id: string; name: string; value: string }
      }) => {
        return {
          subject: elementStatement.subject,
          verb: elementStatement.verb,
          object: elementStatement.object || 'null',
        }
      }
    )

    const conditionsValues = {
      simpleStatements: statementList,
      operator: valuesSearchBadges[index].operator,
    }

    setName(valuesSearchBadges[index].name)
    setPriority(valuesSearchBadges[index].priority)
    if (valuesSearchBadges[index].type === ButtonOptions.html) {
      setHtml(valuesSearchBadges[index].content)
      setButton(ButtonOptions.html)
    } else if (valuesSearchBadges[index].type === ButtonOptions.text) {
      setText(valuesSearchBadges[index].content)
      setButton(ButtonOptions.text)
    } else {
      chooseFile(valuesSearchBadges[index].content)
      setButton(ButtonOptions.image)
      setShowImage(true)
    }

    setConditions(conditionsValues)
    setEditId(id)
  }

  async function editBadges() {
    setTextValidate([''])

    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.operator = conditions.operator
      valueSave.simpleStatements = conditions.simpleStatements
      valueSave.priority = priority

      const selectedOption = buttonOptions[button]

      if (
        selectedOption.type === ButtonOptions.image &&
        !(typeof file.result === 'string')
      ) {
        valueSave.content = await getUrl()
      } else {
        valueSave.content = selectedOption.value
      }

      valueSave.type = selectedOption.type

      const returnEdit = await editMasterdataMutation({
        variables: { id: editId, saveData: valueSave },
      })

      if (returnEdit?.data?.updateMasterdata) {
        refetch()
        showToast(intl.formatMessage(provider.sucessEdit))
        setModalEdit(false)
        setEditId('')
        clearValue()
      } else {
        showToast(intl.formatMessage(provider.errorEdit))
      }
    }
  }

  function clearValue() {
    setName('')
    setShowAlert(ShowAlertOptions.notShow)

    setHtml('')
    setButton(ButtonOptions.image)
    setText('')
    chooseFile('')

    setConditions({
      simpleStatements: [],
      operator: '',
    })
  }

  return (
    <Context.Provider
      value={{
        button,
        setButton,
        name,
        setName,
        html,
        setHtml,
        chooseFile,
        file,
        text,
        setText,
        conditions,
        setConditionsFunction,
        handleToggleOperator,
        textValidate,
        showAlert,
        handleCloseAlert,
        nameProducts,
        nameSku,
        nameBrands,
        nameCollections,
        nameCategory,
        nameSpecification,
        setConditions,
        valuesSearchBadges,
        listBadgesEdit,
        deleteBadges,
        modalDelete,
        setModalDelete,
        clickDelete,
        editBadges,
        clickEdit,
        setModalEdit,
        modalEdit,
        showImage,
        setShowImage,
        clearValue,
        save,
        paginations,
        setPaginationFunction,
        sizeOfAllBadgesIndexed,
        deleteId,
        setEditId,
        editId,
        priority,
        setPriority,
        modalError,
        setModalError,
        buttonHtml,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
