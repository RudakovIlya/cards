import { DeleteModal } from 'common'
import { useModals } from 'features/modals'
import { PackListCommonModal } from 'features/packs-list/components/modals/PackListCommonModal'
import { usePackList } from 'features/packs-list/hooks/use-packlist'

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
