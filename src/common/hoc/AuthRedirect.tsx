import Grid from '@mui/material/Grid'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { paths } from 'common'
import { useAuth } from 'features/auth'

export const AuthRedirect = () => {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn) return <Navigate to={paths.LOGIN} state={{ from: location }} />

  return (
    <Grid sx={{ paddingTop: 8 }} container justifyContent={'center'} alignItems={'center'}>
      <Outlet />
    </Grid>
  )
}
