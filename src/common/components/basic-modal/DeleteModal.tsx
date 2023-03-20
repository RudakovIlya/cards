import { FC } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { BasicModal } from 'common'

type DeleteModalType = {
  modalTitle: string
  open: boolean
  entityName?: string
  entityTitle?: string
  callBack?: () => void
  handleClose: () => void
}

export const DeleteModal: FC<DeleteModalType> = ({
  modalTitle,
  entityName,
  entityTitle,
  open,
  handleClose,
  callBack,
}) => {
  return (
    <BasicModal open={open} onClose={handleClose} title={`Delete ${entityTitle}`}>
      <Typography padding={'0 0 30px 0'}>
        {modalTitle} <b>{entityName}</b>?
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button color={'primary'} size={'small'} onClick={handleClose} variant={'radius'}>
          Cancel
        </Button>
        <Button color={'error'} size={'small'} onClick={callBack} variant={'radius'}>
          Delete
        </Button>
      </Box>
    </BasicModal>
  )
}
