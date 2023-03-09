import { forwardRef, SyntheticEvent } from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { appActions } from 'app/app-slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const DescriptionSnackbar = () => {
  const { error, infoMessage } = useAppSelector(state => state.app)
  const dispatch = useAppDispatch()
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(appActions.resetInfoMessages())
  }

  return (
    <Snackbar open={!!error || !!infoMessage} autoHideDuration={5000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={infoMessage ? 'success' : 'error'}
        sx={{ width: '100%' }}
      >
        {infoMessage || error}
      </Alert>
    </Snackbar>
  )
}
