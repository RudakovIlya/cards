import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { Header } from 'common'
import { Modals } from 'features/modals'

export const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ height: '100%' }}>
        <Outlet />
      </Container>
      <Modals />
    </>
  )
}
