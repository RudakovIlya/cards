import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import {
  modalActions,
  modalData,
  ModalDataType,
  showAddedModal,
  showDeleteModal,
  showEditModal,
} from 'features/modals'

type ShowModalType = 'add' | 'edit' | 'delete'

export const useModals = () => {
  const data = useAppSelector(modalData)
  const isShowDeleteModal = useAppSelector(showDeleteModal)
  const isShowEditModal = useAppSelector(showEditModal)
  const isShowAddedModal = useAppSelector(showAddedModal)

  const dispatch = useAppDispatch()

  const showModal = useCallback((type: ShowModalType, data: Partial<ModalDataType>) => {
    return () => {
      switch (type) {
        case 'add': {
          dispatch(modalActions.setModalData(data))
          dispatch(modalActions.toggleModal({ isShowAddedModal: true }))

          return
        }
        case 'delete': {
          dispatch(modalActions.setModalData(data))
          dispatch(modalActions.toggleModal({ isShowDeleteModal: true }))

          return
        }
        case 'edit': {
          dispatch(modalActions.setModalData(data))
          dispatch(modalActions.toggleModal({ isShowEditModal: true }))

          return
        }
      }
    }
  }, [])

  const setDeckCover = (file64: string) => {
    dispatch(modalActions.setModalData({ deckCover: file64 }))
  }

  const setQuestionImg = useCallback((file64: string) => {
    dispatch(modalActions.setModalData({ questionImg: file64 }))
  }, [])

  const setAnswerImg = useCallback((file64: string) => {
    dispatch(modalActions.setModalData({ answerImg: file64 }))
  }, [])

  const closeModal = useCallback(() => {
    dispatch(modalActions.resetModalData())
  }, [])

  const removeImages = useCallback(
    (data: { isAnswer?: boolean; isQuestion?: boolean; isDeckCover?: boolean }) => {
      return () => {
        data.isAnswer && dispatch(modalActions.setModalData({ answerImg: '' }))

        data.isQuestion && dispatch(modalActions.setModalData({ questionImg: '' }))

        data.isDeckCover && dispatch(modalActions.setModalData({ deckCover: '' }))
      }
    },
    [data.deckCover]
  )

  return {
    data,
    isShowDeleteModal,
    isShowEditModal,
    isShowAddedModal,
    closeModal,
    showModal,
    setAnswerImg,
    setDeckCover,
    setQuestionImg,
    removeImages,
  }
}
