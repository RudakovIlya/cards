import { useParams } from 'react-router-dom'

import { developers, useAppDispatch, useAppSelector } from 'common'
import {
  forgot,
  login,
  LoginDataType,
  logOut,
  RegisterDataType,
  registerMe,
  setNewPassword,
} from 'features/auth'

export const useAuth = () => {
  const { isLoggedIn, isRegistered, isMailSent, isPasswordSent } = useAppSelector(
    state => state.auth
  )
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

  const onNewPasswordSent = (data: any) => {
    dispatch(setNewPassword({ ...data, resetPasswordToken: token }))
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
    logoutHandler: onLogout,
    onNewPasswordSent,
  }
}
