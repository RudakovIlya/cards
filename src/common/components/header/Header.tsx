import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'

import logo from 'assets/img/incub-logo.svg'
import { paths } from 'common/constants'

export const Header = () => {
  return (
    <AppBar color={'transparent'} position="static">
      <Container>
        <Toolbar>
          <Link to={paths.CARDS} style={{ flex: 1 }}>
            <img src={logo} alt="incubator-logo" />
          </Link>
          <Button size={'small'} variant={'radius'}>
            Sign in
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
