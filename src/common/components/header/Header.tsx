import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/img/incub-logo.svg'
import { AccountMenu, ContentPreloader, DescriptionSnackbar, paths, useAppSelector } from 'common'

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const onClick = () => navigate(paths.LOGIN)

  return (
    <AppBar color={'transparent'} position="static">
      <Container>
        <Toolbar>
          <Link to={paths.PACK_LIST} style={{ flex: 1 }}>
            <img src={logo} alt="incubator-logo" />
          </Link>
          {!isLoggedIn ? (
            <Button onClick={onClick} size={'small'} variant={'radius'}>
              Sign in
            </Button>
          ) : (
            <AccountMenu />
          )}
        </Toolbar>
      </Container>
      <DescriptionSnackbar />
      <ContentPreloader />
    </AppBar>
  )
}
