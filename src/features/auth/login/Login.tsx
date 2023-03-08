import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { Navigate } from 'react-router-dom'

import { Form } from 'common/components/forms/Form'
import { CustomLink } from 'common/components/link/CustomLink'
import { ValidError } from 'common/components/valid-error/ValidError'
import { paths } from 'common/constants'
import { useAuth } from 'features/auth/use-auth'
import { useScheme } from 'features/auth/use-scheme'

export const Login = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { emailError, passwordError },
  } = useScheme(['email', 'password'])
  const { isLoggedIn, onLogin } = useAuth()

  if (isLoggedIn) {
    return <Navigate to={paths.USER_PROFILE} />
  }

  return (
    <Form
      onSubmit={handleSubmit(onLogin)}
      title={'Sign in'}
      titleButton={'Sign in'}
      description={`Don't have an account?`}
      link={{ title: 'Sign Up', to: paths.REGISTRATION }}
    >
      <TextField {...register('email')} variant={'standard'} label={'Email'} type={'email'} />
      {emailError && <ValidError sx={{ maxWidth: '347px' }}>{emailError}</ValidError>}
      <TextField
        {...register('password')}
        variant={'standard'}
        label={'Password'}
        type={'password'}
      />
      {passwordError && <ValidError sx={{ maxWidth: '347px' }}>{passwordError}</ValidError>}
      <FormControlLabel control={<Checkbox {...register('rememberMe')} />} label="Remember me" />
      <CustomLink align={'right'} to={paths.FORGOT_PASSWORD} color={'#000'}>
        Forgot Password?
      </CustomLink>
    </Form>
  )
}
