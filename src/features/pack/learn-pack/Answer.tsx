import React, { FC } from 'react'

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

type AnswerPropsType = {
  answer: string
  onNext: () => void
}

export const Answer: FC<AnswerPropsType> = ({ answer, onNext }) => {
  const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал']

  return (
    <>
      <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column' }}>
        <span style={{ paddingBottom: 20 }}>
          <b>Ответ: </b>
          {answer}
        </span>
        <br />

        <FormControl style={{ paddingBottom: 20 }}>
          <FormLabel>Оправдывайся, пес:</FormLabel>
          <RadioGroup>
            {grades.map((grade, index) => (
              <FormControlLabel key={index} value={grade} control={<Radio />} label={grade} />
            ))}
          </RadioGroup>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: '#366EFF',
              borderRadius: 30,
              height: 36,
              margin: '10 auto',
              maxWidth: 373,
            }}
            // onClick={() => onNext()}
          >
            Next
          </Button>
        </FormControl>
      </div>
    </>
  )
}
