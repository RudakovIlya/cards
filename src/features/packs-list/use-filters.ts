import { useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { getPackList } from 'features/packs-list'
import { packListActions } from 'features/packs-list/pack-listSlice'
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
  user_idParams,
} from 'features/packs-list/selectors/selectors'
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
  const user_id = useAppSelector(user_idParams)
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

  useEffect(() => {
    dispatch(getPackList())
  }, [packName, user_id, max, min, sortPacks, page, pageCount])

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
    onChangeSliderValue,
    onPaginationChange, // это изменение пагинации
    onChangePageCount,
  }
}