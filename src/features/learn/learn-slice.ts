import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit'

import { errorUtils, StatusType, ThunkAPIType } from 'common'
import { learnApi } from 'features/learn/learn-api'
import { PackType } from 'features/pack'
import { UpdateGradeRequestType, UpdateGradeResponseType } from 'features/pack/types'

type InitialStateType = {
  card: PackType
  cards: PackType[]
  status: StatusType
  isFirst: boolean
}

const initialState: InitialStateType = {
  card: {} as PackType,
  cards: [],
  status: 'idle',
  isFirst: true,
}

export const updateGrade = createAsyncThunk<
  UpdateGradeResponseType,
  UpdateGradeRequestType,
  ThunkAPIType
>('learn/update-grade', async (data, { rejectWithValue }) => {
  try {
    const response = await learnApi.updateGrade(data)

    return response.data
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

const pending = isPending(updateGrade)
const fulfilled = isFulfilled(updateGrade)
const rejected = isRejected(updateGrade)

const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<PackType>) => {
      state.card = action.payload
    },
    setLearnCards: (state, action: PayloadAction<{ cards: PackType[] }>) => {
      state.cards = action.payload.cards
    },
    setFirst: (state, action: PayloadAction<{ isFirst: boolean }>) => {
      state.isFirst = action.payload.isFirst
    },
  },
  extraReducers: builder => {
    builder
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

export const { reducer: learnReducer, actions: learnActions } = learnSlice
