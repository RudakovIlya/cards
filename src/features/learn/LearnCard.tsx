import { memo } from 'react'

import { Card, Container } from '@mui/material'

import { useRandomCard } from 'features/learn/hooks/use-random-card'
import { TestComponent } from 'features/learn/TestComponent'

export const LearnCard = memo(() => {
  const { onNext } = useRandomCard()

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
        <TestComponent onNext={onNext} />
      </Card>
    </Container>
  )
})
