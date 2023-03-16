import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { errorUtils } from 'common'
import { packAPI, PackResponse, QueryPackParams } from 'features/pack'
import { ThunkAPIType } from 'features/packs-list/pack-listSlice'

export const getPack = createAsyncThunk<PackResponse, Partial<QueryPackParams>, ThunkAPIType>(
  'pack/get-pack',
  async (data = {}, { rejectWithValue }) => {
    try {
      const response = await packAPI.getPack(data)

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

type InitialStateType = {
  pack: PackResponse
  queryParams: QueryPackParams
}

const initialState: InitialStateType = {
  pack: {
    packUserId: '',
    cards: [],
    page: 0,
    pageCount: 7,
    minGrade: 0,
    maxGrade: 0,
    cardsTotalCount: 100,
    packName: '',
  },
  queryParams: {
    min: 0,
    max: 0,
    cardQuestion: '',
    cardsPack_id: '',
    page: 0,
    pageCount: 7,
    sortCards: '0updated',
    cardAnswer: '',
  },
}

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<Partial<QueryPackParams>>) => {
      state.queryParams = { ...state.queryParams, ...action.payload }
    },
    resetPackData: () => {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(getPack.fulfilled, (state, action) => {
      state.pack = action.payload
    })
  },
})

export const { reducer: PackReducer, actions: packActions } = packSlice
