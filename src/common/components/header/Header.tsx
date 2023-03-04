import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import logo from 'assets/img/incub-logo.svg'

export const Header = () => {
  return (
    <AppBar color={'transparent'} position="static">
      <Container>
        <Toolbar>
          <div style={{ flex: 1 }}>
            <img src={logo} alt="incubator-logo" />
          </div>
          <Button size={'small'} variant={'radius'}>
            Sign in
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
