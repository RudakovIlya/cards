import { isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit'

import { authMe, login, logOut, registerMe, forgot } from 'features/auth'

const pending = isPending(authMe, login, logOut, registerMe, forgot)
const fulfilled = isFulfilled(authMe, login, logOut, registerMe, forgot)
const rejected = isRejectedWithValue(authMe, login, logOut, registerMe, forgot)

const infoFulfilled = isFulfilled(logOut, forgot, registerMe, login)

export { pending, fulfilled, rejected, infoFulfilled }
