import { FC, PropsWithChildren } from 'react'

import Grid from '@mui/material/Grid'

export const Filters: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{ paddingTop: 3, marginBottom: 3 }}
    >
      {children}
    </Grid>
  )
}
