import { useEffect, useState } from 'react'

import { Button } from '@mui/material'

import { Question, Answer } from 'features/learn'

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
