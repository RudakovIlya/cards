import Grid from '@mui/material/Grid'
import { Outlet, Navigate } from 'react-router-dom'

import { paths } from 'common/constants'
import { useAppSelector } from 'common/hooks/hooks'

export const AuthRedirect = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={paths.LOGIN} />
  }

  return (
    <Grid sx={{ paddingTop: 8 }} container justifyContent={'center'} alignItems={'center'}>
      <Outlet />
    </Grid>
  )
}
