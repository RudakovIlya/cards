import { instance } from 'common'
import { UpdatedProfileType, UserDataType } from 'features/profile'

export const userProfileAPI = {
  changeUserData(payload: UserDataType) {
    return instance.put<UpdatedProfileType>('/auth/me', payload)
  },
}
