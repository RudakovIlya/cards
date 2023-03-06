import { Outlet, Navigate } from 'react-router-dom'

import { paths } from 'common/constants'
import { useAppSelector } from 'common/hooks/hooks'

export const AuthRedirect = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const isRegistered = useAppSelector(state => state.auth.isRegistered)

  if (!isLoggedIn) {
    return <Navigate to={paths.LOGIN} />
  }

  if (!isRegistered) {
    return <Navigate to={paths.LOGIN} />
  }

  return <Outlet />
}
