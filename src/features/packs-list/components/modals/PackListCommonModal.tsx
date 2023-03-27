import { FC, memo } from 'react'

import { BasicModal, ModalsForms } from 'common'
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
    setDeckCover,
    removeImages,
    data: { name, deckCover },
  } = useModals()

  return (
    <BasicModal open={open} onClose={closeModal} title={title}>
      <ModalsForms
        name={name}
        disabled={status}
        deckCover={deckCover}
        callback={callback}
        closeModal={closeModal}
        setDeckCover={setDeckCover}
        removeCover={removeImages}
      />
    </BasicModal>
  )
})
