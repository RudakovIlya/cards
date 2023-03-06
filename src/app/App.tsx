import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { useApp } from 'app/use-app'
import { Header } from 'common/components/header/Header'
import { MainPreloader } from 'common/components/main-preloader/MainPreloader'

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
