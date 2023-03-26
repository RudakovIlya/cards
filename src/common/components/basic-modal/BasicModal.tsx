import { FC, memo, PropsWithChildren } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import { backgroundModalStyle, modalStyles } from 'common'

type BasicModalType = {
  open: boolean
  title: string
  onClose: () => void
}

export const BasicModal: FC<PropsWithChildren & BasicModalType> = memo(
  ({ open, title, onClose, children }) => {
    return (
      <Modal open={open} onClose={onClose}>
        <Box sx={backgroundModalStyle}>
          <Box sx={modalStyles}>
            <Typography fontWeight={500} fontSize={22}>
              {title}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Modal>
    )
  }
)
