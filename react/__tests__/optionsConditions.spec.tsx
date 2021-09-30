import { optionsFunctions } from '../utils/optionsConditions'

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl')
  const intl = reactIntl.createIntl({
    locale: 'pt',
  })

  return {
    ...reactIntl,
    useIntl: () => intl,
  }
})

describe('Options Conditions Options', () => {
  it('should render a autocomplete component if optionsFunctions = brandId', async () => {
    const emptyImageValue = optionsFunctions().brandId

    const onChangeFunction = jest.fn()
    const props = {
      onChange: onChangeFunction,
      name: 'brandId',
      value: { id: '1' },
    }

    const functionVerbTrue = emptyImageValue.verbs[0].object(props)
    const functionVerbFalse = emptyImageValue.verbs[1].object(props)

    expect(functionVerbTrue.props.name).toBe('brandId')
    expect(functionVerbFalse.props.name).toBe('brandId')
  })

  it('should render a autocomplete component if optionsFunctions = categoryId', async () => {
    const emptyImageValue = optionsFunctions().categoryId

    const onChangeFunction = jest.fn()
    const props = {
      onChange: onChangeFunction,
      name: 'categoryId',
      value: { id: '1' },
    }

    const functionVerbTrue = emptyImageValue.verbs[0].object(props)
    const functionVerbFalse = emptyImageValue.verbs[1].object(props)

    expect(functionVerbTrue.props.name).toBe('categoryId')
    expect(functionVerbFalse.props.name).toBe('categoryId')
  })
  it('should render a autocomplete component if optionsFunctions = productId', async () => {
    const emptyImageValue = optionsFunctions().productId

    const onChangeFunction = jest.fn()
    const props = {
      onChange: onChangeFunction,
      name: 'productId',
      value: { id: '1' },
    }

    const functionVerbTrue = emptyImageValue.verbs[0].object(props)
    const functionVerbFalse = emptyImageValue.verbs[1].object(props)

    expect(functionVerbTrue.props.name).toBe('productId')
    expect(functionVerbFalse.props.name).toBe('productId')
  })

  it('should render a autocomplete component if optionsFunctions = selectedItemId', async () => {
    const emptyImageValue = optionsFunctions().selectedItemId

    const onChangeFunction = jest.fn()
    const props = {
      onChange: onChangeFunction,
      name: 'selectedItemId',
      value: { id: '1' },
    }

    const functionVerbTrue = emptyImageValue.verbs[0].object(props)
    const functionVerbFalse = emptyImageValue.verbs[1].object(props)

    expect(functionVerbTrue.props.name).toBe('selectedItemId')
    expect(functionVerbFalse.props.name).toBe('selectedItemId')
  })

  it('should render a autocomplete component if optionsFunctions = productClusters', async () => {
    const emptyImageValue = optionsFunctions().productClusters

    const onChangeFunction = jest.fn()
    const props = {
      onChange: onChangeFunction,
      name: 'productClusters',
      value: { id: '1' },
    }

    const functionVerbTrue = emptyImageValue.verbs[0].object(props)
    const functionVerbFalse = emptyImageValue.verbs[1].object(props)

    expect(functionVerbTrue.props.name).toBe('productClusters')
    expect(functionVerbFalse.props.name).toBe('productClusters')
  })

  it('should render a GetSpecificationNameAndValue component if optionsFunctions = specificationProperties', async () => {
    const emptyImageValue = optionsFunctions().specificationProperties

    const onChangeFunction = jest.fn()
    const props = {
      onChange: onChangeFunction,
      name: 'specificationProperties',
      value: { id: '1' },
    }

    const functionVerbTrue = emptyImageValue.verbs[0].object(props)
    const functionVerbFalse = emptyImageValue.verbs[1].object(props)

    expect(functionVerbTrue.props.name).toBe('specificationProperties')
    expect(functionVerbFalse.props.name).toBe('specificationProperties')
  })
})
