import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { appActions } from 'app/app-slice'
import { authAPI } from 'features/auth/auth-api'

export const authMe = createAsyncThunk('auth/me', async (_, { dispatch }) => {
  try {
    const response = await authAPI.me()

    return response.data
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(appActions.initialization({ isInit: true }))
  }
})

export const login = 'auth/regis'

const initialState = {
  isLoggedIn: false,
}

export const authMeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authMe.fulfilled, state => {
      state.isLoggedIn = true
    })
  },
})

export const { reducer: authReducer } = authMeSlice
