import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { Header } from 'common/components/header/Header'

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
