import { useParams } from 'react-router-dom'

import { developers, useAppDispatch, useAppSelector } from 'common'
import {
  login,
  forgot,
  logOut,
  registerMe,
  authLoggedIn,
  authMailSent,
  authRegistered,
  setNewPassword,
  authPasswordSent,
  LoginDataType,
  RegisterDataType,
} from 'features/auth'

export const useAuth = () => {
  const isLoggedIn = useAppSelector(authLoggedIn)
  const isRegistered = useAppSelector(authRegistered)
  const isMailSent = useAppSelector(authMailSent)
  const isPasswordSent = useAppSelector(authPasswordSent)

  const dispatch = useAppDispatch()

  const { token } = useParams<{ token: string }>()

  const onLogin = (data: LoginDataType) => {
    dispatch(login(data))
  }

  const onRegister = (data: RegisterDataType) => {
    dispatch(registerMe(data))
  }

  const onEmailSent = (data: { email: string }) => {
    dispatch(forgot({ ...data, ...developers }))
  }

  const onNewPasswordSent = (data: { password: string }) => {
    dispatch(setNewPassword({ ...data, resetPasswordToken: token as string }))
  }

  const onLogout = () => {
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
    onLogout,
    onNewPasswordSent,
  }
}
