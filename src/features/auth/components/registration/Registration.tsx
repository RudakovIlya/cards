import TextField from '@mui/material/TextField'

import { Form, PasswordInput, paths, useRedirect, useScheme } from 'common'
import { useAuth } from 'features/auth'

export const Registration = () => {
  const {
    register,
    handleSubmit,
    errorsMessages: { passwordError, confPasswordError },
  } = useScheme(['email', 'password', 'confPassword'])

  const { isRegistered, onRegister } = useAuth()

  useRedirect(paths.LOGIN, isRegistered)

  return (
    <Form
      onSubmit={handleSubmit(onRegister)}
      title={'Registration'}
      titleButton={'Register'}
      description={'Already have an account?'}
      link={{ title: 'Log in', to: paths.LOGIN }}
    >
      <TextField {...register('email')} variant={'standard'} label={'Email'} type={'email'} />
      <PasswordInput
        register={register}
        name={'password'}
        label={'Password'}
        errorMessage={passwordError}
      />
      <PasswordInput
        register={register}
        name={'confPassword'}
        label={'Confirm password'}
        errorMessage={confPasswordError}
      />
    </Form>
  )
}
