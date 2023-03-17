import { useCallback, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { getPack, packActions } from 'features/pack/pack-slice'
import {
  packQuestionParams,
  packCardPacksTotalCount,
  pageParams,
  pageCountParams,
} from 'features/pack/selectors/selectors'

export const usePackFilters = () => {
  const { packId } = useParams<{ packId: string }>()

  // pack data
  const cardsTotalCount = useAppSelector(packCardPacksTotalCount)

  // pack query-params
  const pageParam = useAppSelector(pageParams)
  const pageCountParam = useAppSelector(pageCountParams)
  const searchValue = useAppSelector(packQuestionParams)

  const dispatch = useAppDispatch()

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
  }, [searchValue, pageParam, pageCountParam])

  useEffect(() => {
    dispatch(packActions.setQueryParams({ cardsPack_id: packId as string }))

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
