import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useLearn } from 'features/learn'

export const Question = () => {
  const { card } = useLearn()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{ marginBottom: 1.5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <b>Question:&nbsp;</b>
        {card.questionImg ? (
          <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={card.questionImg} />
        ) : (
          card.question
        )}
      </Typography>
      <Typography sx={{ opacity: 0.5, marginBottom: 3.7 }}>
        Number of answers to the question:&nbsp;<b>{card.shots}</b>
      </Typography>
    </Box>
  )
}
