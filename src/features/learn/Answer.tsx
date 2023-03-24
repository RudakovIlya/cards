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
  const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

  const { handleSubmit, register } = useForm<UpdateGradeRequestType>()

  const dispatch = useAppDispatch()

  const onSubmitHandler = (data: UpdateGradeRequestType) => {
    dispatch(updateGrade({ grade: Number(data.grade), card_id: id }))
  }

  return (
    <>
      <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column' }}>
        <span style={{ paddingBottom: 20 }}>
          <b>Answer: </b>
          {answer}
        </span>
        <br />

        <form onSubmit={handleSubmit(onSubmitHandler)} style={{ paddingBottom: 20 }}>
          <FormLabel>Rate yourself:</FormLabel>
          <RadioGroup sx={{ m: '0 0 42px 0' }} defaultValue="1">
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
            sx={{ width: '100%' }}
            size={'large'}
            variant={'radius'}
            type={'submit'}
            onClick={() => onNext()}
          >
            Next
          </Button>
        </form>
      </div>
    </>
  )
}
