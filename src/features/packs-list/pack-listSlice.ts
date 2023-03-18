import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit'

import { RootState } from 'app/store'
import { errorUtils } from 'common'
import {
  packListAPI,
  PackListResponseType,
  QueryParams,
  AddPackRequestType,
  UpdatePackRequestType,
} from 'features/packs-list'

type InitialStateType = {
  packList: PackListResponseType
  queryParams: QueryParams
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: InitialStateType = {
  packList: {
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 0,
    pageCount: 7,
    cardPacks: [],
    cardPacksTotalCount: 100,
  },
  queryParams: {
    min: 0,
    max: 0,
    packName: '',
    user_id: '',
    block: false,
    page: 0,
    pageCount: 7,
    sortPacks: '0updated',
  },
  status: 'idle',
}

export type ThunkAPIType = {
  rejectValue: string
  state: RootState
}

export const getPackList = createAsyncThunk<PackListResponseType, void, ThunkAPIType>(
  'pack-list/get-pack-list',
  async (_, { rejectWithValue, getState }) => {
    try {
      const params = getState().packList.queryParams
      const response = await packListAPI.getPackList({ ...params })

      return response.data
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
  }
)

export const addPack = createAsyncThunk<void, AddPackRequestType, ThunkAPIType>(
  'pack-list/add-pack',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await packListAPI.addPack(data)

      dispatch(getPackList())
    } catch (e) {
      const error = errorUtils(e)

      return rejectWithValue(error)
    }
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

const pending = isPending(getPackList, addPack, updatePack, deletePack)
const fulfilled = isFulfilled(getPackList)
const rejected = isRejected(getPackList, addPack, updatePack, deletePack)

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
        state.status = 'succeeded'
      })
      .addCase(getPackList.rejected, state => {
        state.status = 'failed'
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

export const { reducer: packListReducer, actions: packListActions } = packListSlice
