import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import * as yup from 'yup'

import { Form } from 'common/components/forms/Form'
import { paths } from 'common/constants'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { login } from 'features/auth/auth-slice'

const schema = yup.object().shape({
  email: yup.string().email('Email must be a valid!').required('Required'),
  password: yup.string().required('Required').min(4, 'Must be 4 characters or less!'),
  rememberMe: yup.boolean().optional(),
})

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string; password: string; rememberMe?: boolean }>({
    resolver: yupResolver(schema),
  })

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const dispatch = useAppDispatch()
  const onSubmit = (data: any) => {
    dispatch(login(data))
    reset()
  }

  if (isLoggedIn) {
    return <Navigate to={paths.USER_PROFILE} />
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      title={'Login'}
      titleButton={'Sign in'}
      description={'Already have an account?'}
      link={{ title: 'Sign in', to: paths.REGISTRATION }}
    >
      <TextField {...register('email')} variant={'standard'} label={'Email'} type={'email'} />
      <TextField
        {...register('password')}
        variant={'standard'}
        label={'Password'}
        type={'password'}
      />
    </Form>
  )
}
