import { Navigate, Outlet } from 'react-router-dom'

import { paths } from 'common/constants'
import { useAppSelector } from 'common/hooks/hooks'

export const AuthRedirect = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={paths.LOGIN} />
  }

  return <Outlet />
}
