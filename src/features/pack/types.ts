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
