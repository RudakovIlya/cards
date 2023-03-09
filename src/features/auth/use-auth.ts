import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { developers } from 'common/constants'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authActions, forgot, login, logOut, registerMe, setNewPassword } from 'features/auth'
import { ILoginDataType } from 'features/auth/types'

export const useAuth = () => {
  const { isLoggedIn, isRegistered, isMailSent, isPasswordSent } = useAppSelector(
    state => state.auth
  )
  const dispatch = useAppDispatch()
  const { token } = useParams<{ token: string }>()

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

  const onNewPasswordSent = (data: any) => {
    dispatch(setNewPassword({ ...data, resetPasswordToken: token }))
  }

  const logoutHandler = () => {
    dispatch(logOut())
  }

  return {
    isPasswordSent,
    isLoggedIn,
    isMailSent,
    isRegistered,
    onLogin,
    onRegister,
    onEmailSent,
    logoutHandler,
    onNewPasswordSent,
  }
}
