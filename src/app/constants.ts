import { isFulfilled, isPending, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'

import { authMe, forgot, login, logOut, registerMe, setNewPassword } from 'features/auth'
import { getPackList } from 'features/packs-list'
import { changeUserData } from 'features/profile'

const pending = isPending(
  authMe,
  login,
  logOut,
  registerMe,
  forgot,
  setNewPassword,
  changeUserData,
  getPackList
)
const fulfilled = isFulfilled(
  authMe,
  login,
  logOut,
  registerMe,
  forgot,
  setNewPassword,
  changeUserData,
  getPackList
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
