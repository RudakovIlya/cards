import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { addCard, deleteCard, updateCard } from 'features/pack/pack-slice'
import { useProfile } from 'features/profile'

export const usePackCards = () => {
  const { _id } = useProfile()
  const dispatch = useAppDispatch()
  const { packId } = useParams<{ packId: string }>()

  const packUserId = useAppSelector(state => state.pack.pack.packUserId)
  const packName = useAppSelector(state => state.pack.pack.packName)
  const isLoading = useAppSelector(state => state.pack.isLoading)
  const packCards = useAppSelector(state => state.pack.pack.cards)
  const status = useAppSelector(state => state.pack.status)

  const isMe = packUserId === _id

  const addNewCard = () => {
    dispatch(
      addCard({
        card: { cardsPack_id: packId as string, question: 'Жоский вопрос ' + (Math.random() + 13) },
      })
    )
  }

  const removeCard = (id: string) => {
    return () => dispatch(deleteCard(id))
  }

  const updateCurrentCard = (id: string) => {
    return () =>
      dispatch(
        updateCard({
          card: { _id: id, question: 'Новый вопрос от жостких ' + (Math.random() + 15) },
        })
      )
  }

  const learnCard = () => {
    console.log('learnCard')
  }

  return {
    isMe,
    packName,
    isLoading,
    addNewCard,
    learnCard,
    removeCard,
    packCards,
    updateCurrentCard,
    status,
  }
}
