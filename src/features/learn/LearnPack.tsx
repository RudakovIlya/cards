import Typography from '@mui/material/Typography'

import { NavigationToBack } from 'common'
import { LearnCard } from 'features/learn/LearnCard'
import { useFetchPack, usePackCards } from 'features/pack'

export const LearnPack = () => {
  useFetchPack()

  const { packName } = usePackCards()

  return (
    <>
      <NavigationToBack />
      <Typography
        sx={{ flex: '0 0 25%', marginBottom: 2 }}
        variant={'h1'}
        fontSize={22}
        fontWeight={600}
        textAlign={'center'}
      >
        {packName}
      </Typography>
      <LearnCard />
    </>
  )
}
