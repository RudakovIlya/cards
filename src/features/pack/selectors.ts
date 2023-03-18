import { RootState } from 'app/store'

const minParams = (state: RootState) => state.pack.queryParams.min
const maxParams = (state: RootState) => state.pack.queryParams.max
const pageParams = (state: RootState) => state.pack.queryParams.page
const user_idParams = (state: RootState) => state.pack.queryParams.cardsPack_id
const pageCountParams = (state: RootState) => state.pack.queryParams.pageCount
const sortPacksParams = (state: RootState) => state.pack.queryParams.sortCards
const packQuestionParams = (state: RootState) => state.pack.queryParams.cardQuestion

const packPage = (state: RootState) => state.pack.pack.page
const packPageCount = (state: RootState) => state.pack.pack.pageCount
const packCardPacks = (state: RootState) => state.pack.pack.cards
const packCardPacksTotalCount = (state: RootState) => state.pack.pack.cardsTotalCount

export {
  minParams,
  maxParams,
  pageParams,
  user_idParams,
  pageCountParams,
  sortPacksParams,
  packQuestionParams,
  packPage,
  packPageCount,
  packCardPacks,
  packCardPacksTotalCount,
}
