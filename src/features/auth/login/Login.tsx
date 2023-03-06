import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { Navigate } from 'react-router-dom'

import { Form } from 'common/components/forms/Form'
import { paths } from 'common/constants'
import { useAuth } from 'features/auth/use-auth'
import { useScheme } from 'features/auth/use-scheme'

export const Login = () => {
  const { register, handleSubmit } = useScheme(['email', 'password'])
  const { isLoggedIn, onLogin } = useAuth()

  if (isLoggedIn) {
    return <Navigate to={paths.USER_PROFILE} />
  }

  return (
    <Form
      onSubmit={handleSubmit(onLogin)}
      title={'Sign in'}
      titleButton={'Sign Up'}
      description={'Already have an account?'}
      link={{ title: 'Sign Up', to: paths.REGISTRATION }}
    >
      <TextField {...register('email')} variant={'standard'} label={'Email'} type={'email'} />
      <TextField
        {...register('password')}
        variant={'standard'}
        label={'Password'}
        type={'password'}
      />
      <FormControlLabel control={<Checkbox {...register('rememberMe')} />} label="Remember me" />
    </Form>
  )
}
