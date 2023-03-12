import Grid from '@mui/material/Grid'
import { Navigate, Outlet } from 'react-router-dom'

import { paths } from 'common'
import { useAuth } from 'features/auth'

export const AuthRedirect = () => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) return <Navigate to={paths.LOGIN} />

  return (
    <Grid sx={{ paddingTop: 8 }} container justifyContent={'center'} alignItems={'center'}>
      <Outlet />
    </Grid>
  )
}
