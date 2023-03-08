import { instance } from 'common/api-instance/api-instance'
import {
  ILoginDataType,
  IResponseRegisterType,
  ResponseInfoType,
  ResponseProfileType,
  TForgotEmail,
} from 'features/auth/types'

export const authAPI = {
  me() {
    return instance.post<ResponseProfileType>('/auth/me')
  },
  login(data: ILoginDataType) {
    return instance.post<ResponseProfileType>('/auth/login', data)
  },
  register(data: any) {
    return instance.post<IResponseRegisterType>('/auth/register', data)
  },
  logout() {
    return instance.delete<ResponseInfoType>('/auth/me')
  },
  forgot(data: TForgotEmail) {
    return instance.post<ResponseInfoType>('/auth/forgot', data)
  },
}
