import { ModalRemoveEntity, useModals } from 'features/modals'
import { usePackCards } from 'features/pack'
import { usePackList } from 'features/packs-list'

export const Modals = () => {
  const {
    data: { _id },
  } = useModals()
  const { removePack } = usePackList()
  const { removeCard } = usePackCards()

  return (
    <>
      <ModalRemoveEntity onRemove={removePack(_id)} title={'pack'} />
      <ModalRemoveEntity onRemove={removeCard(_id)} title={'card'} />
    </>
  )
}
