import { modalActions, modalsReducer } from './modalsSlice'
import { modalData, showAddedModal, showDeleteModal, showEditModal } from './selectors'
import { ModalDataType, ModalStateType } from './types'
import { useModals } from './useModals'

export { modalsReducer, modalActions }

export { showAddedModal, showDeleteModal, showEditModal, modalData }

export { useModals }

export type { ModalStateType, ModalDataType }
