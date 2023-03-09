import Box from '@mui/material/Box'

import { MainPreloader, Portal } from 'common/components'
import { useAppSelector } from 'common/hooks'

export const ContentPreloader = () => {
  const status = useAppSelector(state => state.app.status)

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
