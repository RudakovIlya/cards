import { ProfileDataType, ProfileStateType, UpdatedProfileType, UserDataType } from './types'
import { useProfile } from './use-profile'
import { UserProfile } from './UserProfile'
import { changeUserData, userProfileReducer } from './userProfile-slice'

export { useProfile, UserProfile, userProfileReducer, changeUserData }
export type { UpdatedProfileType, ProfileDataType, UserDataType, ProfileStateType }
