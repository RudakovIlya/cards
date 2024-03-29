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
  private?: boolean
  question: string
  answer: string
  deckCover?: string
}

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
