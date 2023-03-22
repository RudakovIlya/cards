import { ModalRemoveEntity, useModals } from 'features/modals'
import { usePackList } from 'features/packs-list/hooks/use-packlist'
import { PackListCommonModal } from 'features/packs-list/modals/PackListCommonModal'

export const Modals = () => {
  const {
    isShowEditModal,
    isShowAddedModal,
    data: { _id },
  } = useModals()
  const { removePack, editPack, addNewPack, status } = usePackList()

  return (
    <>
      <ModalRemoveEntity onRemove={removePack(_id)} title={'pack'} />
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
