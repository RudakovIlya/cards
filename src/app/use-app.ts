import { useEffect } from 'react'

import { isInitialize } from 'app/selectors'
import { useAppDispatch, useAppSelector } from 'common'
import { authMe } from 'features/auth'

export const useApp = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector(isInitialize)

  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])

  return isInit
}
