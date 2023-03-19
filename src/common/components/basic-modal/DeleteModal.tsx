import { FC } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { BasicModal } from 'common'

type DeleteModalType = {
  entityTitle?: string
  entityName?: string
  onDeleteEntity?: () => void
  handleClose: () => void
  open: boolean
}

export const DeleteModal: FC<DeleteModalType> = ({
  entityName,
  entityTitle,
  open,
  handleClose,
  onDeleteEntity,
}) => {
  return (
    <BasicModal open={open} onClose={handleClose} title={`Delete ${entityTitle}`}>
      <Typography padding={'0 0 30px 0'}>
        Do you really want to remove <b>{entityName}</b>? All cards will be deleted.
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button color={'primary'} size={'small'} onClick={handleClose} variant={'radius'}>
          Cancel
        </Button>
        <Button color={'error'} size={'small'} onClick={onDeleteEntity} variant={'radius'}>
          Delete
        </Button>
      </Box>
    </BasicModal>
  )
}
