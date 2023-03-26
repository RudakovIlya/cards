import { CardSkeleton, NavigationToBack, useAppSelector, Title } from 'common'
import { LearnCard } from 'features/learn/components/Card/LearnCard'
import { useRandomCard } from 'features/learn/hooks/use-random-card'
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
