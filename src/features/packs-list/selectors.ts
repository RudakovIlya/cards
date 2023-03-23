import { RootState } from 'app/store'

// query-params
export const minParams = (state: RootState) => state.packList.queryParams.min
export const maxParams = (state: RootState) => state.packList.queryParams.max
export const pageParams = (state: RootState) => state.packList.queryParams.page
export const pageCountParams = (state: RootState) => state.packList.queryParams.pageCount
export const sortPacksParams = (state: RootState) => state.packList.queryParams.sortPacks
export const packNameParams = (state: RootState) => state.packList.queryParams.packName
export const user_idParams = (state: RootState) => state.packList.queryParams.user_id

// packList data
export const packListPage = (state: RootState) => state.packList.packList.page
export const packListPageCount = (state: RootState) => state.packList.packList.pageCount
export const packListMinCardsCount = (state: RootState) => state.packList.packList.minCardsCount
export const packListMaxCardsCount = (state: RootState) => state.packList.packList.maxCardsCount
export const packListCardPacksTotalCount = (state: RootState) =>
  state.packList.packList.cardPacksTotalCount
export const packListCardPacks = (state: RootState) => state.packList.packList.cardPacks
export const packListStatus = (state: RootState) => state.packList.status
