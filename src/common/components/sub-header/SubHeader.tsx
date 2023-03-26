import { FC } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { subHeaderTitleStyles, Title } from 'common'

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
      <Title sx={subHeaderTitleStyles} isLoading={isLoading} align={'left'}>
        {title}
      </Title>
      {titleButton && (
        <Button onClick={onClick} variant={'radius'} disabled={disabled}>
          {titleButton}
        </Button>
      )}
    </Grid>
  )
}
