import React, { useEffect, useState } from 'react'

import { Button, Card, Container } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { useNavigate, useParams } from 'react-router-dom'

import { Answer } from './Answer'
import { Question } from './Question'

import { NavigationToBack, paths, SubHeader, useAppDispatch } from 'common'
import { useFetchPack, usePackCards, FilterPanels, PackType, getPack } from 'features/pack'

// const navigate = useNavigate()
// const returnToPackList = () => navigate(paths.PACK_LIST)

export const LearnPack = () => {
  const { packName, packCards } = usePackCards()
  const { packId } = useParams<{ packId: string }>()

  const [isVisible, setIsVisible] = useState(false)
  const [first, setFirst] = useState<boolean>(true)
  const [card, setCard] = useState<PackType>({
    answer: 'Do not know',
    question: 'Will you marry me?',
    cardsPack_id: 'fake',
    grade: 3,
    shots: 2,
    user_id: 'fakeid',
    created: 'today',
    updated: 'tomorrow',
    _id: 'fakeeeee',
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

  // const { packId } = useParams<{ packId: string }>()
  //
  // useEffect(() => {
  //   dispatch(getPack({ cardsPack_id: packId as string }))
  // }, [])

  const dispatch = useAppDispatch()

  useFetchPack()

  const showButton = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (first) {
      // @ts-ignore
      dispatch(getPack(packId))
      setFirst(false)
    }

    console.log('cards', packCards)
    if (packCards.length > 0) setCard(getCard(packCards))

    return () => {
      console.log('LearnContainer useEffect off')
    }
  }, [dispatch, packId, packCards, first])

  const onNext = () => {
    setIsVisible(false)

    if (packCards.length > 0) {
      // dispatch
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
/*  return (
    <div>
      LearnPage
      <div>{card.question}</div>
      <div>
        <Button onClick={() => setIsVisible(true)}>check</Button>
      </div>
      {isVisible && (
        <>
          <div>{card.answer}</div>

          {grades.map((g, i) => (
            <Button key={'grade-' + i} onClick={() => {}}>
              {g}
            </Button>
          ))}

          <div>
            <Button onClick={onNext}>next</Button>
          </div>
        </>
      )}
    </div>
  )
}*/

/* ======== IGNAT  ======== */

/*
const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал']

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
*/

/*const LearnPageIgnatus = () => {
  const [first, setFirst] = useState<boolean>(true)
  // const [first, setFirst] = useState<boolean>(0);
  const { cards } = useSelector((store: AppStoreType) => store.cards)
  const { id } = useParams()

  useEffect(() => {
    console.log('LearnContainer useEffect')

    if (first) {
      dispatch(getCards(id))
      setFirst(false)
    }

    console.log('cards', cards)
    if (cards.length > 0) setCard(getCard(cards))

    return () => {
      console.log('LearnContainer useEffect off')
    }
  }, [dispatch, id, cards, first])

  const onNext = () => {
    setIsChecked(false)

    if (cards.length > 0) {
      // dispatch
      setCard(getCard(cards))
    } else {
    }
  }

  return (
    <div>
      LearnPage
      <div>{card.question}</div>
      <div>
        <ButtonNya onClick={() => setIsChecked(true)}>check</ButtonNya>
      </div>
      {isChecked && (
        <>
          <div>{card.answer}</div>

          {grades.map((g, i) => (
            <ButtonNya key={'grade-' + i} onClick={() => {}}>
              {g}
            </ButtonNya>
          ))}

          <div>
            <ButtonNya onClick={onNext}>next</ButtonNya>
          </div>
        </>
      )}
    </div>
  )
}*/
