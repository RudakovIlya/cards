import TextField from '@mui/material/TextField'
import { Navigate } from 'react-router-dom'

import { Form } from 'common/components/forms/Form'
import { paths } from 'common/constants'
import { useAuth } from 'features/auth/use-auth'
import { useScheme } from 'features/auth/use-scheme'

export const Registration = () => {
  const { register, handleSubmit } = useScheme(['email', 'password', 'confPassword'])

  const { isRegistered, onRegister } = useAuth()

  if (isRegistered) {
    return <Navigate to={paths.LOGIN} />
  }

  return (
    <Form
      onSubmit={handleSubmit(onRegister)}
      title={'Registration'}
      titleButton={'Register'}
      description={'Already have an account?'}
      link={{ title: 'Log in', to: paths.LOGIN }}
    >
      <TextField {...register('email')} variant={'standard'} label={'Email'} type={'email'} />
      <TextField
        {...register('password')}
        variant={'standard'}
        label={'Password'}
        type={'password'}
      />
      <TextField
        {...register('confPassword')}
        variant={'standard'}
        label={'Confirm password'}
        type={'password'}
      />
    </Form>
  )
}
