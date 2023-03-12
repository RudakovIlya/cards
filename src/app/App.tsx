import { useApp } from 'app/use-app'
import { Layout, MainPreloader } from 'common'
import { useAuth } from 'features/auth'

export const App = () => {
  const isInit = useApp()
  const { isLoggedIn } = useAuth()

  return isInit && isLoggedIn !== null ? <Layout /> : <MainPreloader />
}
