import Box from '@mui/material/Box'

import { appStatus } from 'app/selectors'
import { contentPreloaderStyles, MainPreloader, Portal, useAppSelector } from 'common'

export const ContentPreloader = () => {
  const status = useAppSelector(appStatus)

  if (status !== 'loading') {
    return null
  }

  return (
    <Portal>
      <Box sx={contentPreloaderStyles}>
        <MainPreloader />
      </Box>
    </Portal>
  )
}
