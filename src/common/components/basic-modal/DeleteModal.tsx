import { FC } from 'react'

import Typography from '@mui/material/Typography'

import { BasicModal, ModalsButtons } from 'common'

type DeleteModalType = {
  open: boolean
  modalTitle: string
  entityName?: string
  entityTitle?: string
  callBack?: () => void
  handleClose: () => void
}

export const DeleteModal: FC<DeleteModalType> = ({
  open,
  modalTitle,
  entityName,
  entityTitle,
  callBack,
  handleClose,
}) => {
  return (
    <BasicModal open={open} onClose={handleClose} title={`Delete ${entityTitle}`}>
      <Typography padding={'0 0 30px 0'}>
        {modalTitle} <b>{entityName}</b>?
      </Typography>
      <ModalsButtons title={'Delete'} cancelCallback={handleClose} saveCallback={callBack} />
    </BasicModal>
  )
}
