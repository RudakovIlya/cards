import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit'

import { AddCardRequestType, UpdateCardRequestType } from './types'

import { errorUtils } from 'common'
import { packAPI, PackResponse, QueryPackParams } from 'features/pack'
import { ThunkAPIType } from 'features/packs-list/pack-listSlice'

type InitialStateType = {
  pack: PackResponse
  queryParams: QueryPackParams
  isLoading: boolean
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
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
  status: 'idle',
}

export const getPack = createAsyncThunk<PackResponse, { cardsPack_id: string }, ThunkAPIType>(
  'pack/get-pack',
  async (id, { rejectWithValue, getState }) => {
    const params = getState().pack.queryParams

    try {
      const response = await packAPI.getPack({ ...params, ...id })

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const addCard = createAsyncThunk<void, AddCardRequestType, ThunkAPIType>(
  'pack/add-card',
  async (data, { dispatch, getState, rejectWithValue }) => {
    const cardsPack_id = getState().pack.queryParams.cardsPack_id

    try {
      await packAPI.addCard(data)

      dispatch(getPack({ cardsPack_id }))
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const updateCard = createAsyncThunk<void, UpdateCardRequestType, ThunkAPIType>(
  'pack/update-card',
  async (data, { rejectWithValue, dispatch, getState }) => {
    const cardsPack_id = getState().pack.queryParams.cardsPack_id

    try {
      await packAPI.updateCard(data)
      dispatch(getPack({ cardsPack_id }))
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const deleteCard = createAsyncThunk<void, string, ThunkAPIType>(
  'pack/delete-card',
  async (id: string, { rejectWithValue, dispatch, getState }) => {
    const cardsPack_id = getState().pack.queryParams.cardsPack_id

    try {
      await packAPI.deleteCard(id)
      dispatch(getPack({ cardsPack_id }))
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

const pending = isPending(getPack, addCard, updateCard, deleteCard)
const fulfilled = isFulfilled(getPack, addCard, updateCard, deleteCard)
const rejected = isRejected(getPack, addCard, updateCard, deleteCard)

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
      .addCase(getPack.fulfilled, (state, action) => {
        state.pack = action.payload
        state.isLoading = false
        state.status = 'succeeded'
      })
      .addMatcher(pending, state => {
        state.status = 'loading'
      })
      .addMatcher(fulfilled, state => {
        state.status = 'succeeded'
      })
      .addMatcher(rejected, state => {
        state.status = 'failed'
      })
  },
})

export const { reducer: PackReducer, actions: packActions } = packSlice
