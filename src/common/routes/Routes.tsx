import { Checkbox } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import { createHashRouter, Outlet, useRouteError } from 'react-router-dom'

import { App } from 'app/App'
import { paths } from 'common/constants'
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

const Auth = () => {
  console.log('Auth')

  return (
    <div>
      <h2>Auth</h2>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

const RecoveryPassword = () => {
  return <div>RecoveryPassword</div>
}

const Registration = () => {
  return <div>Registration</div>
}

const Login = () => {
  return <div>Login</div>
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

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Cards />,
      },
      {
        path: paths.PROFILE,
        element: <Profile />,
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

export default router
