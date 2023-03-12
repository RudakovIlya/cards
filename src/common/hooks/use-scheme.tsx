import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'

import { createValidationSchema } from 'common'

export interface IFormValidate {
  email: string
  password: string
  confPassword?: string
  rememberMe?: boolean
  name: string
}

export const useScheme = (keys: string[]) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValidate>({
    resolver: yupResolver(createValidationSchema(keys)),
    mode: 'onSubmit',
  })

  const emailError = errors.email && errors.email.message
  const passwordError = errors.password && errors.password.message
  const confPasswordError = errors.confPassword && errors.confPassword.message
  const nameError = errors.name && errors.name.message

  return {
    errorsMessages: {
      nameError,
      emailError,
      passwordError,
      confPasswordError,
    },
    register,
    handleSubmit,
    reset,
  }
}
