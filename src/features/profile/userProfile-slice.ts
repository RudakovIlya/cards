import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { authMe, login } from 'features/auth'
import { ProfileStateType, UpdatedProfileType, UserDataType } from 'features/profile/types'
import { userProfileAPI } from 'features/profile/userProfile-api'

const initialState = {
  profile: {},
} as ProfileStateType

export const changeUserData = createAsyncThunk<UpdatedProfileType, UserDataType>(
  'profile/changeUserData',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userProfileAPI.changeUserData(data)

    return response.data
  } catch (e) {
    return rejectWithValue('Error')
  }
})

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
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.profile = action.payload.updatedUser
      })
  },
})

export const { reducer: userProfileReducer } = userProfileSlice
