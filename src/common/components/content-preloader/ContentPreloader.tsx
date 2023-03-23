import Box from '@mui/material/Box'

import { appStatus } from 'app/selectors'
import { contentPreloaderStyles, MainPreloader, Portal, useAppSelector } from 'common'

export const ContentPreloader = () => {
  const status = useAppSelector(appStatus)
  const learnStatus = useAppSelector(state => state.learn.status)

  if (status !== 'loading' && learnStatus !== 'loading') {
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
