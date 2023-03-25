import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

import { CardSkeleton, NavigationToBack, useAppSelector } from 'common'
import { LearnCard } from 'features/learn/components/LearnCard'
import { useRandomCard } from 'features/learn/hooks/use-random-card'
import { learnPageStatus } from 'features/learn/selectors'
import { useFetchPack, usePackCards } from 'features/pack'

export const Learn = () => {
  useFetchPack()

  const { packName, status } = usePackCards()

  const learnStatus = useAppSelector(learnPageStatus)

  useRandomCard()

  return (
    <>
      <NavigationToBack />
      <Typography
        sx={{ marginBottom: 2 }}
        variant={'h1'}
        fontSize={22}
        fontWeight={600}
        textAlign={'center'}
      >
        {status === 'loading' ? (
          <Skeleton sx={{ m: '0 auto', maxWidth: 200 }} variant={'text'} />
        ) : (
          packName
        )}
      </Typography>
      {status === 'loading' || learnStatus === 'loading' ? <CardSkeleton /> : <LearnCard />}
    </>
  )
}
