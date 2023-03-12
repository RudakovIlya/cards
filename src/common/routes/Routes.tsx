import { createHashRouter } from 'react-router-dom'

import { App } from 'app/App'
import { ErrorPage } from 'common/components'
import { paths } from 'common/constants'
import { AuthRedirect } from 'common/hoc/AuthRedirect'
import { Auth } from 'features/auth/Auth'
import { CheckEmail } from 'features/auth/forgot-password/CheckEmail'
import { ForgotPassword } from 'features/auth/forgot-password/ForgotPassword'
import { Login } from 'features/auth/login/Login'
import { NewPassword } from 'features/auth/new-password/NewPassword'
import { Registration } from 'features/auth/registration/Registration'
import { Cards } from 'features/pack/Cards'
import { UserProfile } from 'features/profile/UserProfile'

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
            path: paths.CARDS,
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
            path: paths.SET_NEW_PASSWORD,
            element: <NewPassword />,
          },
          {
            path: paths.FORGOT_PASSWORD,
            element: <ForgotPassword />,
          },
          {
            path: paths.CHECK_EMAIL,
            element: <CheckEmail />,
          },
        ],
      },
    ],
  },
])
