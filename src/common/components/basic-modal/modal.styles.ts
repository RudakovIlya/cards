import { SxProps } from '@mui/material'

export const modalStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 3,
  borderBottom: '1px solid #D9D9D9',
}

export const backgroundModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 395,
  padding: '20px 24px',
  bgcolor: 'background.paper',
}
