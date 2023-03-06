import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { appActions } from 'app/app-slice'
import { authAPI } from 'features/auth/auth-api'
import { ILoginDataType, ResponseProfileType } from 'features/auth/types'

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

export const login = createAsyncThunk<ResponseProfileType, ILoginDataType>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(data)

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)

export const registerMe = createAsyncThunk<ResponseProfileType, any>(
  'auth/register',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await authAPI.register(data)

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)

export const logOut = createAsyncThunk<ResponseProfileType, void>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.logout()

      return response.data
    } catch (e) {
      return rejectWithValue('Logout error')
    }
  }
)

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
}

export const authMeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<{ isRegistered: boolean }>) => {
      state.isRegistered = action.payload.isRegistered
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, state => {
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, state => {
        state.isLoggedIn = true
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false
      })
      .addCase(registerMe.fulfilled, state => {
        console.log('fulfilled')
        state.isRegistered = true
      })
  },
})

export const { reducer: authReducer, actions: authActions } = authMeSlice
