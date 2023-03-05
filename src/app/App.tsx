import { useEffect } from 'react'

import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { Header } from 'common/components/header/Header'
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { authMe } from 'features/auth/auth-slice'

export const App = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector(state => state.app.isInit)

  useEffect(() => {
    dispatch(authMe())
  }, [])

  return (
    <>
      <Header />
      <Container>{isInit ? <Outlet /> : 'Loading.....'}</Container>
    </>
  )
}
