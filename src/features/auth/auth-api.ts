import { instance } from 'common/api-instance/api-instance'
import { ILoginDataType, ResponseProfileType } from 'features/auth/types'

export const authAPI = {
  me() {
    return instance.post<ResponseProfileType>('/auth/me')
  },
  login(data: ILoginDataType) {
    return instance.post<ResponseProfileType>('/auth/login', data)
  },
  register(data: any) {
    return instance.post('/auth/register', data)
  },
  logout() {
    return instance.delete('/auth/me')
  },
}
