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
    sortPacks: '1name',
  },
}

export const getPackList = createAsyncThunk<
  PackListResponse,
  void,
  {
    rejectValue: string
    state: RootState
  }
>('pack-list/get-pack-list', async (_, { rejectWithValue, getState, dispatch }) => {
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
})

export const addPack = createAsyncThunk<any, AddPackRequestType>(
  'pack-list/add-pack',
  async data => {
    const response = await packListAPI.addPack(data)

    return response.data
  }
)
export const updatePack = createAsyncThunk<
  any,
  UpdatePackRequestType,
  {
    state: RootState
  }
>('pack-list/update-pack', async (data, { getState }) => {
  const currentPack = getState().packList.packList.cardPacks.find(
    pack => pack._id === data.cardsPack._id
  )

  console.log(currentPack)
  const response = await packListAPI.updatePack(data)

  return response.data
})

export const deletePack = createAsyncThunk<
  any,
  string,
  {
    rejectValue: string
  }
>('pack-list/delete-pack', async (id, { rejectWithValue }) => {
  try {
    const response = await packListAPI.deletePack(id)

    return { data: response.data, id }
  } catch (e) {
    const error = errorUtils(e)

    return rejectWithValue(error)
  }
})

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
    builder
      .addCase(getPackList.fulfilled, (state, action) => {
        state.packList = action.payload
      })
      .addCase(deletePack.fulfilled, (state, action) => {
        const packIndex = state.packList.cardPacks.findIndex(pack => pack._id === action.payload.id)

        state.packList.cardPacks.splice(packIndex, 1)
      })
  },
})

export const { reducer: packListReducer, actions: packListActions } = packListSlice
