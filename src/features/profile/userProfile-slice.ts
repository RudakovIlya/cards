import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { authAPI } from 'features/auth/auth-api'
import { authMe, login } from 'features/auth/auth-slice'
import { ResponseProfileType } from 'features/auth/types'
import { userProfileAPI } from 'features/profile/userProfile-api'

type ProfileStateType = {
  profile: ResponseProfileType
}

type UpdatedProfileType = {
  updatedUser: ResponseProfileType
  error?: string
}

type ProfileDataType = {
  title?: string
  avatar?: string
}

const initialState = {
  profile: {},
} as ProfileStateType

export const changeUserData = createAsyncThunk<UpdatedProfileType, any>(
  'profile/changeUserData',
  async (data: ProfileDataType, { rejectWithValue }) => {
    try {
      const response = await userProfileAPI.changeUserData(data)

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)

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

/*
{
  updatedUser: { ...весь юзер с изменёнными данными}

  error?: string
}
*/
