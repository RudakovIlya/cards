import { RootState } from 'app/store'

// query-params
const minParams = (state: RootState) => state.packList.queryParams.min
const maxParams = (state: RootState) => state.packList.queryParams.max
const pageParams = (state: RootState) => state.packList.queryParams.page
const pageCountParams = (state: RootState) => state.packList.queryParams.pageCount
const sortPacksParams = (state: RootState) => state.packList.queryParams.sortPacks
const packNameParams = (state: RootState) => state.packList.queryParams.packName
const user_idParams = (state: RootState) => state.packList.queryParams.user_id

// packList data
const packListPage = (state: RootState) => state.packList.packList.page
const packListPageCount = (state: RootState) => state.packList.packList.pageCount
const packListMinCardsCount = (state: RootState) => state.packList.packList.minCardsCount
const packListMaxCardsCount = (state: RootState) => state.packList.packList.maxCardsCount
const packListCardPacksTotalCount = (state: RootState) =>
  state.packList.packList.cardPacksTotalCount
const packListCardPacks = (state: RootState) => state.packList.packList.cardPacks
const packListStatus = (state: RootState) => state.packList.status

export {
  // Params
  minParams,
  maxParams,
  pageParams,
  pageCountParams,
  sortPacksParams,
  packNameParams,
  user_idParams,
  packListStatus,
  // Data
  packListPage,
  packListPageCount,
  packListMinCardsCount,
  packListMaxCardsCount,
  packListCardPacksTotalCount,
  packListCardPacks,
}
