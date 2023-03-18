import { FC } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

type EyeIconType = {
  showPassword: () => void
  passwordVisible: boolean
}

export const Eye: FC<EyeIconType> = ({ showPassword, passwordVisible }) => {
  return (
    <IconButton
      onClick={showPassword}
      sx={{
        color: '#000',
        position: 'relative',
        top: '-110%',
        right: '-92%',
        width: '23px',
        opacity: '50%',
        alignContent: 'center',
      }}
    >
      {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </IconButton>
  )
}
