import React, { FC, useState } from 'react'

import { useFetchPack } from '../hooks/use-fetch-pack'
import { usePackCards } from '../hooks/use-pack-cards'

type QuestionPropsType = {
  question: string
}

export const Question: FC<QuestionPropsType> = ({ question }) => {
  const { packCards } = usePackCards()

  // useFetchPack()

  console.log(packCards)

  return (
    <div style={{ paddingTop: 5, display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom: 10 }}>
        <b>Вопрос: </b> {question}
      </span>
      <span style={{ fontSize: 14, color: 'lightgray', marginBottom: 10 }}>
        Количество попыток ответов на вопрос: <b>10</b>
      </span>
    </div>
  )
}
