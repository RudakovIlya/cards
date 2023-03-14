import { useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { getPackList } from 'features/packs-list'
import { packListActions } from 'features/packs-list/pack-listSlice'
import { useProfile } from 'features/profile'

export const useFilters = () => {
  const dispatch = useAppDispatch()
  const { minCardsCount, maxCardsCount } = useAppSelector(state => state.packList.packList)
  const { packName, user_id, max, min, sortPacks, page, pageCount } = useAppSelector(
    state => state.packList.queryParams
  )

  const { _id: userId } = useProfile()

  const onSearchChange = useCallback((search: string) => {
    dispatch(packListActions.setQueryParams({ packName: search }))
  }, [])

  const onReset = () => {
    dispatch(packListActions.resetQueryParams())
  }

  const getMyPacks = useCallback(() => {
    dispatch(packListActions.setQueryParams({ user_id: userId }))
  }, [])

  const getAllPacks = useCallback(() => {
    dispatch(packListActions.setQueryParams({ user_id: '' }))
  }, [])

  const onChangeSliderValue = useCallback((event: any, numbers: number[] | number) => {
    if (Array.isArray(numbers)) {
      dispatch(packListActions.setQueryParams({ min: numbers[0], max: numbers[1] }))
    }
  }, [])

  useEffect(() => {
    dispatch(getPackList())
  }, [packName, user_id, max, min, sortPacks, page, pageCount])

  return {
    max,
    min,
    minCardsCount,
    maxCardsCount,
    packName,
    onSearchChange,
    onReset,
    getMyPacks,
    getAllPacks,
    onChangeSliderValue,
  }
}
