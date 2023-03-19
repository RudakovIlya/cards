import { ModalRemoveEntity, useModals } from 'features/modals'
import { usePackList } from 'features/packs-list'

export const Modals = () => {
  const {
    data: { _id },
  } = useModals()
  const { removePack } = usePackList()

  return (
    <>
      <ModalRemoveEntity onRemove={removePack(_id)} title={'pack'} />
    </>
  )
}
