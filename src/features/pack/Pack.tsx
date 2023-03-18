import { MyPackTable } from './my-pack-table/MyPackTable'

import { NavigationToBack, SubHeader } from 'common'
import { usePackCards, FilterPanels } from 'features/pack'

export const Pack = () => {
  const { isMe, packName, learnCard, addNewCard, status } = usePackCards()

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
