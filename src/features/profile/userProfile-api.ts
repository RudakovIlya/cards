import { instance } from 'common/api-instance/api-instance'

type UserDataType = {
  name?: string
  avatar?: string
}

export const userProfileAPI = {
  changeUserData(payload: UserDataType) {
    return instance.put('/auth/me', payload)
  },
}
