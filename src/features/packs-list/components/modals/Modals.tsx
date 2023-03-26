import { DeleteModal } from 'common'
import { useModals } from 'features/modals'
import { PackListCommonModal, usePackList } from 'features/packs-list'

export const Modals = () => {
  const {
    isShowEditModal,
    isShowAddedModal,
    isShowDeleteModal,
    closeModal,
    data: { _id, name, question },
  } = useModals()
  const { removePack, editPack, addNewPack, status } = usePackList()

  return (
    <>
      <DeleteModal
        open={isShowDeleteModal}
        entityTitle={'Pack'}
        disabled={status === 'loading'}
        modalTitle={'Do you really want to remove'}
        entityName={name || question}
        callBack={removePack(_id)}
        handleClose={closeModal}
      />
      <PackListCommonModal
        title={'Add new pack'}
        open={isShowAddedModal}
        callback={addNewPack()}
        status={status === 'loading'}
      />

      <PackListCommonModal
        title={'Edit pack'}
        open={isShowEditModal}
        callback={editPack(_id)}
        status={status === 'loading'}
      />
    </>
  )
}
