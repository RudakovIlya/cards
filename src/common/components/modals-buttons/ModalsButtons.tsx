import { FC } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { modalsButtonsStyles } from 'common'

type ModalsButtonsType = {
  title: string
  disabled?: boolean
  cancelCallback: () => void
  saveCallback?: () => void
}

export const ModalsButtons: FC<ModalsButtonsType> = ({
  title,
  disabled,
  cancelCallback,
  saveCallback,
}) => {
  return (
    <Box sx={modalsButtonsStyles}>
      <Button onClick={cancelCallback} color={'error'} size={'small'} variant={'radius'}>
        Cancel
      </Button>
      <Button
        disabled={disabled}
        onClick={saveCallback}
        type={'submit'}
        color={'primary'}
        size={'small'}
        variant={'radius'}
      >
        {title}
      </Button>
    </Box>
  )
}
