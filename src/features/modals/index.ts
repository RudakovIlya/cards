import { Modals } from './Modals'
import { modalActions, modalsReducer } from './modalsSlice'
import { modalData, showAddedModal, showDeleteModal, showEditModal } from './selectors'
import { ModalDataType, ModalStateType } from './types'
import { useModals } from './useModals'

import { ModalRemoveEntity } from 'features/modals/modals-components/ModalRemoveEntity'

export { modalsReducer, modalActions }

export { showAddedModal, showDeleteModal, showEditModal, modalData }

export { useModals }

export { ModalRemoveEntity, Modals }

export type { ModalStateType, ModalDataType }
