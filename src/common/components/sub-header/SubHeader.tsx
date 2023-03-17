import { FC } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { DotsPreloader } from 'common'

type SubHeaderType = {
  title: string
  titleButton: string
  onClick?: () => void
  isVisible: boolean
}

export const SubHeader: FC<SubHeaderType> = ({ onClick, titleButton, title, isVisible }) => {
  return (
    <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ paddingTop: 3 }}>
      {isVisible ? (
        <Typography fontSize={22} fontWeight={600}>
          {title}
        </Typography>
      ) : (
        <DotsPreloader />
      )}

      <Button onClick={onClick} variant={'radius'}>
        {titleButton}
      </Button>
    </Grid>
  )
}
