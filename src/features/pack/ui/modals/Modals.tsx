import { DeleteModal } from 'common'
import { useModals } from 'features/modals'
import { CommonModal, usePackCards } from 'features/pack'

export const Modals = () => {
  const {
    isShowEditModal,
    isShowAddedModal,
    isShowDeleteModal,
    closeModal,
    data: { _id, question, questionImg, answerImg },
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
        answerImg={answerImg}
        questionImg={questionImg}
        disabled={status === 'loading'}
        callback={addNewCard(questionImg, answerImg)}
      />
      <CommonModal
        title={'Edit card'}
        open={isShowEditModal}
        answerImg={answerImg}
        questionImg={questionImg}
        disabled={status === 'loading'}
        callback={updateCurrentCard(_id, questionImg, answerImg)}
      />
    </>
  )
}
