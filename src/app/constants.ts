import { isFulfilled, isPending, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'

import { authMe, forgot, login, logOut, registerMe, setNewPassword } from 'features/auth'
import { changeUserData } from 'features/profile/userProfile-slice'

const pending = isPending(authMe, login, logOut, registerMe, forgot, setNewPassword, changeUserData)
const fulfilled = isFulfilled(
  authMe,
  login,
  logOut,
  registerMe,
  forgot,
  setNewPassword,
  changeUserData
)
const rejected = isRejectedWithValue(
  login,
  logOut,
  registerMe,
  forgot,
  setNewPassword,
  changeUserData
)

const infoFulfilled = isFulfilled(logOut, forgot, registerMe, login, setNewPassword)
const initApp = isRejected(authMe)

export { pending, fulfilled, rejected, infoFulfilled, initApp }
