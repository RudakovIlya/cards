import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { appActions } from 'app/app-slice'
import { authAPI } from 'features/auth/auth-api'
import { ResponseProfileType } from 'features/auth/types'

export const authMe = createAsyncThunk<ResponseProfileType, void>(
  'auth',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await authAPI.me()

      return response.data
    } catch (e: any) {
      return rejectWithValue(e?.message)
    } finally {
      dispatch(appActions.initialization({ isInit: true }))
    }
  }
)

export const login = createAsyncThunk<ResponseProfileType, any>(
  'auth/login',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(data)

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)

const initialState = {
  isLoggedIn: false,
}

export const authMeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action) => {
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, state => {
        state.isLoggedIn = true
      })
  },
})

export const { reducer: authReducer } = authMeSlice
