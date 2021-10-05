import type { FC } from 'react'
import React, { useEffect, useMemo, useRef, useState, useContext } from 'react'
import { useIntl } from 'react-intl'
import { AutocompleteInput, Input } from 'vtex.styleguide'

import { autocomplete } from './definedMessages'
import Context from '../Context/context'
import ModalError from '../Components/modalError'

interface Props {
  onChange: any
  name: string
  value: any
  label: string
}

// eslint-disable-next-line no-restricted-syntax
enum FieldNames {
  productId = 'productId',
  selectedItemId = 'selectedItemId',
  brandId = 'brandId',
  productClusters = 'productClusters',
  categoryId = 'categoryId',
  specificationProperties = 'specificationProperties',
}

const AutoComplete: FC<Props> = ({
  onChange,
  name,
  value,
  label,
}: {
  onChange: any
  name: string
  value: any
  label: string
}) => {
  const intl = useIntl()
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef<any>()

  const provider = useContext(Context)

  const fields: any = useMemo(() => {
    return {
      [FieldNames.productId]: provider.nameProducts,
      [FieldNames.selectedItemId]: provider.nameSku,
      [FieldNames.brandId]: provider.nameBrands,
      [FieldNames.productClusters]: provider.nameCollections,
      [FieldNames.categoryId]: provider.nameCategory,
      [FieldNames.specificationProperties]: provider.nameSpecification,
    }
  }, [
    provider.nameBrands,
    provider.nameCategory,
    provider.nameCollections,
    provider.nameProducts,
    provider.nameSku,
    provider.nameSpecification,
  ])

  const values = useMemo(() => fields[name], [fields, name])

  useMemo(() => {
    if (values === undefined) {
      provider.setModalError(true)
    }
  }, [values])

  const nameValue = !values
    ? ''
    : values?.filter((element: any) =>
        element.value === value?.id ? element : ''
      )

  const options = useMemo(() => {
    if (values !== undefined && values !== '') {
      return {
        onSelect: (e: { label: string; value: string }) => {
          onChange({ id: e.value, name: 'null', value: 'null' })
        },
        value: !term.length
          ? []
          : values?.filter((user: any) =>
              typeof user === 'string'
                ? user.toLowerCase().includes(term.toLowerCase())
                : user.label.toLowerCase().includes(term.toLowerCase())
            ),
      }
    }

    return ['']
  }, [loading, onChange, term, values])

  const input = {
    onChange: (termOnChange: any) => {
      if (termOnChange) {
        setLoading(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          setLoading(false)
          setTerm(termOnChange)
          timeoutRef.current = null
        }, 1000)
      } else {
        setTerm(termOnChange)
      }
    },
    onClear: () => setTerm(''),
    placeholder: intl.formatMessage(autocomplete.placeholder),
    value: nameValue.length > 0 ? nameValue[0].label : term,
  }

  if (values !== undefined) {
    return (
      <>
        <AutocompleteInput input={input} options={options} />
      </>
    )
  }

  return <ModalError label={label} />
}

export default AutoComplete
