import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { addCard, deleteCard, updateCard } from 'features/pack/pack-slice'
import {
  packCardPacks,
  packCardPacksName,
  packCardUserId,
  packLoading,
  packStatus,
  pageCountParams,
} from 'features/pack/selectors'
import { useProfile } from 'features/profile'

export const usePackCards = () => {
  const { _id } = useProfile()
  const dispatch = useAppDispatch()
  const { packId } = useParams<{ packId: string }>()

  const packUserId = useAppSelector(packCardUserId)
  const packName = useAppSelector(packCardPacksName)
  const isLoading = useAppSelector(packLoading)
  const packCards = useAppSelector(packCardPacks)
  const status = useAppSelector(packStatus)
  const pageCount = useAppSelector(pageCountParams)

  const isMe = packUserId === _id

  const addNewCard = () => {
    return (data: any) => {
      dispatch(
        addCard({
          card: { cardsPack_id: packId as string, ...data },
        })
      )
    }
  }

  const removeCard = (id: string) => {
    return () => dispatch(deleteCard(id))
  }

  const updateCurrentCard = (id: string) => {
    return (data: any) =>
      dispatch(
        updateCard({
          card: { _id: id, ...data },
        })
      )
  }

  const learnCard = () => {
    console.log('learnCard')
  }

  return {
    isMe,
    status,
    packName,
    isLoading,
    packCards,
    pageCount,
    learnCard,
    addNewCard,
    removeCard,
    updateCurrentCard,
  }
}
