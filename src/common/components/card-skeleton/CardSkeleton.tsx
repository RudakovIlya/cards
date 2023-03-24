import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export const CardSkeleton = () => {
  return (
    <Stack
      sx={{
        width: 439,
        minHeight: 204,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
      }}
      spacing={1}
    >
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" width={'100%'} height={60} />
      <Skeleton variant="rounded" width={'100%'} height={40} />
    </Stack>
  )
}
