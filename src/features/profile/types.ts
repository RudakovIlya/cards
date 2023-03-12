import { ResponseProfileType } from 'features/auth/types'

export type UserDataType = {
  name?: string
  avatar?: string
}

export type ProfileStateType = {
  profile: ResponseProfileType
}

export type UpdatedProfileType = {
  updatedUser: ResponseProfileType
  error?: string
}

export type ProfileDataType = {
  title?: string
  avatar?: string
}
