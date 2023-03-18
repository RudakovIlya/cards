import { RootState } from 'app/store'

const authLoggedIn = (state: RootState) => state.auth.isLoggedIn
const authRegistered = (state: RootState) => state.auth.isRegistered
const authPasswordSent = (state: RootState) => state.auth.isPasswordSent
const authMailSent = (state: RootState) => state.auth.isMailSent

export { authLoggedIn, authRegistered, authPasswordSent, authMailSent }
