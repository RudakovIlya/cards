import { FC, memo } from 'react'

import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import IconButton from '@mui/material/IconButton'

type ResetButtonType = {
  onClick: () => void
  disabled: boolean
}

export const ResetButton: FC<ResetButtonType> = memo(({ onClick, disabled }) => {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      sx={{ backgroundColor: '#fff', border: ' 1px solid #E8E8E8', borderRadius: '2px' }}
    >
      <FilterAltOffIcon />
    </IconButton>
  )
})
