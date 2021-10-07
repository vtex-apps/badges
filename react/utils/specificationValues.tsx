/* eslint-disable @typescript-eslint/no-shadow */
import { Input } from 'vtex.styleguide'
import type { FC } from 'react'
import React from 'react'
import { useIntl } from 'react-intl'

import { specification } from './definedMessages'

interface Props {
  onChange: ({
    id,
    name,
    value,
  }: {
    id: string
    name: string
    value: string
  }) => void
  value: any
}

const GetSpecificationNameAndValue: FC<Props> = ({
  value,
  onChange,
}: {
  value: any
  onChange: ({
    id,
    name,
    value,
  }: {
    id: string
    name: string
    value: string
  }) => void
}) => {
  const intl = useIntl()

  return (
    <div className="flex">
      <div>
        <Input
          testId="input-name"
          onChange={(e: { target: { value: string } }) =>
            onChange({
              ...value,
              name: e.target.value,
              id: 'null',
            })
          }
          placeholder={intl.formatMessage(specification.inputName)}
          type="string"
          value={value?.name || ''}
        />
      </div>

      <div className="mv4 mh3 c-muted-2 b">e</div>

      <div>
        <Input
          testId="input-value"
          onChange={(e: { target: { value: string } }) =>
            onChange({
              ...value,
              value: e.target.value,
              id: 'null',
            })
          }
          placeholder={intl.formatMessage(specification.inputValue)}
          type="string"
          value={value?.value || ''}
        />
      </div>
    </div>
  )
}

export default GetSpecificationNameAndValue
