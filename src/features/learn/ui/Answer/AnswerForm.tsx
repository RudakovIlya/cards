import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { useForm } from 'react-hook-form'

import { useLearn } from 'features/learn'
import { UpdateGradeRequestType } from 'features/pack'

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

export const AnswerForm = () => {
  const { onSubmit } = useLearn()

  const { handleSubmit, register } = useForm<UpdateGradeRequestType>()

  const radioItems = grades.map((grade, index) => (
    <FormControlLabel
      key={index}
      value={index + 1}
      control={<Radio {...register('grade')} />}
      label={grade}
    />
  ))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Rate yourself:</FormLabel>
      <RadioGroup sx={{ m: '0 0 42px 0' }} defaultValue="1">
        {radioItems}
      </RadioGroup>
      <Button sx={{ width: '100%' }} size={'large'} variant={'radius'} type={'submit'}>
        Next
      </Button>
    </form>
  )
}
