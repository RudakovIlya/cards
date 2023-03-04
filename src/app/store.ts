import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    test: state => 1,
  },
  devTools: true,
})
