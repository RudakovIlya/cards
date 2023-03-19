import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { getPack, packActions } from 'features/pack/pack-slice'
import {
  packQuestionParams,
  pageCountParams,
  pageParams,
  sortPacksParams,
} from 'features/pack/selectors'

export const useFetchPack = () => {
  const pageParam = useAppSelector(pageParams)
  const pageCountParam = useAppSelector(pageCountParams)
  const searchValue = useAppSelector(packQuestionParams)
  const onSortCardsTable = useAppSelector(sortPacksParams)

  const dispatch = useAppDispatch()
  const { packId } = useParams<{ packId: string }>()

  useEffect(() => {
    dispatch(getPack({ cardsPack_id: packId as string }))
  }, [searchValue, pageParam, pageCountParam, onSortCardsTable])

  useEffect(() => {
    dispatch(packActions.setQueryParams({ cardsPack_id: packId as string }))

    return () => {
      dispatch(packActions.resetPackData())
    }
  }, [])
}
