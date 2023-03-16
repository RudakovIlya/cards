import { useCallback, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'common'
import { getPack, packActions } from 'features/pack/pack-slice'

export const usePackFilters = () => {
  const { packId } = useParams<{ packId: string }>()

  const dispatch = useAppDispatch()

  const packTitle = useAppSelector(state => state.pack.pack.packName)

  const { page, pageCount, cardsTotalCount, packName } = useAppSelector(state => state.pack.pack)

  const onPaginationChange = useCallback((page: number) => {
    dispatch(packActions.setQueryParams({ page }))
  }, [])

  const onChangePageCount = useCallback((pageCount: number) => {
    dispatch(packActions.setQueryParams({ pageCount }))
  }, [])

  const onSearchChange = useCallback((search: string) => {
    dispatch(packActions.setQueryParams({ cardAnswer: search }))
  }, [])

  useEffect(() => {
    dispatch(getPack({ cardsPack_id: packId }))

    return () => {
      dispatch(packActions.resetPackData())
    }
  }, [])

  return {
    page,
    pageCount,
    cardsTotalCount,
    packTitle,
    packName,
    onSearchChange,
    onPaginationChange,
    onChangePageCount,
  }
}
