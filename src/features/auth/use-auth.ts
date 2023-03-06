import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { authActions, login, registerMe } from 'features/auth/auth-slice'
import { ILoginDataType } from 'features/auth/types'

export const useAuth = () => {
  const { isLoggedIn, isRegistered } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authActions.register({ isRegistered: false }))
  }, [])

  const onLogin = (data: ILoginDataType) => {
    dispatch(login(data))
  }
  const onRegister = (data: ILoginDataType) => {
    dispatch(registerMe(data))
  }

  return {
    isLoggedIn,
    isRegistered,
    onLogin,
    onRegister,
  }
}
