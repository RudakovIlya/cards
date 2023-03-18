import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { appActions } from 'app/app-slice'
import { errorUtils, ThunkAPIType } from 'common'
import {
  authAPI,
  ForgotEmailDataType,
  LoginDataType,
  RegisterDataType,
  ResponseInfoType,
  ResponseProfileType,
  ResponseRegisterType,
} from 'features/auth'

export const authMe = createAsyncThunk<ResponseProfileType, void, ThunkAPIType>(
  'auth/me',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await authAPI.me()

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    } finally {
      dispatch(appActions.initialization({ isInit: true }))
    }
  }
)

export const login = createAsyncThunk<
  ResponseProfileType & { info: string },
  LoginDataType,
  ThunkAPIType
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
  ResponseRegisterType & { info: string },
  RegisterDataType,
  ThunkAPIType
>('auth/register', async (data, { rejectWithValue }) => {
  try {
    const response = await authAPI.register(data)

    return { ...response.data, info: 'You have successfully registered' }
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

export const logOut = createAsyncThunk<ResponseInfoType, void, ThunkAPIType>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.logout()

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const forgot = createAsyncThunk<
  ResponseInfoType & { isMailSent: boolean },
  ForgotEmailDataType,
  ThunkAPIType
>('auth/forgot', async (data: ForgotEmailDataType, { rejectWithValue }) => {
  try {
    const response = await authAPI.forgot(data)

    return { ...response.data, isMailSent: true }
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

export const setNewPassword = createAsyncThunk<
  ResponseInfoType,
  { password: string; resetPasswordToken: string },
  ThunkAPIType
>('auth/set-new-password', async (data, { rejectWithValue }) => {
  try {
    const response = await authAPI.setNewPassword(data)

    return response.data
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

const initialState = {
  isLoggedIn: null as boolean | null,
  isRegistered: false,
  isMailSent: false,
  isPasswordSent: false,
}

export const authMeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, state => {
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, state => {
        state.isLoggedIn = true
        state.isRegistered = false
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
      .addCase(setNewPassword.fulfilled, state => {
        state.isPasswordSent = true
      })
      .addCase(authMe.rejected, state => {
        state.isLoggedIn = false
      })
  },
})

export const { reducer: authReducer, actions: authActions } = authMeSlice
