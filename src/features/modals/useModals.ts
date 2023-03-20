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

  const showModal = (type: ShowModalType, data: Partial<ModalDataType>) => {
    return () => {
      switch (type) {
        case 'add': {
          dispatch(modalActions.setModalData({ ...data, name: '' }))
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
  }

  const closeModal = () => {
    dispatch(
      modalActions.toggleModal({
        isShowAddedModal: false,
        isShowDeleteModal: false,
        isShowEditModal: false,
      })
    )
    dispatch(
      modalActions.setModalData({
        name: '',
        answer: '',
        _id: '',
        packName: '',
        question: '',
      })
    )
  }

  return {
    data,
    isShowDeleteModal,
    isShowEditModal,
    isShowAddedModal,
    closeModal,
    showModal,
  }
}
