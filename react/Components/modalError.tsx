/* eslint-disable @typescript-eslint/restrict-plus-operands */
import type { FC, SyntheticEvent } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Button, Modal } from 'vtex.styleguide'

import Context from '../Context/context'
import { commonModal, modalError } from '../utils/definedMessages'

interface Props {
  label: string
}

const ModalError: FC<Props> = ({ label }: { label: string }) => {
  const provider = useContext(Context)

  const intl = useIntl()

  function closeModal() {
    provider.setConditionsFunction([])

    provider.setModalError(false)
  }

  return (
    <Modal
      isOpen={provider.modalError}
      title={intl.formatMessage(modalError.textError) + label.toLowerCase()}
      responsiveFullScreen
      bottomBar={
        <div className="nowrap">
          <span className="mr4">
            <Button
              testId="button-modal-close"
              variation="tertiary"
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                closeModal()
              }}
            >
              {intl.formatMessage(commonModal.cancel)}
            </Button>
          </span>
          <span>
            <Button
              testId="button-modal-ok"
              variation="primary"
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                closeModal()
              }}
            >
              {intl.formatMessage(commonModal.ok)}
            </Button>
          </span>
        </div>
      }
      onClose={(e: SyntheticEvent) => {
        e.preventDefault
        closeModal()
      }}
    >
      <div className="pv3 t-body c-muted-2 mb5">
        {intl.formatMessage(modalError.text) + label.toLowerCase()}
      </div>
    </Modal>
  )
}

export default ModalError
