import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddCardRequestType, UpdateCardRequestType } from './types'

import { errorUtils } from 'common'
import { packAPI, PackResponse, QueryPackParams } from 'features/pack'
import { getPackList, ThunkAPIType } from 'features/packs-list/pack-listSlice'

type InitialStateType = {
  pack: PackResponse
  queryParams: QueryPackParams
  isLoading: boolean
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
  isLoading: false,
}

export const getPack = createAsyncThunk<PackResponse, { cardsPack_id: string }, ThunkAPIType>(
  'pack/get-pack',
  async (data, { rejectWithValue, getState }) => {
    const params = getState().pack.queryParams

    try {
      const response = await packAPI.getPack({ ...params, ...data })

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const addCard = createAsyncThunk<void, AddCardRequestType, ThunkAPIType>(
  'pack/add-card',
  async (data, { dispatch }) => {
    await packAPI.addCard(data)

    dispatch(getPackList())
  }
)

export const updateCard = createAsyncThunk<void, UpdateCardRequestType, ThunkAPIType>(
  'pack/update-card',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await packAPI.updateCard(data)

      dispatch(getPackList())
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const deleteCard = createAsyncThunk<void, string, ThunkAPIType>(
  'pack/delete-card',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const res = await packAPI.deleteCard(id)
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

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
    builder
      .addCase(getPack.pending, state => {
        state.isLoading = true
      })
      .addCase(getPack.fulfilled, (state, action) => {
        state.pack = action.payload
        state.isLoading = false
      })
  },
})

export const { reducer: PackReducer, actions: packActions } = packSlice
