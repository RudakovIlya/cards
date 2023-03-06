import { instance } from 'common/api-instance/api-instance'

export const authAPI = {
  me() {
    return instance.post('/auth/me')
  },
  login(data: any) {
    return instance.post('/auth/login', data)
  },
  logout() {
    return instance.delete('/auth/me')
  },
}
