import { ImageCover, NavigationToBack, SubHeader } from 'common'
import { useModals } from 'features/modals'
import { FilterPanels, useFetchPack, usePackCards, Modals, MyPackTable } from 'features/pack'

export const Pack = () => {
  const { isMe, packName, learnToPack, status, totalCount, cover } = usePackCards()
  const { showModal } = useModals()

  useFetchPack()

  return (
    <>
      <NavigationToBack />
      <SubHeader
        disabled={status === 'loading' || (!isMe && !totalCount)}
        isLoading={status === 'loading'}
        title={packName}
        titleButton={isMe ? 'Add new card' : 'Learn to pack'}
        onClick={isMe ? showModal('add', {}) : learnToPack}
      />
      <ImageCover deckCover={cover} width={'170px'} height={'107px'} />
      <FilterPanels />
      <MyPackTable />
      <Modals />
    </>
  )
}
