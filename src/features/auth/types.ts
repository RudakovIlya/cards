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

export interface ILoginDataType {
  email: string
  password: string
  rememberMe?: boolean
}

export type IRegisterDataType = Omit<ILoginDataType, 'rememberMe'> & {
  confirmPassword?: string
}
