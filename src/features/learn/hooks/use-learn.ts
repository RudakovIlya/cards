import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { updateGrade } from 'features/learn/learn-slice'
import { learnCard } from 'features/learn/selectors'
import { UpdateGradeRequestType } from 'features/pack'

export const useLearn = () => {
  const card = useAppSelector(learnCard)

  const dispatch = useAppDispatch()

  const onSubmit = useCallback((data: UpdateGradeRequestType) => {
    dispatch(updateGrade({ grade: Number(data.grade), card_id: card._id }))
  }, [])

  return { card, onSubmit }
}
