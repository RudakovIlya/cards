import { useState } from 'react'

import TextField from '@mui/material/TextField'

import { PasswordInput } from './PasswordInput'

import { Form } from 'common/components'
import { paths } from 'common/constants'
import { useRedirect, useScheme } from 'common/hooks'
import { useAuth } from 'features/auth/use-auth'

export const Registration = () => {
  const { register, handleSubmit } = useScheme(['email', 'password', 'confPassword'])

  const { isRegistered, onRegister } = useAuth()

  const [passwordVisible, setPasswordVisible] = useState(false)

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

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
        name={'password'}
        label={'Password'}
        passwordVisible={passwordVisible}
        showPassword={showPassword}
      />
      <PasswordInput
        name={'confPassword'}
        label={'Confirm password'}
        passwordVisible={passwordVisible}
        showPassword={showPassword}
      />
    </Form>
  )
}
