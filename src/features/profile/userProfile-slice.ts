import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { errorUtils, ThunkAPIType } from 'common'
import { authMe, login } from 'features/auth'
import {
  ProfileStateType,
  UpdatedProfileType,
  UserDataType,
  userProfileAPI,
} from 'features/profile'

const initialState = {
  profile: {},
} as ProfileStateType

export const changeUserData = createAsyncThunk<UpdatedProfileType, UserDataType, ThunkAPIType>(
  'profile/change-user-data',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userProfileAPI.changeUserData(data)

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error ? error : `File larger than 100 kB`)
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
