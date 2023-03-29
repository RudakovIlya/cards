import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import {
  getPackList,
  maxParams,
  minParams,
  packNameParams,
  pageCountParams,
  pageParams,
  sortPacksParams,
  user_idParams,
} from 'features/packs-list'

export const useFetchPackList = () => {
  const dispatch = useAppDispatch()
  const min = useAppSelector(minParams)
  const max = useAppSelector(maxParams)
  const page = useAppSelector(pageParams)
  const user_id = useAppSelector(user_idParams)
  const packName = useAppSelector(packNameParams)
  const sortPacks = useAppSelector(sortPacksParams)
  const pageCount = useAppSelector(pageCountParams)

  useEffect(() => {
    dispatch(getPackList())
  }, [packName, user_id, max, min, sortPacks, page, pageCount])
}
