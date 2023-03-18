import { SxProps } from '@mui/material'

import { useAppSelector } from 'common'
import { user_idParams } from 'features/packs-list/selectors'

export const useSwitch = () => {
  const userId = useAppSelector(user_idParams)

  const onChangeColor = (foo?: () => void) => {
    return () => {
      foo && foo()
    }
  }

  const allActive: SxProps = {
    backgroundColor: userId ? '#fff' : '#366EFF',
    color: userId ? '#366EFF' : '#fff',
    '&:hover': {
      color: '#fff',
    },
  }
  const myActive: SxProps = {
    backgroundColor: !userId ? '#fff' : '#366EFF',
    color: !userId ? '#366EFF' : '#fff',
    '&:hover': {
      color: '#fff',
    },
  }

  return { onChangeColor, allActive, myActive, isMy: userId }
}
