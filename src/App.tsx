import { Link, Outlet } from 'react-router-dom'

import { Header } from 'common/components/header/Header'
import { paths } from 'common/constants'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Link to={'profile'}>profile &nbsp;</Link>
      <Link to={paths.AUTH}>auth &nbsp;</Link>
      <Link to={paths.LOGIN}>login&nbsp;</Link>
      <Link to={paths.RECOVERY_PASSWORD}>recovery-password&nbsp;</Link>
      <Link to={paths.REGISTRATION}>REGISTRATION&nbsp;</Link>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
