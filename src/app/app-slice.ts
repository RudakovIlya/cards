import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AppInitialType = {
  isInit: boolean
}

const initialState: AppInitialType = {
  isInit: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initialization: (state, action: PayloadAction<{ isInit: boolean }>) => {
      state.isInit = action.payload.isInit
    },
  },
  extraReducers: builder => {},
})

export const { reducer: appReducer, actions: appActions } = appSlice
