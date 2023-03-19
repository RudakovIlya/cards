export type QueryParams = {
  packName: string
  min: number
  max: number
  sortPacks: string
  page: number
  pageCount: number
  user_id: string
  block: boolean
}

export type PackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  deckCover: string
  cardsCount: number
  created: string
  updated: string
}

export type PackListResponseType = {
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

export type UpdatePackType = {
  _id: string
  name?: string
  deckCover?: string
}

export type UpdatePackRequestType = {
  cardsPack: UpdatePackType
}

export type DeleteResponseType = {
  deletedCardsPack: PackType
}

export type UpdateResponseType = {
  updatedCardsPack: PackType
}

export type ModalStateType = {
  isShowDeleteModal: boolean
  isShowEditModal: boolean
  isShowAddedModal: boolean
}

export type ModalDataType = {
  modalData: PackType
  modalState: ModalStateType
}

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
