import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { AnswerForm, useLearn } from 'features/learn'

export const Answer = () => {
  const { card } = useLearn()

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          component={'span'}
          sx={{ paddingBottom: 2, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <b>Answer:&nbsp;</b>
          {card.answerImg ? (
            <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={card.answerImg} />
          ) : (
            card.answer
          )}
        </Typography>
        <AnswerForm />
      </Box>
    </>
  )
}
