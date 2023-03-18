import Box from '@mui/material/Box'

import { appStatus } from 'app/selectors'
import { MainPreloader, Portal, useAppSelector } from 'common'

export const ContentPreloader = () => {
  const status = useAppSelector(appStatus)

  if (status !== 'loading') {
    return null
  }

  return (
    <Portal>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <MainPreloader />
      </Box>
    </Portal>
  )
}
