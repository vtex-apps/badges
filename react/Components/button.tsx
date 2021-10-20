import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { ButtonGroup, Button, Tooltip, IconInfo } from 'vtex.styleguide'

import Context from '../Context/context'
import { button } from '../utils/definedMessages'

const ButtonArea: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  return (
    <>
      <p className="mt5 mb5">
        <div>
          {intl.formatMessage(button.title)}
          <Tooltip label={intl.formatMessage(button.description)}>
            <span className="c-on-base pointer ml2 mt2">
              <IconInfo />
            </span>
          </Tooltip>
        </div>
      </p>
      <ButtonGroup
        buttons={[
          <Button
            isActiveOfGroup={provider.button === 'image'}
            onClick={() => provider.setButton('image')}
            testId="button-image"
          >
            {intl.formatMessage(button.image)}
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 'text'}
            onClick={() => provider.setButton('text')}
            testId="button-text"
          >
            {intl.formatMessage(button.text)}
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 'html'}
            onClick={() => provider.setButton('html')}
            testId="button-html"
            disabled={!provider.buttonHtml}
          >
            {intl.formatMessage(button.html)}
          </Button>,
        ]}
      />
    </>
  )
}

export default ButtonArea
