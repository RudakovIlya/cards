import { useEffect, useState } from 'react'

import { getRandomCard, useAppDispatch, useAppSelector } from 'common'
import { learnActions } from 'features/learn/learn-slice'
import { usePackCards } from 'features/pack'

export const useRandomCard = () => {
  const [isVisible, setIsVisible] = useState(false)

  const { packCards } = usePackCards()

  const card = useAppSelector(state => state.learn.card)
  const first = useAppSelector(state => state.learn.isFirst)
  const dispatch = useAppDispatch()

  const showButton = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (first) {
      dispatch(learnActions.setFirst({ isFirst: false }))
    }

    return () => {
      setIsVisible(false)
    }
  }, [])

  const onNext = () => {
    if (packCards.length > 0) {
      dispatch(learnActions.setCard(getRandomCard(packCards)))
    }
  }

  return { isVisible, onNext, showButton, card }
}
