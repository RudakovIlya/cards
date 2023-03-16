import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { errorUtils } from 'common'
import { packAPI, PackResponse, QueryPackParams } from 'features/pack'

export const getPack = createAsyncThunk<
  PackResponse,
  Partial<QueryPackParams>,
  {
    rejectValue: string
  }
>('pack/get-pack', async (data = {}, { rejectWithValue }) => {
  try {
    const response = await packAPI.getPack(data)

    return response.data
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

const initialState: PackResponse = {
  packUserId: '',
  cards: [],
  page: 0,
  pageCount: 7,
  minGrade: 0,
  maxGrade: 0,
  cardsTotalCount: 100,
  packName: '',
} as PackResponse

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    resetPackData: () => {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(getPack.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const { reducer: PackReducer, actions: packActions } = packSlice
