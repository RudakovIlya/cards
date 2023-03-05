import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {},
  extraReducers: () => {},
})

export const { reducer: appReducer } = appSlice
