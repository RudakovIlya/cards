import { useCallback } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { addCard, deleteCard, updateCard } from 'features/pack/pack-slice'
import {
  packCardPacks,
  packCardPacksName,
  packCardPacksTotalCount,
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
  const totalCount = useAppSelector(packCardPacksTotalCount)
  const isMe = packUserId === _id
  const navigate = useNavigate()

  const navigateToLearn = (packId: string | undefined) => navigate(`/pack/learn/${packId}`)

  const addNewCard = useCallback(() => {
    return (data: any) => {
      dispatch(
        addCard({
          card: { cardsPack_id: packId as string, ...data },
        })
      )
    }
  }, [])

  const removeCard = useCallback((id: string) => {
    return () => dispatch(deleteCard(id))
  }, [])

  const updateCurrentCard = useCallback((id: string) => {
    return (data: any) =>
      dispatch(
        updateCard({
          card: { _id: id, ...data },
        })
      )
  }, [])

  const learnToPack = () => {
    navigateToLearn(packId)
  }

  return {
    isMe,
    status,
    packName,
    isLoading,
    packCards,
    pageCount,
    totalCount,
    learnToPack,
    addNewCard,
    removeCard,
    updateCurrentCard,
  }
}
