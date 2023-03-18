import {
  login,
  logOut,
  forgot,
  authMe,
  authReducer,
  authActions,
  setNewPassword,
  registerMe,
} from './auth-slice'
import { authRegistered, authMailSent, authPasswordSent, authLoggedIn } from './selectors'

import { Auth } from 'features/auth/Auth'
import { authAPI } from 'features/auth/auth-api'
import { CheckEmail } from 'features/auth/forgot-password/CheckEmail'
import { ForgotPassword } from 'features/auth/forgot-password/ForgotPassword'
import { useAuth } from 'features/auth/hooks/use-auth'
import { Login } from 'features/auth/login/Login'
import { NewPassword } from 'features/auth/new-password/NewPassword'
import { Registration } from 'features/auth/registration/Registration'
import {
  ForgotEmailDataType,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
  SetPasswordDataType,
} from 'features/auth/types'

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
