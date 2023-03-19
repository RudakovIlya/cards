import { FC } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

type SubHeaderType = {
  title: string
  titleButton: string
  onClick?: () => void
  isLoading: boolean
  disabled: boolean
}

export const SubHeader: FC<SubHeaderType> = ({
  onClick,
  titleButton,
  title,
  isLoading,
  disabled,
}) => {
  return (
    <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ paddingTop: 3 }}>
      <Typography sx={{ flex: '0 0 25%' }} variant={'h2'} fontSize={22} fontWeight={600}>
        {isLoading ? <Skeleton variant={'text'} /> : title}
      </Typography>

      <Button onClick={onClick} variant={'radius'} disabled={disabled}>
        {titleButton}
      </Button>
    </Grid>
  )
}
