import { Button, Card, Container } from '@mui/material'

import { Answer } from 'features/learn/Answer'
import { useRandomCard } from 'features/learn/hooks/use-random-card'
import { Question } from 'features/learn/Question'

export const LearnCard = () => {
  const { card, showButton, onNext, isVisible } = useRandomCard()

  return (
    <Container>
      <Card
        variant="outlined"
        sx={{
          width: 439,
          minHeight: 204,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          padding: 5,
        }}
      >
        <Question question={card.question} totalAttempts={card.shots} />
        {!isVisible && (
          <Button color={'primary'} size={'large'} variant={'radius'} onClick={showButton}>
            Показать ответ
          </Button>
        )}
        {isVisible && <Answer id={card._id} answer={card.answer} onNext={onNext} />}
      </Card>
    </Container>
  )
}
