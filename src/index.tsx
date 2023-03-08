import { StrictMode } from 'react'

import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import { store } from 'app/store'
import { theme } from 'common/constants'
import { router } from 'common/routes/Routes'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)

reportWebVitals()
