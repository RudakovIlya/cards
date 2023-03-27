export type ModalStateType = {
  isShowDeleteModal: boolean
  isShowEditModal: boolean
  isShowAddedModal: boolean
}

export type ModalDataType = {
  _id: string
  name: string
  packName: string
  question: string
  answer: string
  deckCover: string
  answerImg: string
  questionImg: string
}
