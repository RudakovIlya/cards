import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'

import { createValidationSchema, FormValidateType } from 'common'

export const useScheme = (keys: string[]) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValidateType>({
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
