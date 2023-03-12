import { instance } from 'common/api-instance/api-instance'
import {
  ForgotEmail,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
} from 'features/auth'

export const authAPI = {
  me() {
    return instance.post<ResponseProfileType>('/auth/me')
  },
  login(data: LoginDataType) {
    return instance.post<ResponseProfileType>('/auth/login', data)
  },
  register(data: RegisterDataType) {
    return instance.post<ResponseRegisterType>('/auth/register', {
      email: data.email,
      password: data.password,
    })
  },
  logout() {
    return instance.delete<ResponseInfoType>('/auth/me')
  },
  forgot(data: ForgotEmail) {
    return instance.post<ResponseInfoType>('/auth/forgot', data)
  },
  setNewPassword(data: { password: string; resetPasswordToken: string }) {
    return instance.post<ResponseInfoType>('/auth/set-new-password', data)
  },
}
