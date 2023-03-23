import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

import { UpdateGradeRequestType } from '../types'

import { learnApi } from './learn-api'

import { errorUtils } from 'common'
import { PackType } from 'features/pack'
import { ThunkAPIType } from 'features/packs-list/pack-listSlice'

type InitialStateType = {
  card: PackType
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: InitialStateType = {
  card: {} as PackType,
  status: 'idle',
}

export const updateGrade = createAsyncThunk<void, UpdateGradeRequestType, ThunkAPIType>(
  'learn/updateGrade',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await learnApi.updateGrade(data)
      dispatch(updateGrade(data))
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

const pending = isPending(updateGrade)
const fulfilled = isFulfilled(updateGrade)
const rejected = isRejected(updateGrade)

const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    updateGrade(state, action) {
      state.card.grade = action.payload
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

export default learnSlice.reducer
export const { reducer: learnReducer, actions: learnActions } = learnSlice
