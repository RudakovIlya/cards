import { useAppDispatch, useAppSelector } from 'common'
import {
  showAddedModal,
  showDeleteModal,
  showEditModal,
  modalData,
  ModalDataType,
  modalActions,
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
          dispatch(modalActions.toggleModal({ isShowAddedModal: true }))
          dispatch(modalActions.setModalData(data))
          break
        }
        case 'delete': {
          dispatch(modalActions.toggleModal({ isShowDeleteModal: true }))
          dispatch(modalActions.setModalData(data))
          break
        }
        case 'edit': {
          dispatch(modalActions.toggleModal({ isShowEditModal: true }))
          dispatch(modalActions.setModalData(data))
          break
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
