import { useNavigate } from 'react-router-dom'

import { MyPackTable } from './my-pack-table/MyPackTable'

import { NavigationToBack, SubHeader } from 'common'
import { FilterPanels } from 'features/pack/filter-panels/FilterPanels'
import { usePackCards } from 'features/pack/use-pack-cards'

export const Pack = () => {
  const { isMe, packName, isLoading, learnCard, addNewCard } = usePackCards()
  const navigate = useNavigate()
  const returnToPackList = () => navigate(-1)

  return (
    <>
      <NavigationToBack onClick={returnToPackList} />
      <SubHeader
        isVisible={!isLoading}
        title={packName}
        titleButton={isMe ? 'Add new card' : 'Learn to pack'}
        onClick={isMe ? addNewCard : learnCard}
      />
      <FilterPanels />
      <MyPackTable />
    </>
  )
}
