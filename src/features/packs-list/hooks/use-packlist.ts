import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { packListCardPacks, packListStatus, pageCountParams } from 'features/packs-list'
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
    return () =>
      dispatch(
        updatePack({
          cardsPack: { name: `New Name(Жоские) New TestModal`, _id: id, deckCover: '' },
        })
      )
  }

  const addNewPack = () => {
    dispatch(
      addPack({
        cardsPack: {
          name: 'New Pack (Жоские) ' + (Math.random() + 10),
          deckCover: '',
          private: false,
        },
      })
    )
  }

  const removePack = (id: string) => {
    console.log(id)

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
