import { RootState } from 'app/store'

const showDeleteModal = (state: RootState) => state.modals.modalState.isShowDeleteModal
const showEditModal = (state: RootState) => state.modals.modalState.isShowEditModal
const showAddedModal = (state: RootState) => state.modals.modalState.isShowAddedModal

const modalData = (state: RootState) => state.modals.modalData

export { showDeleteModal, showEditModal, showAddedModal, modalData }
