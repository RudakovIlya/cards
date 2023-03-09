import React, { FC } from 'react'

import TextField from '@mui/material/TextField'

import { useScheme } from '../../../common/hooks'

import Eye from './Eye'

type PasswordInputPropsType = {
  name: 'password' | 'confPassword'
  label: string
  passwordVisible: boolean
  showPassword: () => void
}

export const PasswordInput: FC<PasswordInputPropsType> = ({
  name,
  label,
  passwordVisible,
  showPassword,
}) => {
  const { register } = useScheme([name])

  return (
    <div className="passwordWrapper">
      <TextField
        {...register(name)}
        variant={'standard'}
        label={label}
        type={passwordVisible ? 'text' : 'password'}
        inputProps={{
          maxLength: 25,
        }}
      />
      <Eye passwordVisible={passwordVisible} showPassword={showPassword} />
    </div>
  )
}
