import { FC } from 'react'

import { DeleteModal } from 'common'
import { useModals } from 'features/modals'

type ModalRemoveEntityType = {
  title: string
  onRemove: () => void
}
export const ModalRemoveEntity: FC<ModalRemoveEntityType> = ({ onRemove, title }) => {
  const {
    isShowDeleteModal,
    closeModal,
    data: { name, question },
  } = useModals()

  return (
    <DeleteModal
      modalTitle={'Do you really want to remove'}
      open={isShowDeleteModal}
      handleClose={closeModal}
      callBack={onRemove}
      entityName={name || question}
      entityTitle={title}
    />
  )
}
