import { UpdatedProfileType, ProfileDataType, UserDataType, ProfileStateType } from './types'
import { useProfile } from './use-profile'
import { UserProfile } from './UserProfile'
import { userProfileReducer, changeUserData } from './userProfile-slice'
export { useProfile, UserProfile, userProfileReducer, changeUserData }
export type { UpdatedProfileType, ProfileDataType, UserDataType, ProfileStateType }
