import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import {
  AddPackType,
  packListCardPacks,
  packListStatus,
  pageCountParams,
  UpdatePackType,
} from 'features/packs-list'
import { addPack, deletePack, updatePack } from 'features/packs-list/pack-listSlice'

export const usePackList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const cardPacks = useAppSelector(packListCardPacks)
  const status = useAppSelector(packListStatus)
  const pageCount = useAppSelector(pageCountParams)

  const navigateToCards = (id: string) => {
    return () => navigate(`/pack/${id}`)
  }

  const editPack = (id: string) => {
    return (data: Omit<UpdatePackType, '_id'>) => {
      dispatch(
        updatePack({
          cardsPack: { ...data, _id: id },
        })
      )
    }
  }

  const addNewPack = () => {
    return (data: AddPackType) => {
      dispatch(
        addPack({
          cardsPack: data,
        })
      )
    }
  }

  const removePack = (id: string) => {
    return () => dispatch(deletePack(id))
  }

  return {
    status,
    cardPacks,
    pageCount,
    editPack,
    addNewPack,
    removePack,
    navigateToCards,
  }
}
