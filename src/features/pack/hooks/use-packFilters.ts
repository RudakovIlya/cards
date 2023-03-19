import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { packActions } from 'features/pack/pack-slice'
import {
  packQuestionParams,
  packCardPacksTotalCount,
  pageParams,
  pageCountParams,
} from 'features/pack/selectors'

export const usePackFilters = () => {
  const cardsTotalCount = useAppSelector(packCardPacksTotalCount)
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
