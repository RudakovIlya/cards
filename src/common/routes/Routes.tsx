import { createHashRouter } from 'react-router-dom'

import { App } from 'app/App'
import { AuthRedirect, ErrorPage, paths } from 'common'
import { Auth, CheckEmail, ForgotPassword, Login, NewPassword, Registration } from 'features/auth'
import { Pack } from 'features/pack'
import { PackList } from 'features/packs-list'
import { UserProfile } from 'features/profile'

export const router = createHashRouter([
  {
    path: paths.PACK_LIST,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.PACK_LIST,
        element: <AuthRedirect />,
        children: [
          {
            index: true,
            element: <PackList />,
          },
          {
            path: paths.PACK,
            element: <Pack />,
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
