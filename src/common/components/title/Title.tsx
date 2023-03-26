import { FC, PropsWithChildren } from 'react'

import { SxProps } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

type TitleType = {
  sx?: SxProps
  isLoading?: boolean
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export const Title: FC<PropsWithChildren & TitleType> = ({
  sx,
  isLoading,
  align = 'center',
  children,
}) => {
  return (
    <Typography sx={sx} variant={'h1'} fontSize={22} fontWeight={600} textAlign={align}>
      {isLoading ? (
        <Skeleton
          sx={{ maxWidth: 200, m: align === 'center' ? '18px auto' : undefined }}
          variant={'text'}
        />
      ) : (
        children
      )}
    </Typography>
  )
}
