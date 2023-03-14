import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'app/store'
import { errorUtils } from 'common'
import { packListAPI, PackListResponse, QueryParams } from 'features/packs-list'

type InitialStateType = {
  packList: PackListResponse
  queryParams: QueryParams
}

const initialState: InitialStateType = {
  packList: {} as PackListResponse,
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
    const params = getState().packList.queryParams
    const response = await packListAPI.getPackList(params)
    const { page, pageCount } = response.data

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
