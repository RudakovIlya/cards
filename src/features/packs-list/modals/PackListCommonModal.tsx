import { FC, memo } from 'react'

import { BasicModal } from 'common'
import { ModalsForms } from 'common/components/forms/ModalsForms'
import { useModals } from 'features/modals'

type EditModalType = {
  open: boolean
  title: string
  status: boolean
  callback: (data: any) => void
}

export const PackListCommonModal: FC<EditModalType> = memo(({ callback, open, title, status }) => {
  const {
    closeModal,
    data: { name },
  } = useModals()

  return (
    <BasicModal open={open} onClose={closeModal} title={title}>
      <ModalsForms closeModal={closeModal} callback={callback} name={name} disabled={status} />
    </BasicModal>
  )
})
