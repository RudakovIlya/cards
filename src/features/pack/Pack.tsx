import { SubHeader } from 'common'
import { FilterPanels } from 'features/pack/filter-panels/FilterPanels'
import { usePackCards } from 'features/pack/use-pack-cards'

export const Pack = () => {
  const { isMe, packName, learnCard, addNewCard } = usePackCards()

  return (
    <>
      <SubHeader
        title={packName}
        titleButton={isMe ? 'Add new card' : 'Learn to pack'}
        onClick={isMe ? addNewCard : learnCard}
      />
      <FilterPanels />
    </>
  )
}
