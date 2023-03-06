import { createSlice } from '@reduxjs/toolkit'

import { authMe, login } from 'features/auth/auth-slice'
import { ResponseProfileType } from 'features/auth/types'

type ProfileStateType = {
  profile: ResponseProfileType
}

const initialState = {
  profile: {},
} as ProfileStateType

export const userProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action) => {
        state.profile = action.payload
      })
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload
      })
  },
})

export const { reducer: userProfileReducer } = userProfileSlice
