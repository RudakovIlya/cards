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
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
  questionImg: string
  answerImg: string
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
  // cardsPack_id: string
  // answer?: string
  // grade?: number
  // shots?: number
  // answerImg?: string
  // questionImg?: string
  // questionVideo?: string
  // answerVideo?: string
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
