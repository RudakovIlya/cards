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

import { Auth } from 'features/auth/Auth'
import { authAPI } from 'features/auth/auth-api'
import { CheckEmail } from 'features/auth/forgot-password/CheckEmail'
import { ForgotPassword } from 'features/auth/forgot-password/ForgotPassword'
import { Login } from 'features/auth/login/Login'
import { NewPassword } from 'features/auth/new-password/NewPassword'
import { Registration } from 'features/auth/registration/Registration'
import {
  ForgotEmail,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
} from 'features/auth/types'
import { useAuth } from 'features/auth/use-auth'

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
}

export type {
  ForgotEmail,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
}
