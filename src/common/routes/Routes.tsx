import { createHashRouter, useRouteError } from 'react-router-dom'

import { App } from 'app/App'
import { paths } from 'common/constants'
import { AuthRedirect } from 'common/hoc/AuthRedirect'
import { Auth } from 'features/auth/Auth'
import { Login } from 'features/auth/login/Login'
import { Registration } from 'features/auth/registration/Registration'
import { Cards } from 'features/cards/Cards'
import { UserProfile } from 'features/profile/UserProfile'

const ErrorPage = () => {
  const error: any = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}

const RecoveryPassword = () => {
  return <div>RecoveryPassword</div>
}

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AuthRedirect />,
        children: [
          {
            path: paths.FORGOT_PASSWORD,
            element: <Cards />,
          },
          {
            path: paths.USER_PROFILE,
            element: <UserProfile />,
          },
        ],
      },

      {
        path: paths.AUTH,
        element: <Auth />,
        errorElement: <ErrorPage />,

        children: [
          {
            path: paths.REGISTRATION,
            element: <Registration />,
          },
          {
            path: paths.LOGIN,
            element: <Login />,
          },
          {
            path: paths.RECOVERY_PASSWORD,
            element: <RecoveryPassword />,
          },
          {
            path: paths.FORGOT_PASSWORD,
            element: <RecoveryPassword />,
          },
        ],
      },
    ],
  },
])
