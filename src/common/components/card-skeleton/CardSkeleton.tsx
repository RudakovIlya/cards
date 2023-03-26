import Card from '@mui/material/Card'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import { cardStyles } from 'common'

export const CardSkeleton = () => {
  return (
    <Card sx={cardStyles} variant={'outlined'}>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="rectangular" width={'100%'} height={60} />
        <Skeleton sx={{ borderRadius: '30px' }} variant="rounded" width={'100%'} height={40} />
      </Stack>
    </Card>
  )
}
