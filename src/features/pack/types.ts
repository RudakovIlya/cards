export type QueryPackParams = {
  cardQuestion: string
  cardAnswer: string
  cardsPack_id: string
  min: number
  max: number
  sortCards: 0 | 1
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
}

export type PackResponse = {
  cards: PackType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string | null
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
  cardsPack_id: string
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

export type UpdateCardRequestType = {
  card: UpdateCardType
}
