import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { AnswerForm } from 'features/learn/components/Answer/AnswerForm'
import { useLearn } from 'features/learn/hooks/use-learn'

export const Answer = () => {
  const { card } = useLearn()

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography component={'span'} sx={{ paddingBottom: 2 }}>
          <b>Answer: </b>
          {card.answer}
        </Typography>
        <AnswerForm />
      </Box>
    </>
  )
}
