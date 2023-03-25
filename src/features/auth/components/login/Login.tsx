import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { Link, useLocation } from 'react-router-dom'

import { Form, LinkWrapper, PasswordInput, paths, useRedirect, useScheme, ValidError } from 'common'
import { useAuth } from 'features/auth/index'

export const Login = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { emailError, passwordError },
  } = useScheme(['email', 'password'])

  const { isLoggedIn, onLogin } = useAuth()

  const location = useLocation()

  const fromPage = location.state?.from?.pathname || paths.PACK_LIST

  useRedirect(fromPage, isLoggedIn)

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
      <PasswordInput
        register={register}
        label={'Password'}
        name={'password'}
        errorMessage={passwordError}
      />
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
