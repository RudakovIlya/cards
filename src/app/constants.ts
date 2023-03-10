import { isFulfilled, isPending, isRejectedWithValue, isRejected } from '@reduxjs/toolkit'

import { authMe, forgot, login, logOut, registerMe, setNewPassword } from 'features/auth'

const pending = isPending(authMe, login, logOut, registerMe, forgot, setNewPassword)
const fulfilled = isFulfilled(authMe, login, logOut, registerMe, forgot, setNewPassword)
const rejected = isRejectedWithValue(login, logOut, registerMe, forgot, setNewPassword)

const infoFulfilled = isFulfilled(logOut, forgot, registerMe, login, setNewPassword)
const initApp = isRejected(authMe)

export { pending, fulfilled, rejected, infoFulfilled, initApp }
