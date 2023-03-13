import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { paths } from 'common'
import { useAuth } from 'features/auth'

export const AuthRedirect = () => {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn) return <Navigate to={paths.LOGIN} state={{ from: location }} />

  return <Outlet />
}
