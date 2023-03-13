export type QueryParams = {
  packName: string
  min: number
  max: number
  sortPacks: `0update` | `1update`
  page: number
  pageCount: number
  user_id: string
  block: boolean
}

export type PackType = {
  _id: string
  user_id: string
  name: string
  cardsCount: number
  created: string
  updated: string
}

export type PackListResponse = {
  cardPacks: PackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type AddPackType = {
  name?: string
  deckCover?: string
  private?: boolean
}
export type AddPackRequestType = {
  cardsPack: AddPackType
}

export type UpdatePackRequestType = {
  cardsPack: {
    _id: string
    name?: string
    deckCover?: string
  }
}
