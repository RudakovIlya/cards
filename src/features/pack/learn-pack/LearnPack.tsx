import React, { useEffect, useState } from 'react'

import { Button, Card, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'

import { Answer } from './Answer'
import { Question } from './Question'

import { NavigationToBack, useAppDispatch } from 'common'
import { useFetchPack, usePackCards, PackType } from 'features/pack'

export const LearnPack = () => {
  const { packName, packCards } = usePackCards()
  const { packId } = useParams<{ packId: string }>()

  const [isVisible, setIsVisible] = useState(false)
  const [first, setFirst] = useState<boolean>(true)
  const [card, setCard] = useState<PackType>({
    answer: 'Who, who, who, who!',
    question: 'Who let the dogs out?',
    cardsPack_id: 'dog',
    grade: 5,
    shots: 1,
    user_id: 'mad_dog',
    created: 'today',
    updated: 'tomorrow',
    _id: 'fake',
  })

  const getCard = (cards: PackType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0)
    const rand = Math.random() * sum
    const res = cards.reduce(
      (acc: { sum: number; id: number }, card, i) => {
        const newSum = acc.sum + (6 - card.grade) * (6 - card.grade)

        return { sum: newSum, id: newSum < rand ? i : acc.id }
      },
      { sum: 0, id: -1 }
    )

    console.log('test: ', sum, rand, res)

    return cards[res.id + 1]
  }

  const dispatch = useAppDispatch()

  useFetchPack()

  const showButton = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (first) {
      setFirst(false)
    }

    console.log('cards', packCards)
    if (packCards.length > 0) setCard(getCard(packCards))

    return () => {
      console.log('LearnContainer useEffect off')
    }
  }, [dispatch, packId, packCards, first])

  const onNext = () => {
    if (packCards.length > 0) {
      setCard(getCard(packCards))
    }
  }

  return (
    <>
      <NavigationToBack />
      <Typography
        sx={{ flex: '0 0 25%', marginBottom: 2 }}
        variant={'h2'}
        fontSize={22}
        fontWeight={600}
        textAlign={'center'}
      >
        {packName}
      </Typography>
      <Container>
        <Card
          variant="outlined"
          sx={{
            width: 439,
            minHeight: 204,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 5,
          }}
        >
          <Question question={card.question} />
          {!isVisible && (
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: '#366EFF',
                borderRadius: 30,
                height: 36,
                margin: '10 auto',
                maxWidth: 373,
                display: 'flex',
              }}
              onClick={() => showButton()}
            >
              Показать ответ
            </Button>
          )}
          {isVisible && <Answer answer={card.answer} onNext={onNext} />}
        </Card>
      </Container>
    </>
  )
}
