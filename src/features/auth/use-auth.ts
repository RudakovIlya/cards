import { useEffect } from 'react'

import { developers } from 'common/constants'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authActions, forgot, login, logOut, registerMe } from 'features/auth/auth-slice'
import { ILoginDataType } from 'features/auth/types'

export const useAuth = () => {
  const { isLoggedIn, isRegistered, isMailSent } = useAppSelector(state => state.auth)
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

  const onEmailSent = (data: { email: string }) => {
    dispatch(forgot({ ...data, ...developers }))
  }

  const logoutHandler = () => {
    dispatch(logOut())
  }

  return {
    isLoggedIn,
    isMailSent,
    isRegistered,
    onLogin,
    onRegister,
    onEmailSent,
    logoutHandler,
  }
}
