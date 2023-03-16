import { useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { getPackList } from 'features/packs-list'
import { packListActions } from 'features/packs-list/pack-listSlice'
import { useProfile } from 'features/profile'

export const useFilters = () => {
  const dispatch = useAppDispatch()

  const { _id: userId } = useProfile()

  const { minCardsCount, maxCardsCount, cardPacksTotalCount } = useAppSelector(
    state => state.packList.packList
  )
  const { packName, user_id, max, min, sortPacks, page, pageCount } = useAppSelector(
    state => state.packList.queryParams
  )

  const onSearchChange = useCallback((search: string) => {
    dispatch(packListActions.setQueryParams({ packName: search }))
  }, [])

  const onReset = useCallback(() => {
    dispatch(packListActions.resetQueryParams())
  }, [])

  console.log(minCardsCount, maxCardsCount)
  const getMyPacks = useCallback(() => {
    dispatch(packListActions.setQueryParams({ min: 0, max: 0, user_id: userId }))
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
