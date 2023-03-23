import React, { FC } from 'react'

import { Button, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from 'common'
import { updateGrade } from 'features/learn/learn-slice'
import { UpdateGradeRequestType } from 'features/pack/types'

type AnswerPropsType = {
  id: string
  answer: string
  onNext: () => void
}

export const Answer: FC<AnswerPropsType> = ({ answer, onNext, id }) => {
  const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал']

  const { handleSubmit, register } = useForm<UpdateGradeRequestType>()

  const dispatch = useAppDispatch()

  const onSubmitHandler = (data: UpdateGradeRequestType) => {
    dispatch(updateGrade({ grade: Number(data.grade), card_id: id }))
  }

  return (
    <>
      <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column' }}>
        <span style={{ paddingBottom: 20 }}>
          <b>Ответ: </b>
          {answer}
        </span>
        <br />

        <form onSubmit={handleSubmit(onSubmitHandler)} style={{ paddingBottom: 20 }}>
          <FormLabel>Оправдывайся, пес:</FormLabel>
          <RadioGroup defaultValue="1">
            {grades.map((grade, index) => (
              <FormControlLabel
                key={index}
                value={index + 1}
                control={<Radio {...register('grade')} />}
                label={grade}
              />
            ))}
          </RadioGroup>
          <Button
            variant="contained"
            type={'submit'}
            sx={{
              marginTop: 2,
              backgroundColor: '#366EFF',
              borderRadius: 30,
              height: 36,
              margin: '10 auto',
              maxWidth: 373,
            }}
            onClick={() => onNext()}
          >
            Next
          </Button>
        </form>
      </div>
    </>
  )
}
