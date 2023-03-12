import { instance } from 'common/api-instance/api-instance'
import { UpdatedProfileType, UserDataType } from 'features/profile'

export const userProfileAPI = {
  changeUserData(payload: UserDataType) {
    return instance.put<UpdatedProfileType>('/auth/me', payload)
  },
}
