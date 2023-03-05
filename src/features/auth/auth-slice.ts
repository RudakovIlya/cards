import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const authMe = createAsyncThunk('auth', () => {})

export const authMeSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
  extraReducers: () => {},
})

export const { reducer: authReducer } = authMeSlice
