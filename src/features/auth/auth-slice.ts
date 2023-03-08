import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { appActions } from 'app/app-slice'
import { errorUtils } from 'common/utils/error-utils'
import { authAPI } from 'features/auth/auth-api'
import {
  ILoginDataType,
  IResponseRegisterType,
  ResponseInfoType,
  ResponseProfileType,
  TForgotEmail,
} from 'features/auth/types'

export const authMe = createAsyncThunk<
  ResponseProfileType,
  void,
  {
    rejectValue: string
  }
>('auth', async (_, { dispatch, rejectWithValue }) => {
  try {
    const response = await authAPI.me()

    return response.data
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  } finally {
    dispatch(appActions.initialization({ isInit: true }))
  }
})

export const login = createAsyncThunk<
  ResponseProfileType & { info: string },
  ILoginDataType,
  {
    rejectValue: string
  }
>('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response = await authAPI.login(data)

    return { ...response.data, info: 'Authorization was successful!' }
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

export const registerMe = createAsyncThunk<
  IResponseRegisterType & { info: string },
  any,
  {
    rejectValue: string
  }
>('auth/register', async (data: any, { rejectWithValue }) => {
  try {
    const response = await authAPI.register(data)

    return { ...response.data, info: 'You have successfully registered' }
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

export const logOut = createAsyncThunk<
  ResponseInfoType,
  void,
  {
    rejectValue: string
  }
>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await authAPI.logout()

    return response.data
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

export const forgot = createAsyncThunk<
  ResponseInfoType & { isMailSent: boolean },
  TForgotEmail,
  {
    rejectValue: string
  }
>('auth/forgot', async (data: TForgotEmail, { rejectWithValue }) => {
  try {
    const response = await authAPI.forgot(data)

    return { ...response.data, isMailSent: true }
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  isMailSent: false,
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
        state.isRegistered = true
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.isMailSent = action.payload.isMailSent
      })
  },
})

export const { reducer: authReducer, actions: authActions } = authMeSlice
