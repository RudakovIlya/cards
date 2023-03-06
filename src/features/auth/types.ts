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
}

export type RegistrationResponseType = {
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  _id: string
  created: string
  updated: string
  __v: number
}
