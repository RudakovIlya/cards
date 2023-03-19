import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'app/app-slice'
import { authReducer } from 'features/auth'
import { modalsReducer } from 'features/modals'
import { packReducer } from 'features/pack'
import { packListReducer } from 'features/packs-list'
import { userProfileReducer } from 'features/profile'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    pack: packReducer,
    modals: modalsReducer,
    profile: userProfileReducer,
    packList: packListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
