import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { errorUtils } from 'common'
import { packListAPI, PackListResponse, QueryParams } from 'features/packs-list'

export const getPackList = createAsyncThunk<
  PackListResponse,
  Partial<QueryParams>,
  {
    rejectValue: string
  }
>('pack-list/get-pack-list', async (data = {}, { rejectWithValue }) => {
  try {
    const response = await packListAPI.getPackList(data)

    return response.data
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

const initialState = {} as PackListResponse

export const packListSlice = createSlice({
  name: 'pack-list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPackList.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const { reducer: packListReducer } = packListSlice
