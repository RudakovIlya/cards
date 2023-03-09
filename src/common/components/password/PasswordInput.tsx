import { FC, useState } from 'react'

import TextField from '@mui/material/TextField'
import { UseFormRegister } from 'react-hook-form'

import { Eye } from 'common/components'
import { IFormValidate } from 'common/hooks/use-scheme'

type PasswordInputPropsType = {
  name: 'password' | 'confPassword'
  label: string
  errorMessage?: string
  register: UseFormRegister<IFormValidate>
}

export const PasswordInput: FC<PasswordInputPropsType> = ({ name, label, register }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className="passwordWrapper">
      <TextField
        {...register(name)}
        autoComplete={'on'}
        variant={'standard'}
        label={label}
        name={name}
        type={passwordVisible ? 'text' : 'password'}
        inputProps={{
          maxLength: 25,
        }}
      />
      <Eye passwordVisible={passwordVisible} showPassword={showPassword} />
    </div>
  )
}
