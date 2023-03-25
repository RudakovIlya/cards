import { FC } from 'react'

type QuestionPropsType = {
  question: string
  totalAttempts: number
}

export const Question: FC<QuestionPropsType> = ({ question, totalAttempts }) => {
  return (
    <div style={{ paddingTop: 5, display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom: 10 }}>
        <b>Question: </b> {question}
      </span>
      <span style={{ fontSize: 14, color: 'lightgray', marginBottom: 10 }}>
        Number of answers to the question: <b>{totalAttempts}</b>
      </span>
    </div>
  )
}
