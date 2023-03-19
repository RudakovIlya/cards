import { MyPackTable } from './my-pack-table/MyPackTable'

import { NavigationToBack, SubHeader } from 'common'
import { FilterPanels, useFetchPack, usePackCards } from 'features/pack'

export const Pack = () => {
  const { isMe, packName, learnCard, addNewCard, status } = usePackCards()

  useFetchPack()

  return (
    <>
      <NavigationToBack />
      <SubHeader
        disabled={status === 'loading'}
        isLoading={status === 'loading'}
        title={packName}
        titleButton={isMe ? 'Add new card' : 'Learn to pack'}
        onClick={isMe ? addNewCard : learnCard}
      />
      <FilterPanels />
      <MyPackTable />
    </>
  )
}
