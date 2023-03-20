import { ModalRemoveEntity, useModals } from 'features/modals'
import { usePackList } from 'features/packs-list/hooks/use-packlist'
import { CommonModal } from 'features/packs-list/modals/CommonModal'

export const Modals = () => {
  const {
    isShowEditModal,
    isShowAddedModal,
    data: { _id },
  } = useModals()
  const { removePack, editPack, addNewPack } = usePackList()

  return (
    <>
      <ModalRemoveEntity onRemove={removePack(_id)} title={'pack'} />
      <CommonModal title={'Add new pack'} open={isShowAddedModal} callback={addNewPack()} />

      <CommonModal title={'Edit pack'} open={isShowEditModal} callback={editPack(_id)} />
    </>
  )
}
