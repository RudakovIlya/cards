import { instance } from 'common/api-instance/api-instance'
import { UserDataType } from 'features/profile/types'

export const userProfileAPI = {
  changeUserData(payload: UserDataType) {
    return instance.put('/auth/me', payload)
  },
}
