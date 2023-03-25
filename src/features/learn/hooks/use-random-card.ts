import { useEffect } from 'react'

import { getRandomCard, useAppDispatch, useAppSelector } from 'common'
import { learnActions } from 'features/learn/learn-slice'
import { learnCards } from 'features/learn/selectors'
import { packStatus } from 'features/pack/selectors'

export const useRandomCard = () => {
  const packCards = useAppSelector(learnCards)
  const status = useAppSelector(packStatus)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (packCards.length > 0 && status === 'succeeded') {
      dispatch(learnActions.setCard(getRandomCard(packCards)))
    }
  }, [dispatch, status])
}
