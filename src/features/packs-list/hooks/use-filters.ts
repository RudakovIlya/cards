import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import {
  maxParams,
  minParams,
  packListCardPacksTotalCount,
  packListMaxCardsCount,
  packListMinCardsCount,
  packListPage,
  packListPageCount,
  packNameParams,
  pageCountParams,
  pageParams,
  sortPacksParams,
} from 'features/packs-list'
import { packListActions } from 'features/packs-list/pack-listSlice'
import { useProfile } from 'features/profile'

export const useFilters = () => {
  const dispatch = useAppDispatch()
  const { _id: userId } = useProfile() // my id

  // PackList Data
  const minCardsCount = useAppSelector(packListMinCardsCount)
  const maxCardsCount = useAppSelector(packListMaxCardsCount)
  const cardPacksTotalCount = useAppSelector(packListCardPacksTotalCount)
  const pages = useAppSelector(packListPageCount)
  const p = useAppSelector(packListPage) // current page

  // PackList QueryParams

  const min = useAppSelector(minParams)
  const max = useAppSelector(maxParams)
  const page = useAppSelector(pageParams)
  const packName = useAppSelector(packNameParams)
  const sortPacks = useAppSelector(sortPacksParams)
  const pageCount = useAppSelector(pageCountParams)

  const onSearchChange = useCallback((search: string) => {
    dispatch(packListActions.setQueryParams({ packName: search }))
  }, [])

  const onReset = useCallback(() => {
    dispatch(packListActions.resetQueryParams())
  }, [])

  const getMyPacks = useCallback(() => {
    dispatch(
      packListActions.setQueryParams({ min, max, user_id: userId, page: p, pageCount: pages })
    )
  }, [])

  const getAllPacks = useCallback(() => {
    dispatch(packListActions.setQueryParams({ user_id: '' }))
  }, [])

  const onChangeSliderValue = useCallback((event: any, numbers: number[] | number) => {
    if (Array.isArray(numbers)) {
      dispatch(packListActions.setQueryParams({ min: numbers[0], max: numbers[1] }))
    }
  }, [])

  const onPaginationChange = useCallback((page: number) => {
    dispatch(packListActions.setQueryParams({ page }))
  }, [])

  const onChangePageCount = useCallback((pageCount: number) => {
    dispatch(packListActions.setQueryParams({ pageCount }))
  }, [])

  const onSortPackTable = useCallback((TableHeaderData: string) => {
    dispatch(packListActions.setQueryParams({ sortPacks: TableHeaderData }))
  }, [])

  return {
    max,
    min,
    page,
    pageCount,
    cardPacksTotalCount,
    minCardsCount,
    maxCardsCount,
    packName,
    onSearchChange,
    onReset,
    getMyPacks,
    getAllPacks,
    sortPacks,
    onChangeSliderValue,
    onPaginationChange, // это изменение пагинации
    onChangePageCount,
    onSortPackTable,
  }
}
