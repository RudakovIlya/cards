import { memo } from 'react'

import { Card, Container } from '@mui/material'

import { TestComponent } from 'features/learn/components/TestComponent'

export const LearnCard = memo(() => {
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
        <TestComponent />
      </Card>
    </Container>
  )
})
