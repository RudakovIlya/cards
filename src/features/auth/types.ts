export type ResponseProfileType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number
  avatar?: string
}

export type ResponseRegisterType = {
  addedUser: ResponseProfileType
}

export type ResponseInfoType = {
  info: string
  error: string
}

export type LoginDataType = {
  email: string
  password: string
  rememberMe?: boolean
}

export type RegisterDataType = Omit<LoginDataType, 'rememberMe'>

export type ForgotEmailDataType = {
  email: string
  from: string
  message: string
}

export type SetPasswordDataType = {
  password: string
  resetPasswordToken: string
}
