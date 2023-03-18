import { instance } from 'common'
import {
  ForgotEmailDataType,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
  SetPasswordDataType,
} from 'features/auth'

export const authAPI = {
  me() {
    return instance.post<ResponseProfileType>('/auth/me')
  },
  login(data: LoginDataType) {
    return instance.post<ResponseProfileType>('/auth/login', data)
  },
  register(data: RegisterDataType) {
    return instance.post<ResponseRegisterType>('/auth/register', data)
  },
  logout() {
    return instance.delete<ResponseInfoType>('/auth/me')
  },
  forgot(data: ForgotEmailDataType) {
    return instance.post<ResponseInfoType>('/auth/forgot', data)
  },
  setNewPassword(data: SetPasswordDataType) {
    return instance.post<ResponseInfoType>('/auth/set-new-password', data)
  },
}
