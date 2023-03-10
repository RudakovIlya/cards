import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fulfilled, infoFulfilled, pending, rejected, initApp } from 'app/constants'

type AppInitialType = {
  isInit: boolean
  error: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  infoMessage: string | null
}

const initialState: AppInitialType = {
  isInit: false,
  error: null,
  status: 'idle',
  infoMessage: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initialization: (state, action: PayloadAction<{ isInit: boolean }>) => {
      state.isInit = action.payload.isInit
    },
    resetInfoMessages: state => {
      state.infoMessage = null
      state.error = null
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(pending, state => {
        state.status = 'loading'
        state.infoMessage = null
        state.error = null
      })
      .addMatcher(fulfilled, state => {
        state.status = 'succeeded'
      })
      .addMatcher(infoFulfilled, (state, action) => {
        state.infoMessage = action.payload.info.toLowerCase()
      })
      .addMatcher(initApp, state => {
        state.status = 'idle'
      })
      .addMatcher(rejected, (state, action) => {
        state.error = action.payload
        state.status = 'failed'
      })
  },
})

export const { reducer: appReducer, actions: appActions } = appSlice
