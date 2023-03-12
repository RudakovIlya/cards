import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { getPackList } from 'features/packs-list'

export const usePackList = () => {
  const dispatch = useAppDispatch()
  const packList = useAppSelector(state => state.packList)

  useEffect(() => {
    dispatch(getPackList({}))
  }, [])

  return {
    packList,
  }
}
