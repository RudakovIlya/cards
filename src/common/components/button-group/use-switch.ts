import { useState } from 'react'

import { SxProps } from '@mui/material'

export const useSwitch = () => {
  const [active, setActive] = useState(false)

  const onClickChangeColor = (foo?: () => void) => {
    return () => {
      setActive(!active)
      foo && foo()
    }
  }

  const allActive: SxProps = {
    backgroundColor: active ? '#fff' : '#366EFF',
    color: active ? '#366EFF' : '#fff',
  }
  const myActive: SxProps = {
    backgroundColor: !active ? '#fff' : '#366EFF',
    color: !active ? '#366EFF' : '#fff',
  }

  return { onClickChangeColor, allActive, myActive }
}
