import { FC, memo } from 'react'

import TextField from '@mui/material/TextField'
import { UseFormRegister } from 'react-hook-form'

type InputWithValueType = {
  name: string
  value: string
  label?: string
  register: UseFormRegister<any>
}

export const InputWithValue: FC<InputWithValueType> = memo(({ name, value, label, register }) => {
  return (
    <TextField
      {...register(name, { value: value })}
      variant={'standard'}
      label={label}
      sx={{ width: '100%', marginBottom: '30px' }}
    />
  )
})
