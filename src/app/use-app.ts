import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { authMe } from 'features/auth'

export const useApp = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector(state => state.app.isInit)

  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])

  return isInit
}
