import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useLearn } from 'features/learn/hooks/use-learn'

export const Question = () => {
  const { card } = useLearn()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ marginBottom: 1.5 }}>
        <b>Question: </b> {card.question}
      </Typography>
      <Typography sx={{ opacity: 0.5, marginBottom: 3.7 }}>
        Number of answers to the question: <b>{card.shots}</b>
      </Typography>
    </Box>
  )
}
