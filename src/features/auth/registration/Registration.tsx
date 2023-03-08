import { useState } from 'react'

import TextField from '@mui/material/TextField'
import { Navigate } from 'react-router-dom'

import eye2 from 'assets/img/eye-closed.svg'
import eye from 'assets/img/eye.svg'
import { Form } from 'common/components'
import { paths } from 'common/constants'
import { useScheme } from 'common/hooks'
import { useAuth } from 'features/auth/use-auth'

export const Registration = () => {
  const { register, handleSubmit } = useScheme(['email', 'password', 'confPassword'])

  const { isRegistered, onRegister } = useAuth()

  const [passwordVisible, setPasswordVisible] = useState(false)

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

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
      <div className="passwordWrapper">
        <TextField
          {...register('password')}
          variant={'standard'}
          label={'Password'}
          type={passwordVisible ? 'text' : 'password'}
        />
        <img
          className={'eye'}
          src={passwordVisible ? eye2 : eye}
          onClick={showPassword}
          alt={'eye'}
        />
      </div>
      <TextField
        {...register('confPassword')}
        variant={'standard'}
        label={'Confirm password'}
        type={'password'}
      />
    </Form>
  )
}
