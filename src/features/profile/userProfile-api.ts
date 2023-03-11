import { instance } from 'common/api-instance/api-instance'
import { UpdatedProfileType } from 'features/profile/userProfile-slice'

type UserDataType = {
  name?: string
  avatar?: string
}

export const userProfileAPI = {
  changeUserData(payload: UserDataType) {
    return instance.put<UpdatedProfileType>('/auth/me', payload)
  },
}
