import { instance } from 'common/api-instance/api-instance'

export const authAPI = {
  me() {
    return instance.post('auth/me', {})
  },
}
