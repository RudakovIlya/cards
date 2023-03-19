import { FC } from 'react'

import { DeleteModal } from 'common/components/basic-modal/DeleteModal'
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
      open={isShowDeleteModal}
      handleClose={closeModal}
      onDeleteEntity={onRemove}
      entityName={name || question}
      entityTitle={title}
    />
  )
}
