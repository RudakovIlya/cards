import { FC } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

type SubHeaderType = {
  title: string
  titleButton: string
  onClick?: () => void
}

export const SubHeader: FC<SubHeaderType> = ({ onClick, titleButton, title }) => {
  return (
    <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ paddingTop: 5 }}>
      <Typography fontSize={22} fontWeight={600}>
        {title}
      </Typography>
      <Button onClick={onClick} variant={'radius'}>
        {titleButton}
      </Button>
    </Grid>
  )
}
