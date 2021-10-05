import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { ButtonGroup, Button, Tooltip, IconInfo } from 'vtex.styleguide'

import Context from '../Context/context'
import { priority } from '../utils/definedMessages'
import { PriorityOptions } from '../utils/priorityOptions'

const PriorityArea: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  return (
    <>
      <p className="mt5 mb5">
        {' '}
        <div>
          {intl.formatMessage(priority.title)}
          <Tooltip label={intl.formatMessage(priority.description)}>
            <span className="c-on-base pointer ml2 mt2">
              <IconInfo />
            </span>
          </Tooltip>
        </div>
      </p>
      <ButtonGroup
        buttons={[
          <Button
            isActiveOfGroup={provider.priority === PriorityOptions.one}
            onClick={() => provider.setPriority(PriorityOptions.one)}
            testId="button-one"
          >
            {intl.formatMessage(priority.one)}
          </Button>,
          <Button
            isActiveOfGroup={provider.priority === PriorityOptions.two}
            onClick={() => provider.setPriority(PriorityOptions.two)}
            testId="button-text"
          >
            {intl.formatMessage(priority.two)}
          </Button>,
          <Button
            isActiveOfGroup={provider.priority === PriorityOptions.three}
            onClick={() => provider.setPriority(PriorityOptions.three)}
            testId="button-html"
          >
            {intl.formatMessage(priority.three)}
          </Button>,
          <Button
            isActiveOfGroup={provider.priority === PriorityOptions.four}
            onClick={() => provider.setPriority(PriorityOptions.four)}
            testId="button-html"
          >
            {intl.formatMessage(priority.four)}
          </Button>,
          <Button
            isActiveOfGroup={provider.priority === PriorityOptions.five}
            onClick={() => provider.setPriority(PriorityOptions.five)}
            testId="button-html"
          >
            {intl.formatMessage(priority.five)}
          </Button>,
        ]}
      />
    </>
  )
}

export default PriorityArea
