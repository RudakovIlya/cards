import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddPackRequestType, UpdatePackRequestType } from './types'

import { RootState } from 'app/store'
import { errorUtils, getUrlParams } from 'common'
import { packListAPI, PackListResponse, QueryParams } from 'features/packs-list'

type InitialStateType = {
  packList: PackListResponse
  queryParams: QueryParams
}

const initialState: InitialStateType = {
  packList: {
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 1,
    pageCount: 7,
    cardPacks: [],
    cardPacksTotalCount: 0,
  },
  queryParams: {
    min: 0,
    max: 0,
    packName: '',
    user_id: '',
    block: false,
    page: 1,
    pageCount: 7,
    sortPacks: '0updated',
  },
}

type ThunkAPIType = {
  rejectValue: string
  state: RootState
}

export const getPackList = createAsyncThunk<PackListResponse, void, ThunkAPIType>(
  'pack-list/get-pack-list',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const parameters = getUrlParams()
      const params = getState().packList.queryParams

      const response = await packListAPI.getPackList({ ...params, ...parameters })
      const { page, pageCount, minCardsCount, maxCardsCount } = response.data

      dispatch(
        packListActions.setQueryParams({
          ...params,
          min: params.min,
          max: params.max,
          page,
          pageCount,
        })
      )

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const addPack = createAsyncThunk<void, AddPackRequestType, ThunkAPIType>(
  'pack-list/add-pack',
  async (data, { dispatch }) => {
    await packListAPI.addPack(data)

    dispatch(getPackList())
  }
)

export const updatePack = createAsyncThunk<void, UpdatePackRequestType, ThunkAPIType>(
  'pack-list/update-pack',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await packListAPI.updatePack(data)

      dispatch(getPackList())
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const deletePack = createAsyncThunk<void, string, ThunkAPIType>(
  'pack-list/delete-pack',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await packListAPI.deletePack(id)

      dispatch(getPackList())
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const packListSlice = createSlice({
  name: 'pack-list',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<Partial<QueryParams>>) => {
      state.queryParams = { ...state.queryParams, ...action.payload }
    },
    resetQueryParams: state => {
      state.queryParams = initialState.queryParams
    },
  },
  extraReducers: builder => {
    builder.addCase(getPackList.fulfilled, (state, action) => {
      state.packList = action.payload
    })
  },
})

export const { reducer: packListReducer, actions: packListActions } = packListSlice
