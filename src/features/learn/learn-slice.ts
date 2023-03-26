import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit'

import { errorUtils, getRandomCard, StatusType, ThunkAPIType } from 'common'
import { learnApi } from 'features/learn/learn-api'
import { PackType } from 'features/pack'
import { UpdateGradeRequestType, UpdateGradeResponseType } from 'features/pack/types'

type InitialStateType = {
  card: PackType
  cards: PackType[]
  status: StatusType
}

const initialState: InitialStateType = {
  card: {} as PackType,
  cards: [],
  status: 'idle',
}

export const updateGrade = createAsyncThunk<
  UpdateGradeResponseType,
  UpdateGradeRequestType,
  ThunkAPIType
>('learn/update-grade', async (data, { rejectWithValue, dispatch, getState }) => {
  const packCards = getState().learn.cards

  try {
    const response = await learnApi.updateGrade(data)

    dispatch(
      learnActions.setCard(
        getRandomCard(
          packCards.map(item => {
            const { card_id, shots, grade } = response.data.updatedGrade

            return item._id === card_id ? { ...item, shots, grade } : item
          })
        )
      )
    )

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
  },
  extraReducers: builder => {
    builder
      .addCase(updateGrade.fulfilled, (state, action) => {
        const { shots, grade, card_id } = action.payload.updatedGrade

        state.cards.forEach(card => {
          if (card_id === card._id) {
            card.shots = shots
            card.grade = grade
          }
        })
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

export const { reducer: learnReducer, actions: learnActions } = learnSlice
