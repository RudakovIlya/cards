import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'app/app-slice'
import { authReducer } from 'features/auth/auth-slice'
import { userProfileReducer } from 'features/profile/userProfile-slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: userProfileReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
