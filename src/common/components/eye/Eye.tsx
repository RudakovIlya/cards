import { FC } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

import { eyeStyles } from 'common'

type EyeIconType = {
  showPassword: () => void
  passwordVisible: boolean
}

export const Eye: FC<EyeIconType> = ({ showPassword, passwordVisible }) => {
  return (
    <IconButton onClick={showPassword} sx={eyeStyles}>
      {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </IconButton>
  )
}
