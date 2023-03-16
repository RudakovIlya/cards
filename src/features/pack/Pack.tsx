import { Filters, InputSearch, SubHeader } from 'common'
import { usePackCards } from 'features/pack'
import { usePackFilters } from 'features/pack/use-packFilters'

export const Pack = () => {
  const packCards = usePackCards()

  const { packTitle, isMe, addNewCard, learnCard } = usePackFilters()

  return (
    <>
      <SubHeader
        title={packTitle}
        titleButton={isMe ? 'Add new card' : 'Learn to pack'}
        onClick={isMe ? addNewCard : learnCard}
      />
      <Filters>
        <InputSearch onChangeValue={() => {}} searchValue={''} />
      </Filters>
    </>
  )
}
