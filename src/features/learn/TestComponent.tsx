import { FC, useEffect, useState } from 'react'

import { Button } from '@mui/material'

import { useAppSelector } from 'common'
import { Answer } from 'features/learn/Answer'
import { Question } from 'features/learn/Question'

type TestComponentType = {
  onNext: () => void
}
export const TestComponent: FC<TestComponentType> = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false)
  const card = useAppSelector(state => state.learn.card)

  const showButton = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    return () => {
      setIsVisible(false)
    }
  }, [card])

  return (
    <>
      <Question question={card.question} totalAttempts={card.shots} />
      {!isVisible && (
        <Button color={'primary'} size={'large'} variant={'radius'} onClick={showButton}>
          Show answer
        </Button>
      )}
      {isVisible && <Answer id={card._id} answer={card.answer} onNext={onNext} />}
    </>
  )
}
