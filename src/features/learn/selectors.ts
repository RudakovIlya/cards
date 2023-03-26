import { RootState } from 'app/store'

export const learnCard = (state: RootState) => state.learn.card
export const learnCards = (state: RootState) => state.learn.cards
export const learnPageStatus = (state: RootState) => state.learn.status
