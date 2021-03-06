import type { FC, SyntheticEvent } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Button, Modal } from 'vtex.styleguide'

import Context from '../Context/context'
import { commonModal, modalDelete } from '../utils/definedMessages'

const ModalDelete: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  function closeModal() {
    provider.setModalDelete(false)
  }

  return (
    <Modal
      isOpen={provider.modalDelete}
      title={intl.formatMessage(modalDelete.deleteText)}
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
              testId="button-modal-delete"
              variation="primary"
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                provider.deleteBadges()
              }}
            >
              {intl.formatMessage(commonModal.delete)}
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
        {intl.formatMessage(modalDelete.deleteQuestion)}
      </div>
    </Modal>
  )
}

export default ModalDelete
