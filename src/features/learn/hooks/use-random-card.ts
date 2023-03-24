import { useCallback, useEffect } from 'react'

import { getRandomCard, useAppDispatch, useAppSelector } from 'common'
import { learnActions } from 'features/learn/learn-slice'

export const useRandomCard = () => {
  const packCards = useAppSelector(state => state.learn.cards)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (packCards.length > 0) {
      dispatch(learnActions.setCard(getRandomCard(packCards)))
    }
  }, [])

  const onNext = useCallback(() => {
    if (packCards.length > 0) {
      dispatch(learnActions.setCard(getRandomCard(packCards)))
    }
  }, [])

  return { onNext }
}
