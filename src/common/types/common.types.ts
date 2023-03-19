import { RootState } from 'app/store'

export type ThunkAPIType = {
  rejectValue: string
  state: RootState
}

export type FormValidateType = {
  email: string
  password: string
  confPassword?: string
  rememberMe?: boolean
  name: string
}