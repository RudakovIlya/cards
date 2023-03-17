import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { deletePack, updatePack } from 'features/packs-list/pack-listSlice'
import {
  packListCardPacks,
  packListStatus,
  pageCountParams,
} from 'features/packs-list/selectors/selectors'

export const usePackList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const cardPacks = useAppSelector(packListCardPacks)
  const status = useAppSelector(packListStatus)
  const pageCount = useAppSelector(pageCountParams)
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

  return {
    status,
    cardPacks,
    pageCount,
    onClickNavigateToCardsHandler,
    onClickEditPackHandler,
    onClickDeletePackHandler,
  }
}
