import { FC, memo, PropsWithChildren } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 395,
  padding: '20px 24px',
  bgcolor: 'background.paper',
}

type BasicModalType = {
  open: boolean
  title: string
  onClose: () => void
}

export const BasicModal: FC<PropsWithChildren & BasicModalType> = memo(
  ({ open, title, onClose, children }) => {
    return (
      <div>
        <Modal open={open} onClose={onClose}>
          <Box sx={style}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 3,
                borderBottom: '1px solid #D9D9D9',
              }}
            >
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
      </div>
    )
  }
)
