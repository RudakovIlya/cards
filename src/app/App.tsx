import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { useApp } from 'app/use-app'
import { Header, MainPreloader } from 'common/components'

export const App = () => {
  const isInit = useApp()

  return isInit ? (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  ) : (
    <MainPreloader />
  )
}
