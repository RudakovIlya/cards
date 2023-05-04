import { profileData } from './selectors'
import { ProfileDataType, ProfileStateType, UpdatedProfileType, UserDataType } from './types'
import { UserProfile } from './UserProfile'
import { userProfileAPI } from './userProfile-api'
import { changeUserData, userProfileReducer } from './userProfile-slice'

import { useProfile } from 'features/profile/hooks/use-profile'

export { useProfile, UserProfile, profileData, changeUserData, userProfileAPI, userProfileReducer }
export type { UpdatedProfileType, ProfileDataType, UserDataType, ProfileStateType }
export { ChangeAvaButton } from './ui/change-ava-button/ChangeAvaButton'
