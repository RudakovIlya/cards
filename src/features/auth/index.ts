import {
  authActions,
  authMe,
  authReducer,
  forgot,
  login,
  logOut,
  registerMe,
  setNewPassword,
} from './auth-slice'
import { authLoggedIn, authMailSent, authPasswordSent, authRegistered } from './selectors'

import { Auth } from 'features/auth/Auth'
import { authAPI } from 'features/auth/auth-api'
import { useAuth } from 'features/auth/hooks/use-auth'
import {
  ForgotEmailDataType,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
  SetPasswordDataType,
} from 'features/auth/types'
import { CheckEmail } from 'features/auth/ui/forgot-password/CheckEmail'
import { ForgotPassword } from 'features/auth/ui/forgot-password/ForgotPassword'
import { Login } from 'features/auth/ui/login/Login'
import { NewPassword } from 'features/auth/ui/new-password/NewPassword'
import { Registration } from 'features/auth/ui/registration/Registration'

export {
  logOut,
  login,
  authMe,
  forgot,
  authActions,
  registerMe,
  authReducer,
  setNewPassword,
  ForgotPassword,
  Login,
  NewPassword,
  Registration,
  CheckEmail,
  Auth,
  useAuth,
  authAPI,
  authLoggedIn,
  authRegistered,
  authPasswordSent,
  authMailSent,
}

export type {
  LoginDataType,
  ForgotEmailDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  SetPasswordDataType,
  ResponseRegisterType,
}
