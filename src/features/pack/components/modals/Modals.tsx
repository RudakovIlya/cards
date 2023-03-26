import { DeleteModal } from 'common'
import { useModals } from 'features/modals'
import { CommonModal } from 'features/pack/components/modals/CommonModal'
import { usePackCards } from 'features/pack/index'

export const Modals = () => {
  const {
    isShowEditModal,
    isShowAddedModal,
    isShowDeleteModal,
    closeModal,
    data: { _id, question },
  } = useModals()
  const { removeCard, updateCurrentCard, addNewCard, status } = usePackCards()

  return (
    <>
      <DeleteModal
        disabled={status === 'loading'}
        modalTitle={'Do you really want to remove'}
        entityTitle={'Card'}
        entityName={question}
        open={isShowDeleteModal}
        callBack={removeCard(_id)}
        handleClose={closeModal}
      />
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
