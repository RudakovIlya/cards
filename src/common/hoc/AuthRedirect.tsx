import { Outlet, Navigate } from 'react-router-dom'

import { paths } from 'common/constants'

export const AuthRedirect = () => {
  const isLoggedIn = true

  if (!isLoggedIn) {
    return <Navigate to={paths.LOGIN} />
  }

  return <Outlet />
}
