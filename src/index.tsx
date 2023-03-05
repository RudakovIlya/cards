import { StrictMode } from 'react'

import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import { theme } from 'common/constants/theme'
import { router } from 'common/routes/Routes'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)

reportWebVitals()
