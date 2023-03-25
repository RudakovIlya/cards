import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

import { CardSkeleton, NavigationToBack, useAppSelector } from 'common'
import { LearnCard } from 'features/learn/components/LearnCard'
import { useFetchPack, usePackCards } from 'features/pack'

export const Learn = () => {
  useFetchPack()

  const { packName, status } = usePackCards()

  const learnStatus = useAppSelector(state => state.learn.status)

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
