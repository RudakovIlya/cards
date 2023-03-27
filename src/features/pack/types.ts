export type QueryPackParams = {
  cardQuestion: string
  cardAnswer: string
  cardsPack_id: string
  min: number
  max: number
  sortCards: string
  page: number
  pageCount: number
}

export type PackType = {
  _id: string
  answer: string
  question: string
  questionImg: string
  answerImg: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  cardsPack_id: string
}

export type PackResponse = {
  cards: PackType[]
  packName: string
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
  packDeckCover: string
}

export type AddCardRequestType = {
  card: AddCardType
}

export type AddCardType = {
  cardsPack_id: string
  question?: string
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type UpdateCardType = {
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
  _id: string
  question: string
}

export type UpdateGradeRequestType = {
  grade: number
  card_id: string
}
export type UpdateGradeResponseType = {
  updatedGrade: {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
  }
}

export type UpdateCardRequestType = {
  card: UpdateCardType
}
