import { Checkbox } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import { createHashRouter, useRouteError } from 'react-router-dom'

import { App } from 'app/App'
import { paths } from 'common/constants'
import { AuthRedirect } from 'common/hoc/AuthRedirect'
import { Auth } from 'features/auth/Auth'
import { Login } from 'features/auth/login/Login'
import { Cards } from 'features/cards/Cards'

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

const Registration = () => {
  return <div>Registration</div>
}

const Profile = () => {
  return (
    <Container>
      <Button variant={'radius'}>Button</Button>
      <Button>Button</Button>
      <div>
        <TextField variant={'standard'} label={'Standard'} />
      </div>
      <Checkbox />
      <Slider />
    </Container>
  )
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
            path: paths.PROFILE,
            element: <Profile />,
          },
          {
            path: paths.PROFILE,
            element: <Cards />,
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
