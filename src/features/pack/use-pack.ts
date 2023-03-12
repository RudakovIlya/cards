import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'common'
import { getPack } from 'features/pack'

export const usePack = (id: string) => {
  const dispatch = useAppDispatch()
  const pack = useAppSelector(state => state.pack)

  useEffect(() => {
    dispatch(getPack({ cardsPack_id: id }))
  }, [])

  return {
    pack,
  }
}
