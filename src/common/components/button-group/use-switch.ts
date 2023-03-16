import { SxProps } from '@mui/material'

import { useAppSelector } from 'common/hooks'

export const useSwitch = () => {
  const userId = useAppSelector(state => state.packList.queryParams.user_id)

  const onClickChangeColor = (foo?: () => void) => {
    return () => {
      foo && foo()
    }
  }

  const allActive: SxProps = {
    backgroundColor: userId ? '#fff' : '#366EFF',
    color: userId ? '#366EFF' : '#fff',
  }
  const myActive: SxProps = {
    backgroundColor: !userId ? '#fff' : '#366EFF',
    color: !userId ? '#366EFF' : '#fff',
  }

  return { onClickChangeColor, allActive, myActive, disabled: userId }
}
