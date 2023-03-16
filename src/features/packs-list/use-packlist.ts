import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { deletePack, updatePack } from 'features/packs-list/pack-listSlice'

export const usePackList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClickNavigateToCardsHandler = (id: string) => {
    return () => navigate(`/pack/${id}`)
  }

  const onClickEditPackHandler = (id: string) => {
    return () =>
      dispatch(
        updatePack({
          cardsPack: { name: `New Name(Жоские) ${Math.random()}`, _id: id, deckCover: '' },
        })
      )
  }

  const onClickDeletePackHandler = (id: string) => {
    return () => dispatch(deletePack(id))
  }
  const cardPacks = useAppSelector(state => state.packList.packList.cardPacks)

  return {
    cardPacks,
    onClickNavigateToCardsHandler,
    onClickEditPackHandler,
    onClickDeletePackHandler,
  }
}
