import { MyPackTable } from './my-pack-table/MyPackTable'

import { NavigationToBack, SubHeader } from 'common'
import { useModals } from 'features/modals'
import { FilterPanels, useFetchPack, usePackCards } from 'features/pack'
import { Modals } from 'features/pack/modals/Modals'

export const Pack = () => {
  const { isMe, packName, learnToPack, status, addNewCard } = usePackCards()
  const { showModal } = useModals()

  useFetchPack()

  return (
    <>
      <NavigationToBack />
      <SubHeader
        disabled={status === 'loading'}
        isLoading={status === 'loading'}
        title={packName}
        titleButton={isMe ? 'Add new card' : 'Learn to pack'}
        // onClick={isMe ? addNewCard : learnToPack}
        onClick={isMe ? showModal('add', {}) : learnToPack}
      />
      <FilterPanels />
      <MyPackTable />
      <Modals />
    </>
  )
}
