import { useCallback, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { addCard, getPack, packActions } from 'features/pack/pack-slice'
import {
  packQuestionParams,
  packCardPacksTotalCount,
  user_idParams,
  pageParams,
  pageCountParams,
} from 'features/pack/selectors/selectors'
import { useProfile } from 'features/profile'

export const usePackFilters = () => {
  const { packId } = useParams<{ packId: string }>()

  // pack data
  const cardsTotalCount = useAppSelector(packCardPacksTotalCount)

  // pack query-params
  const pageParam = useAppSelector(pageParams)
  const pageCountParam = useAppSelector(pageCountParams)
  const user_id = useAppSelector(user_idParams)
  const searchValue = useAppSelector(packQuestionParams)

  const dispatch = useAppDispatch()
  const addNewCard = () => {
    dispatch(
      addCard({
        card: {
          cardsPack_id: packId as string,
          question: 'Will u be my slave?',
          answer: 'Of course',
        },
      })
    )
    console.log('addNewCard')
  }
  const onSearchChange = useCallback((search: string) => {
    dispatch(packActions.setQueryParams({ cardQuestion: search }))
  }, [])

  const onChangePagination = useCallback((page: number) => {
    dispatch(packActions.setQueryParams({ page }))
  }, [])

  const onChangePageCount = useCallback((pageCount: number) => {
    dispatch(packActions.setQueryParams({ pageCount }))
  }, [])

  useEffect(() => {
    dispatch(getPack({ cardsPack_id: packId as string }))
  }, [searchValue, user_id, pageParam, pageCountParam])

  useEffect(() => {
    return () => {
      dispatch(packActions.resetPackData())
    }
  }, [])

  return {
    pageParam,
    pageCountParam,
    cardsTotalCount,
    searchValue,
    onSearchChange,
    onChangePageCount,
    onChangePagination,
  }
}
