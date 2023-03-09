import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'

import { LinkWrapper, Form, ValidError } from 'common/components'
import { paths } from 'common/constants'
import { useRedirect, useScheme } from 'common/hooks'
import { useAuth } from 'features/auth/use-auth'

export const Login = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { emailError, passwordError },
  } = useScheme(['email', 'password'])

  const { isLoggedIn, onLogin } = useAuth()

  useRedirect(paths.USER_PROFILE, isLoggedIn)

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
        autoComplete={'on'}
        variant={'standard'}
        label={'Password'}
        type={'password'}
      />
      {passwordError && <ValidError sx={{ maxWidth: '347px' }}>{passwordError}</ValidError>}
      <FormControlLabel
        sx={{ alignSelf: 'flex-start' }}
        control={<Checkbox {...register('rememberMe')} />}
        label="Remember me"
      />
      <LinkWrapper colorText={'#000'} justifySelf={'flex-end'}>
        <Link to={paths.FORGOT_PASSWORD}>Forgot Password?</Link>
      </LinkWrapper>
    </Form>
  )
}
