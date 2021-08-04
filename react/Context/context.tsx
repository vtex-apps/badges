import React from 'react'

interface ContextType {
  button: number
  setButton: (button: number) => void
  name: string
  setName: (name: string) => void
  html: string
  setHtml: (html: string) => void
  chooseFile: (files: any) => void
  file: any
  text: string
  setText: (text: string) => void
  save: () => void
  conditions: {
    simpleStatements: Array<{
      subject: string
      verb: string
      object: unknown
    }>
    operator: string
  }
  setConditionsFunction: (object: any) => void
  handleToggleOperator: (operator: string) => void
  textValidate: string[]
  nameProducts: Array<{ label: string; value: string }> | undefined
  nameSku: Array<{ label: string; value: string }> | undefined
  nameBrands: Array<{ label: string; value: string }> | undefined
  nameCollections: Array<{ label: string; value: string }> | undefined
  nameCategory: Array<{ label: string; value: string }> | undefined
  nameSpecification: Array<{ label: string; value: string }> | undefined
}
const Context = React.createContext<ContextType>({
  button: 1,
  setButton: () => {},
  name: '',
  setName: () => {},
  html: '',
  setHtml: () => {},
  chooseFile: () => {},
  file: '',
  text: '',
  setText: () => {},
  save: () => {},
  conditions: { simpleStatements: [], operator: '' },
  setConditionsFunction: () => {},
  handleToggleOperator: () => {},
  textValidate: [],
  nameProducts: [{ label: '', value: '' }],
  nameSku: [{ label: '', value: '' }],
  nameBrands: [{ label: '', value: '' }],
  nameCollections: [{ label: '', value: '' }],
  nameCategory: [{ label: '', value: '' }],
  nameSpecification: [{ label: '', value: '' }],
})

export default Context
