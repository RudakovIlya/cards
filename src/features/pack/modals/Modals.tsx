import { ModalRemoveEntity, useModals } from '../../modals'
import { usePackCards } from '../hooks/use-pack-cards'

import { CommonModal } from './CommonModal'

export const Modals = () => {
  const {
    isShowEditModal,
    isShowAddedModal,
    data: { _id },
  } = useModals()
  const { removeCard, updateCurrentCard, addNewCard, status } = usePackCards()

  return (
    <>
      <ModalRemoveEntity onRemove={removeCard(_id)} title={'card'} />
      <CommonModal
        title={'Add new card'}
        open={isShowAddedModal}
        callback={addNewCard()}
        disabled={status === 'loading'}
      />
      <CommonModal
        title={'Edit card'}
        open={isShowEditModal}
        callback={updateCurrentCard(_id)}
        disabled={status === 'loading'}
      />
    </>
  )
}