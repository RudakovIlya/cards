import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import * as yup from 'yup'

import { Form } from 'common/components/forms/Form'
import { paths } from 'common/constants'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { registerMe } from 'features/auth/auth-slice'

const regSchema = yup.object().shape({
  email: yup.string().email('Email must be a valid!').required('Required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password length should be at least 4 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .min(4, 'Password length should be at least 4 characters')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  // rememberMe: yup.boolean().optional(),
})

export const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string; password: string; confirmPassword: string }>({
    resolver: yupResolver(regSchema),
  })

  const isRegistered = useAppSelector(state => state.auth.isRegistered)
  const dispatch = useAppDispatch()
  const onSubmit = (data: any) => {
    dispatch(registerMe(data))
    reset()
  }

  if (isRegistered) {
    return <Navigate to={paths.LOGIN} />
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
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
        {...register('confirmPassword')}
        variant={'standard'}
        label={'Confirm password'}
        type={'password'}
      />
    </Form>
  )
}
