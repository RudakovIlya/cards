import { ModalRemoveEntity, useModals } from 'features/modals'
import { usePackCards } from 'features/pack/hooks/use-pack-cards'

export const Modals = () => {
  const {
    data: { _id },
  } = useModals()
  const { removeCard } = usePackCards()

  return (
    <>
      <ModalRemoveEntity onRemove={removeCard(_id)} title={'card'} />
    </>
  )
}
