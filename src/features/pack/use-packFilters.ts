import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { getPack, packActions } from 'features/pack/pack-slice'
import { useProfile } from 'features/profile'

export const usePackFilters = () => {
  const { packId } = useParams<{ packId: string }>()
  const dispatch = useAppDispatch()
  const { _id } = useProfile()
  const packTitle = useAppSelector(state => state.pack.packName)
  const packUserId = useAppSelector(state => state.pack.packUserId)

  const isMe = packUserId === _id

  const addNewCard = () => {
    console.log('addNewCard')
  }

  const learnCard = () => {
    console.log('learnCard')
  }

  useEffect(() => {
    dispatch(getPack({ cardsPack_id: packId }))

    return () => {
      dispatch(packActions.resetPackData())
    }
  }, [])

  return {
    packTitle,
    isMe,
    addNewCard,
    learnCard,
  }
}
