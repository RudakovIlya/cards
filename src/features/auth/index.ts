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
import { CheckEmail } from 'features/auth/components/forgot-password/CheckEmail'
import { ForgotPassword } from 'features/auth/components/forgot-password/ForgotPassword'
import { Login } from 'features/auth/components/login/Login'
import { NewPassword } from 'features/auth/components/new-password/NewPassword'
import { Registration } from 'features/auth/components/registration/Registration'
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
