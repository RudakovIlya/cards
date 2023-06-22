import StyleIcon from '@mui/icons-material/Style'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { Link, useNavigate } from 'react-router-dom'

import { AccountMenu, ContentPreloader, DescriptionSnackbar, paths, useAppSelector } from 'common'
import { authLoggedIn } from 'features/auth'

export const Header = () => {
  const isLoggedIn = useAppSelector(authLoggedIn)

  const navigate = useNavigate()

  const onClick = () => navigate(paths.LOGIN)

  return (
    <AppBar color={'transparent'} position="static">
      <Container>
        <Toolbar>
          <span style={{ flex: 1 }}>
            <Link
              style={{ color: '#000', display: 'flex', alignItems: 'center' }}
              to={paths.PACK_LIST}
            >
              <StyleIcon sx={{ color: '#366EFF', marginRight: '5px' }} />
              <span>Learning Cards</span>
            </Link>
          </span>
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
