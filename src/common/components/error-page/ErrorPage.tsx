import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { ErrorImage } from 'common/components'
import { paths } from 'common/constants'

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <Grid
      sx={{ paddingTop: 8 }}
      direction={'column'}
      container
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography fontWeight={'bold'} variant={'h1'} fontSize={'xxx-large'}>
        Ooops!
      </Typography>
      <Typography fontSize={'larger'}>
        Sorry, an unexpected error has occurred or page not found!
      </Typography>
      <ErrorImage />
      <Button onClick={() => navigate(paths.LOGIN)} size={'large'} variant={'radius'}>
        Back to home page
      </Button>
    </Grid>
  )
}
