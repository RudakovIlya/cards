import { useEffect, useState } from 'react'

import { Button } from '@mui/material'

import { Answer } from 'features/learn/components/Answer/Answer'
import { Question } from 'features/learn/components/Question/Question'

export const CardContent = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showButton = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    return () => {
      setIsVisible(false)
    }
  }, [])

  return (
    <>
      <Question />
      {!isVisible && (
        <Button color={'primary'} size={'large'} variant={'radius'} onClick={showButton}>
          Show answer
        </Button>
      )}
      {isVisible && <Answer />}
    </>
  )
}
