import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common/hooks/hooks'
import { authMe } from 'features/auth/auth-slice'

export const useApp = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector(state => state.app.isInit)

  useEffect(() => {
    dispatch(authMe())
  }, [])

  return isInit
}
