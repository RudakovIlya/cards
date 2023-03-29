import { CardSkeleton, NavigationToBack, Title, useAppSelector } from 'common'
import { LearnCard, useRandomCard } from 'features/learn'
import { learnPageStatus } from 'features/learn/selectors'
import { useFetchPack, usePackCards } from 'features/pack'

export const Learn = () => {
  useFetchPack()

  useRandomCard()

  const { packName, status } = usePackCards()

  const learnStatus = useAppSelector(learnPageStatus)

  return (
    <>
      <NavigationToBack />
      <Title sx={{ marginBottom: 2.3 }} isLoading={status === 'loading'} align={'center'}>
        {packName}
      </Title>
      {status === 'loading' || learnStatus === 'loading' ? <CardSkeleton /> : <LearnCard />}
    </>
  )
}
