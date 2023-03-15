import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { Header } from 'common'

export const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ height: '100%' }}>
        <Outlet />
      </Container>
    </>
  )
}
